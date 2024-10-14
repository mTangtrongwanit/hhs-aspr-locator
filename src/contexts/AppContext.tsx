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
  getLocationsData,
  getTreatmentsIllnessesData,
} from "@/utils/geographicUtils.ts";
import { FilterType } from "@/utils/sharedTypes.ts";
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
  } | null>({name: "", point: new Point()});

  //Dynamically updated list of result features
  const [locations, setLocations] = useState<__esri.Graphic[] | null>(null);
  const [locationsTotals, setLocationsTotals] = useState<
    __esri.Graphic[] | null
  >(null);
  const [sortedSites, setSortedSites] = useState<__esri.Graphic[]>([]);

  const [locationsExtent, setLocationsExtent] = useState<__esri.Extent | null>(
    null
  );

  //Data from Illnesses and Treatments table
  const [treatmentIllnessData, setTIData] = useState<__esri.Graphic[] | null>(
    null
  );

  //uses above to produce a combination of the illnesses and treatments together into a data dictionary that is workable (flu: all flu treatments, covid: all covid treatments)
  const [treatmentIllnessLookup, setTILookup] = useState<{
    [key: string]: string[];
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
      // order the treatment data by the following order:
      // Oseltamivir
      // Baloxavir
      // Zanamivir
      // Peramivir
      // as provided by hhs
      const treatmentOrder = [
        'Oseltamivir Generic',
        'Oseltamivir Suspension',
        'Oseltamivir Tamiflu',
        'Balaxovir',
        'Zanamivir',
        'Lagevrio',
        'Peramivir',
        'Paxlovid',
        'Veklury',
        ]

      treatmentIllnesses?.sort((a, b) => {
        return (
          treatmentOrder.findIndex(
        (order) => order.toLowerCase() === a.attributes.display_name.toLowerCase()
          ) -
          treatmentOrder.findIndex(
        (order) => order.toLowerCase() === b.attributes.display_name.toLowerCase()
          )
        );
      });

      setTIData(treatmentIllnesses ?? []);
    };
    fetchTreatmentsIllnesses();
  }, []);

  /** Get the locations and set locations and locations extent to state */
  useEffect(() => {
    const getLocations = async () => {
      if (!searchPoint) return;
      try {
        const locs = await getLocationsData(
          searchPoint?.point
        );
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
      const treatmentIllnessLookup: { [key: string]: string[] } = {};

      treatmentIllnessData.forEach((treatment) => {
        const illness = treatment.attributes.illness;
        const treatmentName = treatment.attributes.display_name;
        if (treatmentIllnessLookup[illness as string]) {
          treatmentIllnessLookup[illness].push(treatmentName);
        } else {
          treatmentIllnessLookup[illness] = [treatmentName];
        }
      });
      setTILookup(treatmentIllnessLookup);
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
      (location) => location.attributes.OBJECTID
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
      "Cannot use 'useAppContext' outside of a AppContextProvider"
    );
  }
  return appContext;
};
// #endregion =================== EXPORTED COMPONENT ==============================
