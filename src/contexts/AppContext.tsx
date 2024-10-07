// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext, useState, useEffect } from "react";

// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { AppContextType, AppContextProps } from "./AppContext.types.tsx";
import {
  getLocationsData,
  getTreatmentsIllnessesData,
} from "@/utils/geographicUtils.ts";
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

  const [searchPoint, setSearchPoint] = useState<{
    name: string;
    point: __esri.Point;
  } | null>(null);
  const [locations, setLocations] = useState<__esri.Graphic[] | null>(null);
  const [locationsExtent, setLocationsExtent] = useState<__esri.Extent | null>(
    null
  );
  const [treatmentsIllnesses, setTreatmentsIllnesses] = useState<
    __esri.Graphic[] | null
  >(null);
  const [illnessesTreatments, setIllnessesTreatments] = useState<{
    [key: string]: string[];
  }>({});
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
      setTreatmentsIllnesses(treatmentIllnesses ?? []);
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
          searchPoint?.point ?? initialSearchPoint.point
        );
        setLocations(locs?.features.features ?? []);
        setLocationsExtent(locs?.extent ?? null);
      } catch (error) {
        console.error("Error getting locations data: ", error);
      }
    };
    getLocations();
  }, [searchPoint]);

  /** Set illnessesTreatments dictionary when treatmentsIllness data is set */
  useEffect(() => {
    if (treatmentsIllnesses) {
      // Combine treatments and illnesses into a dictionary
      const illnessesTreatments: { [key: string]: string[] } = {};
      treatmentsIllnesses.forEach((treatment) => {
        const illness = treatment.attributes.illness;
        const treatmentName = treatment.attributes.display_name;
        if (illnessesTreatments[illness as string]) {
          illnessesTreatments[illness].push(treatmentName);
        } else {
          illnessesTreatments[illness] = [treatmentName];
        }
      });
      setIllnessesTreatments(illnessesTreatments);
    }
  }, [treatmentsIllnesses]);
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
        locations: locations,
        locationsExtent: locationsExtent,
        illnessesTreatments: illnessesTreatments,
        setIllnessesTreatments: setIllnessesTreatments,
        selectedSort: selectedSort,
        setSelectedSort: setSelectedSort,
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
      "Cannot use 'useAppContext' outside of a AppContextProvider"
    );
  }
  return appContext;
};
// #endregion =================== EXPORTED COMPONENT ==============================
