/**
 * Search
 *
 * Search component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useRef, useEffect, useState } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Search from "@arcgis/core/widgets/Search";
import Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { useAppContext } from "@/contexts/AppContext";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Search.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const SearchComponent = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { locationsMapView, searchPoint, setSearchPoint } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [searchWidget, setSearchWidget] = useState<Search | null>(null);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!locationsMapView || !searchRef.current) {
      return;
    }

    // const countryLayer = new FeatureLayer({
    //   url: config.treatmentData.treatment_sites.locationsLayer,
    // });

    /**
     * Set up Search widget
     */
    const search = new Search({
      container: document.createElement("div"),
      view: locationsMapView,
      // includeDefaultSources: false,
      popupEnabled: false,
    });
    //add to DOM
    searchRef.current.appendChild(search.container as Node);

    //add to component state
    setSearchWidget(search);
    /**
     * Watch for result selection to set AOI
     */
    search.on("select-result", function (event) {
      setSearchPoint(new Point(event.result.feature.geometry.extent.center));
    });

    // Note: We need to create a fresh element for the widget everytime it is built, can't just assign it to ref.current or it won't re-render.
    return () => search.destroy();
  }, [locationsMapView, setSearchPoint]);

  /**
   * Effect to update widget with SelectionMap results
   */
  useEffect(() => {
    //set selectedResult to AOI if it's not already there.
    if (searchPoint !== null && searchWidget !== null) {
      searchWidget.searchTerm =
        searchPoint.latitude + ", " + searchPoint.longitude;
      // console.log(AOI.graphic.geometry)
    }
  }, [searchPoint, searchWidget]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return <div className={`e-search`} ref={searchRef}></div>;
  // #endregion -------------------- Render ------------------------------------
};
export default SearchComponent;
// #endregion ================ EXPORTED COMPONENT ==============================
