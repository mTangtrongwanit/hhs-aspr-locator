// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext, useState, useEffect } from "react";

// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { AppContextType, AppContextProps } from "./AppContext.types.tsx";
import {
  getLocationsCount,
  getLocationsData,
  getTreatmentsIllnessesData,
} from "@/utils/geographicUtils.ts";
import { FilterType } from "@/utils/sharedTypes.ts";
import config from "@/config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  /**
   * Refs for tracking heights of elements to properly size Map
   */
  const [bannerHeight, setBannerHeight] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  // Locations Map and Treatment Site
  const [locationsMapView, setLocationsMapView] =
    useState<__esri.MapView | null>(null);

  const [selectedTreatmentSite, setSelectedTreatmentSite] =
    useState<__esri.Graphic | null>(null);
  // Dynamically updated search point
  const [searchPoint, setSearchPoint] = useState<{
    name: string;
    point: __esri.Point;
  } | null>({ name: "", point: new Point() });

  //Dynamically updated list of result features
  const [locations, setLocations] = useState<__esri.Graphic[] | null>(null);
  const [locationsTotals, setLocationsTotals] = useState<
    __esri.Graphic[] | null
  >(null);
  const [sortedSites, setSortedSites] = useState<__esri.Graphic[]>([]);

  const [locationsExtent, setLocationsExtent] = useState<__esri.Extent | null>(
    null,
  );

  //Data from Illnesses and Treatments table
  const [treatmentIllnessData, setTIData] = useState<__esri.Graphic[] | null>(
    null,
  );

  //uses above to produce a combination of the illnesses and treatments together into a data dictionary that is workable (flu: all flu treatments, covid: all covid treatments)
  const [treatmentIllnessLookup, setTILookup] = useState<{
    [key: string]: {
      name: string;
      field: string;
    }[];
  }>({});

  //Valid if url params contain a facility ID (aka, output of the 'Copy Location Link' button.)
  const [sharedSiteFacilityID, setSFID] = useState<string | null>(null);

  /**
   * User-selectable parameters that affect what is included in the displayed results of a spatial search.
   */

  //Required input, does not default to a valid option
  const [selectedIllness, setSelectedIllness] = useState({
    label: "Illness",
    value: "",
  });

  //Optional inputs
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);
  const [featureLayer, setFeatureLayer] = useState<FeatureLayer | null>(null);
  const [selectedSort, setSelectedSort] = useState({
    label: "Distance",
    value: "distance",
  });
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------
  // #region -------------------- Hooks (Other) --------------------------------
  /** Get the treatement illness data and set it to state */
  useEffect(() => {
    const fetchTreatmentsIllnesses = async () => {
      const treatmentIllnesses = await getTreatmentsIllnessesData();
      // custom oseltamivir parent object to use in generic filtering
      const oseltamivirParent = {
        attributes: {
          OBJECTID: 1,
          display_name: "Oseltamivir",
          field_name: "has_Oseltamivir",
          illness: "Flu",
        },
      } as __esri.Graphic;

      const vekluryParent = {
        attributes: {
          OBJECTID: 2,
          display_name: "Outpatient Veklury",
          field_name: "has_veklury",
          illness: "COVID",
        },
      } as __esri.Graphic;

      // remove 'Oseltamivir Generic',
      // 'Oseltamivir Suspension',
      // 'Oseltamivir Tamiflu',
      // 'Veklury'
      // and add oseltamivirParent and vekluryParent
      // to treatmentIllnesses
      const filterTreatmentIllnesses =
        treatmentIllnesses &&
        [vekluryParent, oseltamivirParent, ...treatmentIllnesses]?.filter(
          (treatment) => {
            return (
              treatment.attributes.display_name !== "Oseltamivir Generic" &&
              treatment.attributes.display_name !== "Oseltamivir Suspension" &&
              treatment.attributes.display_name !== "Oseltamivir Tamiflu" &&
              treatment.attributes.display_name !== "Veklury"
            );
          },
        );

      filterTreatmentIllnesses?.sort((a, b) => {
        return (
          config.medicationOrder.findIndex(
            // Order by the index of the medicationOrder array
            (order) =>
              order.toLowerCase() === a.attributes.display_name.toLowerCase(),
          ) -
          config.medicationOrder.findIndex(
            (order) =>
              order.toLowerCase() === b.attributes.display_name.toLowerCase(),
          )
        );
      });

      setTIData(filterTreatmentIllnesses ?? []);
    };
    fetchTreatmentsIllnesses();
  }, []);

  /** Update the locations by searchPoint/illness/medication */
  useEffect(() => {
    if (!searchPoint || !selectedIllness.value) return;

    // build the illness clause
    const illnessTreatmentFields =
      config.fieldsets[
        `${selectedIllness.value.toLowerCase()}TreatmentFields` as keyof typeof config.fieldsets
      ] ?? [];
    const illnessClause = illnessTreatmentFields
      .map((field) => `LOWER(${field}) = 'true'`)
      .join(" OR ");

    // build the medications clause
    const medicationClause = selectedMedications
      .map((medication) =>
        treatmentIllnessLookup[selectedIllness.value]?.find(
          (treatment) => treatment.name === medication,
        ),
      )
      .filter((treatment) => treatment)
      .map((treatment) => `LOWER(${treatment?.field}) = 'true'`)
      .join(" AND ");

    // build the where clause from illness/medication clauses
    const where = medicationClause.length
      ? `(${illnessClause}) AND (${medicationClause})`
      : illnessClause;

    // find the appropriate search radius
    const MAX_SEARCH_RADIUS = 50; // starting full search radius
    const MIN_SEARCH_RADIUS_INCREMENT = 2; // minimum increment to reduce the search radius
    const DISPLAY_COUNT = 100; // number of results to display
    const COUNT_BUFFER_FACTOR = 2; // conservative buffer to ensure we don't miss any points
    const DENSITY_ADJUSTMENT_FACTOR = 0.75; // density adjustment factor to account for clustering of points near cities (also assuming the search point is near a city, otherwise why would we have too many results?)
    const narrowSearchRadius = (radius: number): Promise<number> =>
      getLocationsCount(searchPoint.point, radius, where)
        .then((count) => {
          console.log("RADIUS CHECK", radius, count);
          const target = DISPLAY_COUNT * COUNT_BUFFER_FACTOR;
          // if the count is greater than the target count, calculate a new radius
          if (count > target) {
            // calculate the density of points (accounting for clustering near city center)
            const area = Math.PI * Math.pow(radius, 2);
            const density =
              (count / area) *
              (DENSITY_ADJUSTMENT_FACTOR * COUNT_BUFFER_FACTOR);
            // calculate a new radius (with a minimum reduction)
            const new_radius = Math.min(
              Math.sqrt(target / density / Math.PI),
              radius - MIN_SEARCH_RADIUS_INCREMENT,
            );
            return narrowSearchRadius(new_radius);
          }
          return radius;
        })
        .catch(() => radius);

    narrowSearchRadius(MAX_SEARCH_RADIUS).then(async (distance) => {
      const locs = await getLocationsData(searchPoint.point, distance, where);
      console.log("RE-QUERY", searchPoint, where, distance, locs);
    });
  }, [
    treatmentIllnessLookup,
    searchPoint,
    selectedIllness,
    selectedMedications,
  ]);

  /** Get the locations and set locations and locations extent to state */
  useEffect(() => {
    const getLocations = async () => {
      if (!searchPoint) return;
      try {
        const locs = await getLocationsData(searchPoint?.point);
        setLocations(locs?.features.features ?? []);
        setLocationsTotals(locs?.features.features ?? []);
        setLocationsExtent(locs?.extent ?? null);
      } catch (error) {
        console.error("Error getting locations data: ", error);
      }
    };
    getLocations();
  }, [searchPoint]);

  /** Set treatmentIllnessLookup dictionary when treatmentsIllness data is set */
  useEffect(() => {
    if (treatmentIllnessData) {
      // Combine treatments and illnesses into a dictionary
      setTILookup(
        treatmentIllnessData.reduce(
          (acc, feature) => {
            const illness = feature.attributes.illness;
            const treatment = {
              name: feature.attributes.display_name,
              field: feature.attributes.field_name,
            };
            if (acc[illness]) {
              acc[illness].push(treatment);
            } else {
              acc[illness] = [treatment];
            }
            return acc;
          },
          {} as { [key: string]: { name: string; field: string }[] },
        ),
      );
    }
  }, [treatmentIllnessData]);

  useEffect(() => {
    if (!featureLayer || !locations || !locationsMapView) return;

    let where = "";
    if (sortedSites.length === 0) {
      // Set the definition expression to return no features
      featureLayer.definitionExpression = "OBJECTID = -1";
      return;
    }
    const objectIds = sortedSites.map(
      (location) => location.attributes.OBJECTID,
    );
    if (objectIds.length === 0) {
      return;
    }
    where = `OBJECTID IN (${objectIds.join(",")})`;
    featureLayer.definitionExpression = where;
  }, [featureLayer, locations, locationsMapView, sortedSites]);
  // #endregion -------------------- Hooks (Other) --------------------------------
  // #region ----------------------- Render ------------------------------------
  return (
    <AppContext.Provider
      value={
        {
          bannerHeight: bannerHeight,
          setBannerHeight: setBannerHeight,
          headerHeight: headerHeight,
          setHeaderHeight: setHeaderHeight,
          searchPoint: searchPoint,
          setSearchPoint: setSearchPoint,
          locationsMapView: locationsMapView,
          setLocationsMapView: setLocationsMapView,
          selectedTreatmentSite: selectedTreatmentSite,
          setSelectedTreatmentSite: setSelectedTreatmentSite,
          treatmentIllnessLookup: treatmentIllnessLookup,
          treatmentIllnessData: treatmentIllnessData,
          locations: locations,
          setLocationsTotals: setLocationsTotals,
          locationsTotals: locationsTotals,
          setLocations: setLocations,
          locationsExtent: locationsExtent,
          setLocationsExtent: setLocationsExtent,
          setTILookup: setTILookup,
          selectedSort: selectedSort,
          setSelectedSort: setSelectedSort,
          selectedIllness: selectedIllness,
          setSelectedIllness: setSelectedIllness,
          sharedSiteFacilityID: sharedSiteFacilityID,
          setSFID: setSFID,
          selectedMedications: selectedMedications,
          setSelectedMedications: setSelectedMedications,
          selectedFilters: selectedFilters,
          setSelectedFilters: setSelectedFilters,
          setFeatureLayer: setFeatureLayer,
          featureLayer: featureLayer,
          sortedSites,
          setSortedSites,
        } as AppContextType
      }
    >
      {children}
    </AppContext.Provider>
  );
  // #endregion -------------------- Render ------------------------------------
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    // the below text is for developers not for users. It does not need to be translated
    throw new Error(
      "Cannot use 'useAppContext' outside of a AppContextProvider",
    );
  }
  return appContext;
};
// #endregion =================== EXPORTED COMPONENT ==============================
