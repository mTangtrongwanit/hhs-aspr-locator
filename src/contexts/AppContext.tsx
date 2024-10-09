// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext, useState, useEffect } from "react";

// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import {
  AppContextType,
  AppContextProps
} from "./AppContext.types.tsx";
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

  // Initial search point for locations when app loads or when user clears search
  const initialSearchPoint = {
    name: "Washington, District of Columbia",
    point: new Point({
      longitude: -77.0199124,
      latitude: 38.892062100000004,
    }),
  };
  // Dynamically updated search point
  const [searchPoint, setSearchPoint] = useState<{
    name: string;
    point: __esri.Point;
  } | null>(null);

  //Dynamically updated list of result features
  const [locations, setLocations] = useState<__esri.Graphic[] | null>(null);
  // Currently set to 50-mile radius around searchPoint
  const [locationsExtent, setLocationsExtent] = useState<__esri.Extent | null>(
    null,
  );

  //Data from Illnesses and Treatments table
  const [treatmentIllnessData, setTIData] = useState<
    __esri.Graphic[] | null
  >(null);

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
      setTIData(treatmentIllnesses ?? []);
    };
    fetchTreatmentsIllnesses();
  }, []);

  /** Set search point to initial search point when component mounts */
  useEffect(() => {
    setSearchPoint(initialSearchPoint);
  }, []);

  /** Get the locations and set locations and locations extent to state */
  useEffect(() => {
    const getLocations = async () => {
      try {
        const locs = await getLocationsData(
          searchPoint?.point ?? initialSearchPoint.point,
        );
        setLocations(locs?.features.features ?? []);
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
  // #endregion -------------------- Hooks (Other) --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <AppContext.Provider
      value={{
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
      }}
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
