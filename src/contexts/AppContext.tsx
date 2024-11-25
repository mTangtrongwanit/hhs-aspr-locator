// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext, useState } from "react";

// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Circle from "@arcgis/core/geometry/Circle";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { AppContextType, AppContextProps } from "./AppContext.types.tsx";
import { useTreatmentIllnessData } from "./Hooks/useTreatmentIllnessData.tsx";
import { useFilterList } from "./Hooks/useFilterList.tsx";
import { useFilterMap } from "./Hooks/useFilterMap.tsx";
import { useCircleRadius } from "./Hooks/useCircleRadius.tsx";
import { useTreatmentIllnessLookup } from "./Hooks/useTreatmentIllnessLookup.tsx";
import { useFilteredSites } from "./Hooks/useFilteredSites.tsx";
import { FilterType } from "@/utils/sharedTypes.ts";
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
  const [circle, setCircle] = useState<Circle | null>(null);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  const treatmentIllnessLookup = useTreatmentIllnessLookup({
    treatmentIllnessData,
  });

  const filteredSites = useFilteredSites({
    locations,
    selectedFilters,
  });
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  /** Get the treatement illness data and set it to state */
  useTreatmentIllnessData({ setTIData });

  /** Update the locations by searchPoint/illness/medication */
  useFilterList({
    treatmentIllnessLookup,
    searchPoint,
    selectedIllness,
    selectedMedications,
    sharedSiteFacilityID,
    setLocations,
    setRadius,
  });

  // useEffect to watch for changes in the filteredSites and update the feature layer definition expression
  useFilterMap({
    featureLayer,
    locations,
    locationsMapView,
    filteredSites,
    radius,
    selectedIllness,
    selectedMedications,
    selectedFilters,
    treatmentIllnessLookup,
  });

  // useEffect to watch for changes in the selected Illness and search radius and update the map view
  // with a circle around the search area
  useCircleRadius({
    searchPoint,
    locationsMapView,
    selectedIllness,
    radius,
    setCircle,
  });
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
          circle,
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
