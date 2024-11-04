// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Circle from "@arcgis/core/geometry/Circle";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import GraphicLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { AppContextType, AppContextProps } from "./AppContext.types.tsx";
import {
  calculateDistanceBetweenTwoPoints,
  getLocationsCount,
  getLocationsData,
  getTreatmentsIllnessesData,
} from "@/utils/geographicUtils.ts";
import { isTrue, type FilterType } from "@/utils";
import config from "@/config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  // #region -------------------- Hooks (State) --------------------------------
  /**
   * Refs for tracking heights of elements to properly size Map
   */
  const [bannerHeight, setBannerHeight] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  /** Locations Map View & Treatments Site Layer*/
  const [locationsMapView, setLocationsMapView] =
    useState<__esri.MapView | null>(null);
  const [featureLayer, setFeatureLayer] = useState<FeatureLayer | null>(null);

  /** Data from Illnesses and Treatments table */
  const [treatmentIllnessData, setTIData] = useState<__esri.Graphic[] | null>(
    null,
  );
  /** Locations data */
  const [locations, setLocations] = useState<__esri.Graphic[]>([]);

  /** URL Parameter specified facility ID */
  const [sharedSiteFacilityID, setSFID] = useState<string | null>(null);

  /** User chosen search point */
  const [searchPoint, setSearchPoint] = useState<{
    name: string;
    point: __esri.Point;
  } | null>(null);
  /**
   * User-selectable parameters that affect what is included in the displayed results of a spatial search.
   */
  const [selectedIllness, setSelectedIllness] = useState({
    label: "Illness",
    value: "",
  });
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);
  const [selectedSort, setSelectedSort] = useState({
    label: "Distance",
    value: "distance",
  });

  /** Selected treatment site */
  const [selectedTreatmentSite, setSelectedTreatmentSite] =
    useState<__esri.Graphic | null>(null);
  // Search radius state
  const [radius, setRadius] = useState<number>(50);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  const treatmentIllnessLookup = useMemo(
    () =>
      (treatmentIllnessData ?? []).reduce(
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
    [treatmentIllnessData],
  );

  const filteredSites = useMemo(
    () =>
      locations.filter((location) =>
        selectedFilters.every(
          (filter) =>
            isTrue(
              location.attributes[
                config.treatmentData.fields[
                  filter.name as keyof typeof config.treatmentData.fields
                ].name
              ],
            ) ||
            (filter.name === "is_pap" &&
              isTrue(
                location.attributes[
                  config.treatmentData.fields.has_USG_product.name
                ],
              )),
        ),
      ),
    [locations, selectedFilters],
  );
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

      // remove 'Oseltamivir Generic',
      // 'Oseltamivir Suspension',
      // 'Oseltamivir Tamiflu',
      // 'Veklury'
      // and add oseltamivirParent and vekluryParent
      // to treatmentIllnesses
      const filterTreatmentIllnesses =
        treatmentIllnesses &&
        [oseltamivirParent, ...treatmentIllnesses]?.filter((treatment) => {
          return (
            treatment.attributes.display_name !== "Oseltamivir Generic" &&
            treatment.attributes.display_name !== "Oseltamivir Suspension" &&
            treatment.attributes.display_name !== "Oseltamivir Tamiflu" &&
            treatment.attributes.display_name !== "Veklury"
          );
        });

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
    setLocations([]);
    if (!sharedSiteFacilityID && (!searchPoint || !selectedIllness.value)) {
      return;
    }

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
      .map(
        (medication) =>
          treatmentIllnessLookup[selectedIllness.value]?.find(
            (treatment) => treatment.name === medication,
          ),
      )
      .filter((treatment) => treatment)
      .map((treatment) =>
        treatment?.field === "has_Oseltamivir"
          ? `LOWER(has_oseltamivir_generic) = 'true' OR LOWER(has_oseltamivir_suspension) = 'true' OR LOWER(has_oseltamivir_tamiflu) = 'true'`
          : `LOWER(${treatment?.field}) = 'true'`,
      )
      .join(" AND ");

    // build the where clause from illness/medication clauses
    const where = sharedSiteFacilityID
      ? `facility_id = '${sharedSiteFacilityID}'`
      : medicationClause.length
      ? `(${illnessClause}) AND (${medicationClause})`
      : illnessClause;

    // find the appropriate search radius
    const MAX_SEARCH_RADIUS = 50; // starting full search radius
    const MIN_SEARCH_RADIUS_INCREMENT = 2; // minimum increment to reduce the search radius
    const DISPLAY_COUNT = 100; // number of results to display
    const COUNT_BUFFER_FACTOR = 2; // conservative buffer to ensure we don't miss any points
    const DENSITY_ADJUSTMENT_FACTOR = 0.75; // density adjustment factor to account for clustering of points near cities (also assuming the search point is near a city, otherwise why would we have too many results?)
    const narrowSearchRadius = (radius: number): Promise<number> =>
      // @ts-expect-error - TS doesn't detect that we won't reach here if searchPoint is null
      getLocationsCount(searchPoint.point, radius, where)
        .then((count) => {
          const target = DISPLAY_COUNT * COUNT_BUFFER_FACTOR;
          // if the count is greater than the target count, calculate a new radius
          if (count > target) {
            // calculate a new radius (w/minimum increment) using the density of points (accounting for clustering near city center)
            // area = π * radius^2
            // density = count / area * density adjustment factor
            // new_area = target / density
            // new_radius = sqrt(new_area / π) = radius * sqrt(target / (count * density adjustment factor))
            const new_radius = Math.min(
              radius *
                Math.sqrt(
                  target /
                    (count * (DENSITY_ADJUSTMENT_FACTOR * COUNT_BUFFER_FACTOR)),
                ),
              radius - MIN_SEARCH_RADIUS_INCREMENT,
            );
            return narrowSearchRadius(new_radius);
          }
          setRadius(radius);
          return radius;
        })
        .catch(() => radius);

    (sharedSiteFacilityID
      ? Promise.resolve(MAX_SEARCH_RADIUS)
      : narrowSearchRadius(MAX_SEARCH_RADIUS)
    )
      .then((distance) =>
        // get the locations using the narrowed search radius
        getLocationsData(searchPoint?.point, distance, where),
      )
      .then((allLocations) => {
        // enrich the locations
        const allLocationsEnriched = allLocations.map((location) => {
          location.attributes.distance =
            calculateDistanceBetweenTwoPoints(
              location.attributes,
              searchPoint,
            ) ?? 0;
          location.attributes.has_covid_treatments =
            config.fieldsets.covidTreatmentFields.some((field) =>
              isTrue(location.attributes[field]),
            );
          location.attributes.has_flu_treatments =
            config.fieldsets.fluTreatmentFields.some((field) =>
              isTrue(location.attributes[field]),
            );

          return location;
        });

        // sort the locations by distance and clip to display count
        const displayLocations = allLocationsEnriched
          .sort((a, b) => a.attributes.distance - b.attributes.distance)
          .slice(0, DISPLAY_COUNT);

        setLocations(displayLocations);
      })
      .catch((error) => {
        console.error("Error getting locations data: ", error);
      });
  }, [
    treatmentIllnessLookup,
    searchPoint,
    selectedIllness,
    selectedMedications,
    sharedSiteFacilityID,
  ]);

  // useEffect to watch for changes in the filteredSites and update the feature layer definition expression
  useEffect(() => {
    if (!featureLayer || !locations || !locationsMapView) return;

    let where = "";
    if (filteredSites.length === 0) {
      // Set the definition expression to return no features
      featureLayer.definitionExpression = "OBJECTID = -1";
      return;
    }
    const objectIds = filteredSites.map(
      (location) => location.attributes.OBJECTID,
    );
    if (objectIds.length === 0) {
      return;
    }
    where = `OBJECTID IN (${objectIds.join(",")})`;
    featureLayer.definitionExpression = where;
  }, [featureLayer, locations, locationsMapView, filteredSites, radius]);

  // useEffect to watch for changes in the selected Illness and search radius and update the map view
  // with a circle around the search area
  useEffect(() => {
    if (!searchPoint || !locationsMapView || !selectedIllness?.value) return;
    // add a circle to the map at the search point
    const circle = new Circle({
      center: new Point({
        latitude: searchPoint?.point.latitude,
        longitude: searchPoint?.point.longitude,
        spatialReference: locationsMapView.spatialReference,
      }),
      radius: radius,
      radiusUnit: "miles",
      spatialReference: locationsMapView.spatialReference,
    });
    const circleLayer = new GraphicLayer({
      graphics: [
        new Graphic({
          geometry: circle,
          symbol: new SimpleFillSymbol({
            color: [0, 0, 0, 0.25], // grey color with 25% opacity
          }),
        }),
      ],
    });
    locationsMapView.map.addMany([circleLayer]);
    // cleanup by destroying the circle layer
    return () => {
      locationsMapView.map.remove(circleLayer);
      circleLayer.destroy();
    }; 
  }, [selectedIllness, locationsMapView, radius, searchPoint]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <AppContext.Provider
      value={
        {
          bannerHeight,
          setBannerHeight,
          headerHeight,
          setHeaderHeight,
          featureLayer,
          setFeatureLayer,
          locationsMapView,
          setLocationsMapView,
          treatmentIllnessData,
          treatmentIllnessLookup,
          locations,
          sharedSiteFacilityID,
          setSFID,
          searchPoint,
          setSearchPoint,
          selectedIllness,
          setSelectedIllness,
          selectedMedications,
          setSelectedMedications,
          selectedFilters,
          setSelectedFilters,
          selectedSort,
          setSelectedSort,
          selectedTreatmentSite,
          setSelectedTreatmentSite,
          filteredSites,
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
