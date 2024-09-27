// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext, useState } from "react";

// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point.js";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { AppContextType, AppContextProps } from "./AppContext.types.tsx";

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
  const [searchPoint, setSearchPoint] = useState<__esri.Point | null>(
    new Point({
      longitude: -77.009056,
      latitude: 38.889805, // Washington, DC
    })
  );
  // Locations Map and Treatment Site
  const [locationsMapView, setLocationsMapView] =
    useState<__esri.MapView | null>(null);
  const [selectedTreatmentSite, setSelectedTreatmentSite] =
    useState<__esri.Graphic | null>(null);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
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
