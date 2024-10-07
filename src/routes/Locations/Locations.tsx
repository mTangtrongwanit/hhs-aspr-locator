/**
 * Locations Page
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useRef, useState, useEffect } from "react";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledLocationsContent,
  StyledListContainer,
  StyledMapContainer,
  StyledSearchContainer,
  StyledButton,
} from "./Locations.styles";
import PopoverMultiSelect from "@/components/PopoverMultiSelect";
import Card from "@/components/Card";
import { ServiceProvider } from "@/components/Card";
import LocationsMap from "@/components/LocationsMap";
import * as treatmentSites from "../../data/treatment-sites.json";
import DropdownSingleSelect from "@/components/DropdownSingleSelect";
import { calculateDistanceBetweenTwoPoints } from "../../utils/geographicUtils";
import Search from "@/components/Search";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Landing.types";
import { useTranslation, Trans } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import useResizeObserver from "@react-hook/resize-observer";
import { useAppContext } from "@/contexts/AppContext";
import MapIcon from "@/assets/icons/map.svg";
import ListIcon from "@/assets/icons/list.svg";
import config from "@/config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region ========================= TYPES =====================================
interface SiteAttributes {
  OBJECTID: number;
  facility_id: string;
  provider_name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: number;
  public_phone?: string;
  latitude: number;
  longitude: number;
  geopoint: string;
  geopoint_x: number;
  geopoint_y: number;
  last_report_date: number;
  is_pap?: string;
  is_prescribing_svcs_available?: string;
  url_appointment?: string;
  home_delivery?: string;
  is_icatt_site?: string;
  has_USG_product?: string;
  has_commercial_product?: string;
  has_paxlovid?: string;
  has_commercial_paxlovid?: string;
  has_usg_paxlovid?: string;
  has_lagevrio?: string;
  has_commercial_lagevrio?: string;
  has_usg_lagevrio?: string;
  has_veklury?: string;
  has_peramivir?: string;
  has_zanamivir?: string;
  has_baloxavir?: string;
  has_oseltamivir_generic?: string;
  has_oseltamivir_suspension?: string;
  has_oseltamivir_tamiflu?: string;
  non_public_yn?: string;
  grantee_code?: string;
  distance?: number;
  has_flu_treatments?: boolean;
  has_covid_treatments?: boolean;
}

interface Site {
  attributes: SiteAttributes;
}
// #endregion ========================== TYPES ===================================

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
    locations
  } = useAppContext();

  const searchContRef = useRef<HTMLDivElement>(null);

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [searchContHeight, setSearchContHeight] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const [isMobileListView, setIsMobileListView] = useState<boolean>(true);
  const [sortedSites, setSortedSites] = useState<Site[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
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
    setSearchContHeight(entry.contentRect.height),
  );

  useEffect(() => {
    //console.log("banner " + bannerHeight + " header " + headerHeight + " search " + searchContHeight);
    setTotalHeight(bannerHeight + headerHeight + searchContHeight);
  }, [bannerHeight, headerHeight, searchContHeight]);

  // Highlight the location if the facility ID in the URL matches the facility ID of the service provider
  useEffect(() => {
    if (searchParams.has("facility_id")) {
      setSelectedLocation(searchParams.get("facility_id"));
    }
  }, [searchParams]);

  /** Sort the sites based on the value of the sort dropdown. */
  useEffect(() => {
    const fetchDistancesAndSort = async () => {
      const updatedSites = await Promise.all(
        treatmentSites.features.map(async (site: object) => {
          const serviceProver: Site = site as Site;
          const serviceProvider: ServiceProvider = serviceProver.attributes;
          const distance = await calculateDistanceBetweenTwoPoints(
            serviceProvider,
            searchPoint,
          );
          serviceProvider.distance = distance ?? 0;

          // Evaluate whether site has treatments for the different illnesses
          serviceProver.attributes.has_flu_treatments = false;
          serviceProver.attributes.has_covid_treatments = false;
          config.fieldsets.fluTreatmentFields.forEach((field) => {
            if (
              serviceProvider[`${field}` as keyof ServiceProvider] == "TRUE"
            ) {
              serviceProver.attributes.has_flu_treatments = true;
            }
          });
          config.fieldsets.covidTreatmentFields.forEach((field) => {
            if (
              serviceProvider[`${field}` as keyof ServiceProvider] == "TRUE"
            ) {
              serviceProver.attributes.has_covid_treatments = true;
            }
          });
          return serviceProver;
        }),
      );

      const sortedSites = updatedSites.sort((a, b) => {
        if (selectedSort.value === "distance") {
          const distanceA = a.attributes.distance || 0;
          const distanceB = b.attributes.distance || 0;
          return distanceA - distanceB;
        } else if (selectedSort.value === "last_report_date") {
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
      });
      setSortedSites(x);
    };

    fetchDistancesAndSort();
  }, [searchPoint, selectedSort, selectedIllness]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  const onButtonClick = () => {
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
    setSelectedLocation(null);
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledLocationsContent className={isMobileListView ? "lView" : "mView"}>
      <StyledSearchContainer ref={searchContRef}>
        <h2 className="visually-hidden">
          {t("Locations.Search Container Screenreader Heading")}
        </h2>
        {selectedLocation !== null ? (
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

        <button id="listViewToggle" onClick={onButtonClick}>
          {isMobileListView ? <MapIcon></MapIcon> : <ListIcon></ListIcon>}
          <span>{isMobileListView ? "Map" : "List"}</span>
        </button>
      </StyledSearchContainer>
      <div id="locs">
        <h2 className="visually-hidden">
          {t("Locations.Results Screenreader Heading")}
        </h2>
        <StyledListContainer>
          <div id="list-title">
            <h3>
              <Trans
                i18nKey="Locations.List Heading"
                count={sortedSites.length}
              ></Trans>
            </h3>
            <PopoverMultiSelect type='filter' />
            <DropdownSingleSelect type={"sort"} />
          </div>
          {/* tabindex for scrollable list */}
          <ul tabIndex={0}>
            {sortedSites?.map((site: object) => {
              const serviceProver: Site = site as Site;
              const serviceProvider: ServiceProvider = serviceProver.attributes;
              if (selectedLocation !== null) {
                if (selectedLocation !== serviceProvider.facility_id) {
                  return <></>;
                }
              }
              return (
                <Card
                  serviceProvider={serviceProvider}
                  selected={false}
                  key={serviceProvider.OBJECTID}
                ></Card>
              );
            })}
          </ul>
        </StyledListContainer>
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
