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
} from "./Locations.styles";
import Card from "@/components/Card";
import { ServiceProvider } from "@/components/Card";
import LocationsMap from "@/components/LocationsMap";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Landing.types";
import { useTranslation, Trans } from "react-i18next";
import useResizeObserver from "@react-hook/resize-observer";
import { useAppContext } from "@/contexts/AppContext";
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
  has_usg_product?: string;
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
}

interface Site {
  attributes: SiteAttributes;
}
// #endregion ========================== TYPES ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Locations = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const { bannerHeight, headerHeight, locations } = useAppContext();

  const searchContRef = useRef<HTMLDivElement>(null);

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [searchContHeight, setSearchContHeight] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
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
    //console.log("banner " + bannerHeight + " header " + headerHeight + " search " + searchContHeight);
    setTotalHeight(bannerHeight + headerHeight + searchContHeight);
  }, [bannerHeight, headerHeight, searchContHeight]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledLocationsContent>
      <StyledSearchContainer ref={searchContRef}>
        <h2 className='visually-hidden'>
          {t("Locations.Search Container Screenreader Heading")}
        </h2>
        <div className='dev-placeholder'>Location Search Placeholder</div>
        <div className='dev-placeholder'>Illness Select Placeholder</div>
        <div className='dev-placeholder'>Medication Select Placeholder</div>
      </StyledSearchContainer>
      <div id='locs'>
        <h2 className='visually-hidden'>
          {t("Locations.Results Screenreader Heading")}
        </h2>
        <StyledListContainer>
          <div id='list-title'>
            <h3>
              <Trans i18nKey='Locations.List Heading' count={0}></Trans>
            </h3>
            <div className='dev-placeholder'>Filter Placeholder</div>
            <div className='dev-placeholder'>Sort Placeholder</div>
          </div>
          {/* tabindex for scrollable list */}
          <ul tabIndex={0}>
            {locations?.map((site: object) => {
              const serviceProver: Site = site as Site;
              const serviceProvider: ServiceProvider = serviceProver.attributes;
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
          <h3 className='visually-hidden'>
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
