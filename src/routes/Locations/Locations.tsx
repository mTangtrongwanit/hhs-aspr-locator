/**
 * Locations Page
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useRef, useState, useEffect } from "react";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation, Trans } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import useResizeObserver from "@react-hook/resize-observer";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledLocationsContent,
  StyledListContainer,
  StyledListNoResultsContainer,
  StyledListTitleContainer,
  StyledListOptionsContainer,
  StyledMapContainer,
  StyledSearchContainer,
  StyledButton,
} from "./Locations.styles";
import PopoverMultiSelect from "@/components/PopoverMultiSelect";
import Card from "@/components/Card";
import LocationsMap from "@/components/LocationsMap";
import DropdownSingleSelect from "@/components/DropdownSingleSelect";
import { calculateDistanceBetweenTwoPoints } from "@/utils/geographicUtils";
import Search from "@/components/Search";
import { useAppContext } from "@/contexts/AppContext";
import { SiteAttributesType, SiteType } from "@/utils";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import MapIcon from "@/assets/icons/map.svg";
import ListIcon from "@/assets/icons/list.svg";
import MagnifyingGlass from "@/assets/icons/magnifying-glass.svg";
import config from "@/config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const Locations = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    bannerHeight,
    headerHeight,
    searchPoint,
    selectedSort,
    selectedIllness,
    locations,
    setSFID,
    sharedSiteFacilityID,
    sortedSites,
    setSortedSites,
  } = useAppContext();

  const searchContRef = useRef<HTMLDivElement>(null);

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [searchContHeight, setSearchContHeight] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const [isMobileListView, setIsMobileListView] = useState<boolean>(true);
  // const [sortedSites, setSortedSites] = useState<Site[]>([]);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------

  //get initial size
  useEffect(() => {
    if (searchContRef.current !== null) {
      setSearchContHeight(searchContRef.current.clientHeight);
    }
  }, []);

  //get size when element updates
  useResizeObserver(searchContRef.current, (entry) =>
    setSearchContHeight(entry.contentRect.height)
  );

  useEffect(() => {
    setTotalHeight(bannerHeight + headerHeight + searchContHeight);
  }, [bannerHeight, headerHeight, searchContHeight]);

  // Highlight the location if the facility ID in the URL matches the facility ID of the service provider
  useEffect(() => {
    if (searchParams.has("facility_id") && searchParams.has("geopoint")) {
      setSFID(searchParams.get("facility_id"));
    }
  }, [searchParams]);

  /** Filter and sort the sites based on the values of the illness and sort dropdowns. */
  /** Medications, Filters effects handled in PopoverMultiSelect */
  useEffect(() => {
    if (locations == null) {
      return;
    }
    //Single card should be displayed
    if (sharedSiteFacilityID !== null) {
      const filteredLocs = locations.filter((location) => {
        return sharedSiteFacilityID == location.attributes.facility_id;
      });
      setSortedSites(filteredLocs);
      return;
    }
    const filterAndSort = async () => {
      const updatedSites = await Promise.all(
        locations.map(async (site: object) => {
          const serviceSite: SiteType = site as SiteType;
          const serviceSiteAttributes: SiteAttributesType =
            serviceSite.attributes;

          // Fetch distance
          const distance = await calculateDistanceBetweenTwoPoints(
            serviceSiteAttributes,
            searchPoint
          );
          serviceSiteAttributes.distance = distance ?? 0;

          // Evaluate whether site has treatments for the different illnesses
          serviceSite.attributes.has_flu_treatments = false;
          serviceSite.attributes.has_covid_treatments = false;
          config.fieldsets.fluTreatmentFields.forEach((field) => {
            if (
              serviceSiteAttributes[`${field}` as keyof SiteAttributesType]
                ?.toString()
                .toLowerCase() == "true"
            ) {
              serviceSite.attributes.has_flu_treatments = true;
            }
          });
          config.fieldsets.covidTreatmentFields.forEach((field) => {
            if (
              serviceSiteAttributes[`${field}` as keyof SiteAttributesType]
                ?.toString()
                .toLowerCase() == "true"
            ) {
              serviceSite.attributes.has_covid_treatments = true;
            }
          });
          return serviceSite;
        })
      );

      const sortedSites = updatedSites.sort((a, b) => {
        if (selectedSort.value === "distance") {
          const distanceA = a.attributes.distance || 0;
          const distanceB = b.attributes.distance || 0;
          return distanceA - distanceB;
        } else if (selectedSort.value === "last reported") {
          const dateA = new Date(a.attributes.last_report_date).getTime();
          const dateB = new Date(b.attributes.last_report_date).getTime();
          return dateB - dateA;
        }
        return 0;
      });

      //Filter by Illness value
      const filteredSites = [...sortedSites];

      const x = filteredSites.filter((site) => {
        if (selectedIllness.value.toLowerCase() == "flu") {
          return site.attributes.has_flu_treatments == true;
        } else if (selectedIllness.value.toLowerCase() == "covid") {
          return site.attributes.has_covid_treatments == true;
        }
        return false;
      }) as __esri.Graphic[];
      setSortedSites(x);
    };

    filterAndSort();
  }, [
    searchPoint,
    selectedSort,
    selectedIllness,
    locations,
    sharedSiteFacilityID,
    setSortedSites,
  ]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  const onToggleMobileView = () => {
    setIsMobileListView((isList) => !isList);
  };

  const onToggleSelectedLoc = () => {
    if (searchParams.has("facility_id")) {
      searchParams.delete("facility_id");
      setSearchParams(searchParams);
    }
    if (searchParams.has("geopoint")) {
      searchParams.delete("geopoint");
      setSearchParams(searchParams);
    }
    setSFID(null);
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledLocationsContent className={isMobileListView ? "lView" : "mView"}>
      {
        //#region Search Container (secondary header)
      }
      <StyledSearchContainer ref={searchContRef}>
        <h2 className="visually-hidden">
          {t("Locations.Search Container Screenreader Heading")}
        </h2>
        {sharedSiteFacilityID !== null ? (
          <>
            <StyledButton as="button" onClick={onToggleSelectedLoc}>
              Search for Other Locations
            </StyledButton>
          </>
        ) : (
          <>
            <Search />
            <DropdownSingleSelect type={"illness"} />
            <PopoverMultiSelect type={"medications"} />
          </>
        )}

        <button id="listViewToggle" onClick={onToggleMobileView}>
          {isMobileListView ? <MapIcon></MapIcon> : <ListIcon></ListIcon>}
          <span>{isMobileListView ? "Map" : "List"}</span>
        </button>
      </StyledSearchContainer>

      {
        //#endregion Search Container (secondary header)
      }
      <div id="locs">
        <h2 className="visually-hidden">
          {t("Locations.Results Screenreader Heading")}
        </h2>
        <StyledListContainer>
          <StyledListTitleContainer>
            <h3>
              <Trans
                i18nKey="Locations.List Heading"
                count={sortedSites?.length}
              ></Trans>
            </h3>
            <StyledListOptionsContainer>
              <PopoverMultiSelect type="filter" />
              <DropdownSingleSelect type={"sort"} />
            </StyledListOptionsContainer>
          </StyledListTitleContainer>

          {
            //#region List Container (left column, results displayed as cards)
          }

          {sortedSites?.length === 0 ? (
            <StyledListNoResultsContainer>
              <MagnifyingGlass></MagnifyingGlass>
              <h3>Please ensure an illness and location are selected.</h3>
               <p>{t("Locations.Empty List")}</p>
              
            </StyledListNoResultsContainer>
          ) : (
            <>
              {/* tabindex for keyboard-scrollable list */}
              <ul tabIndex={0}>
                {sortedSites?.map((site: object) => {
                  const serviceSite: SiteType = site as SiteType;
                  const serviceSiteAttributes: SiteAttributesType =
                    serviceSite.attributes;
                  return (
                    <Card
                      serviceProvider={serviceSiteAttributes}
                      selected={false}
                      selectedIllness={selectedIllness.value}
                      key={serviceSiteAttributes.OBJECTID}
                    ></Card>
                  );
                })}
              </ul>
            </>
          )}
        </StyledListContainer>
        {
          //#endregion List Container (left column, results displayed as cards)
        }
        <StyledMapContainer
          style={{ "--remainder": `${totalHeight}px` } as React.CSSProperties}
        >
          <h3 className="visually-hidden">
            {t("Locations.Map Screenreader Heading")}
          </h3>
          <LocationsMap />
        </StyledMapContainer>
      </div>
    </StyledLocationsContent>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Locations;
// #endregion ================ EXPORTED COMPONENT ==============================
