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
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { useAppContext } from "@/contexts/AppContext";
import { StyledSearch } from "./Search.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const SearchComponent = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { searchPoint, setSearchPoint } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [searchWidget, setSearchWidget] = useState<Search | null>(null);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchRef.current) {
      return;
    }

    /**
     * Set up Search widget
     */
    const search = new Search({
      container: document.createElement("div"),
      locationEnabled: false,
      sources: [
        {
          url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
          countryCode: "US",
        },
      ] as __esri.LocatorSearchSourceProperties[],
    });
    //add to DOM
    searchRef.current.appendChild(search.container as Node);

    //add to component state
    setSearchWidget(search);
    /**
     * Watch for result selection to set AOI
     */
    search.on("select-result", function (event) {
      const result = event as __esri.SearchSelectResultEvent;
      const name = result.result.name;
      const geometry = result.result.feature.geometry as __esri.Point;
      setSearchPoint({ name, point: geometry });
    });

    // Note: We need to create a fresh element for the widget everytime it is built, can't just assign it to ref.current or it won't re-render.
    return () => search.destroy();
  }, [setSearchPoint]);

  /**
   * Effect to update widget with SelectionMap results
   */
  useEffect(() => {
    //Set search term to searchPoint name
    if (searchPoint !== null && searchWidget !== null) {
      searchWidget.searchTerm = searchPoint.name;
      searchWidget.includeDefaultSources = false;
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
  return (
    <StyledSearch ref={searchRef}>
      <MagnifyingGlassIcon width="18" height="18" />
    </StyledSearch>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default SearchComponent;
// #endregion ================ EXPORTED COMPONENT ==============================
