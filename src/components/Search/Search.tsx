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
import { useTranslation } from "react-i18next";
import Search from "@arcgis/core/widgets/Search";
import Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { useAppContext } from "@/contexts/AppContext";
import { StyledSearch } from "./Search.styles";

import "@/utils/i18n";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const SearchComponent = ({ placeholder }: { placeholder?: string } = {}) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const {
    searchPoint,
    setSearchPoint,
    setSelectedMedications,
    setSelectedFilters,
  } = useAppContext();
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
          url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
          countryCode: "US",
          placeholder: placeholder ?? t("Landing.Search Container Placeholder"),
        },
      ] as __esri.LocatorSearchSourceProperties[],
      includeDefaultSources: false,
    });
    //add to DOM
    searchRef.current.appendChild(search.container as Node);

    //add to component state
    setSearchWidget(search);

    /**
     * Handle Enter key press to select the first suggestion
     */
    search.on("search-complete", async (e) => {
      const suggestions = await search.viewModel.suggest(e.searchTerm);
      if (!suggestions) {
        return;
      }
      const suggestion = suggestions.results?.at(0)?.results?.at(0);
      if (suggestion) {
        search.search(suggestion);
        return;
      }
    });

    /**
     * Watch for result selection to set AOI
     */
    search.on("select-result", async (event) => {
      const result = (event as __esri.SearchSelectResultEvent).result;

      // if the user triggers the search by hitting the enter key, use the first suggestion
      if ((result as unknown as { key: string }).key === "null") {
        const suggestions = await search.viewModel.suggest();
        if (!suggestions) {
          return;
        }
        const suggestion = suggestions.results?.at(0)?.results?.at(0);
        if (suggestion) {
          search.search(suggestion);
          return;
        }
      }

      const name = result.name;
      const geometry = result.feature.geometry as __esri.Point;
      // Convert the geometry to a WebMercator point to match the map
      const webMercatorPoint = new Point({
        longitude: geometry.longitude,
        latitude: geometry.latitude,
        spatialReference: { wkid: 102100 },
      });
      setSearchPoint({ name, point: webMercatorPoint });
      setSelectedMedications([]);
      setSelectedFilters([]);
    });

    // Note: We need to create a fresh element for the widget everytime it is built, can't just assign it to ref.current or it won't re-render.
    return () => search.destroy();
  }, [
    placeholder,
    setSelectedMedications,
    setSelectedFilters,
    setSearchPoint,
    searchPoint,
  ]);

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
      <MagnifyingGlassIcon
        width="18"
        height="18"
        role="presentation"
        aria-hidden
        aria-label={t("Search.Magnifying Icon Screenreader Label")}
      />
    </StyledSearch>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default SearchComponent;
// #endregion ================ EXPORTED COMPONENT ==============================
