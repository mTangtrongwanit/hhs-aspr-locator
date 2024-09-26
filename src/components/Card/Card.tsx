/**
 * Card
 *
 * Card component for displaying service provider information.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useEffect, useState, useRef } from "react";
// #endregion ------------------------ React -----------------------------------
// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledCard,
  StyledCardTitle,
  StyledIconField,
  StyledOutlinedLink,
  StyledRow,
  StyledTitleRow,
} from "./Card.styles";
import Tooltip from "./Tooltip";
import { calculateDistanceBetweenTwoPoints } from "../../utils/goegraphicUtils";
import { useAppContext } from "@/contexts/AppContext";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from "./Card.types";
import PinIcon from "@/assets/icons/pin.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import HomeDeliveryIcon from "@/assets/icons/home-delivery.svg";
import IcattIcon from "@/assets/icons/icatt.svg";
import NoGenericIcon from "@/assets/icons/no-generic.svg";
// import PatientAssistIcon from "@/assets/icons/patient-assist.svg";
// import PediatricIcon from "@/assets/icons/pediatric.svg";
import UsgProcuredIcon from "@/assets/icons/usg-procured.svg";
// import PapIcon from "@/assets/icons/pap.svg";
// import OseltamivirIcon from "@/assets/icons/oseltamivir.svg";
// import PrescribingServicesIcon from "@/assets/icons/prescribing-services.svg";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Card = ({ selected, serviceProvider }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const location = useLocation();
  const cardRef = useRef<HTMLDivElement>(null);
  const { searchPoint } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------
  // #region ----------------------- Hooks (State) -------------------------------------
  const [distance, setDistance] = useState<number | null>(null);
  // #endregion -------------------- Hooks (State) -------------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------

  // Get the distance between the user's search location and the service provider
  useEffect(() => {
    const fetchDistance = async () => {
      const dist = await calculateDistanceBetweenTwoPoints(
        serviceProvider,
        searchPoint
      );
      setDistance(dist);
    };

    fetchDistance();
  }, []);

  // Highlight the location if the facility ID in the URL matches the facility ID of the service provider
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const facilityId = urlParams.get("facility_id");
    // TODO: Chandan/Lillie - remove inline CSS and use styled-components
    if (facilityId === serviceProvider.facility_id && cardRef.current) {
      // Highlight the location by applying inline CSS
      cardRef.current.scrollIntoView({ behavior: "smooth" });
      cardRef.current.style.setProperty("border", "2px solid red");
    }
  }, [location.search, serviceProvider.facility_id]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  /**
   * Copies the URL of the current location with a specific facility ID to the clipboard.
   * The URL is constructed using the current window's origin and the facility ID of the service provider.
   * @param {void}
   * @returns {void}
   */
  const copyToClipboard = () => {
    const url = `${window.location.origin}/locations/?facility_id=${serviceProvider.facility_id}`;
    navigator.clipboard.writeText(url);
  };
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard $selected={selected} ref={cardRef}>
      <StyledTitleRow>
        <StyledCardTitle className='bold'>
          {serviceProvider.provider_name}
        </StyledCardTitle>
        {distance !== null && (
          <p className='smallText'>
            {t("Card.distance")}
            {`: ${distance
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            {` ${t("Card.miles")}`}
          </p>
        )}
      </StyledTitleRow>
      <address>
        <StyledIconField className='addr'>
          <PinIcon></PinIcon>{" "}
          <p className='smallText'>
            {serviceProvider.address1}
            {serviceProvider.address2 ? (
              <>
                <br />
                {serviceProvider.address2}
              </>
            ) : null}
          </p>
        </StyledIconField>
        <StyledIconField className='addr'>
          <PhoneIcon></PhoneIcon>
          <a
            href={`tel:${
              serviceProvider.public_phone ? serviceProvider.public_phone : null
            }`}
          >
            {serviceProvider.public_phone ? serviceProvider.public_phone : null}
          </a>
        </StyledIconField>
      </address>

      {/* TODO: Alt text for these icons */}

      <StyledRow>
        {/* {serviceProvider.is_pap === "TRUE" && (
          <Tooltip icon={<PapIcon />}>
            <p>{t("Card.pap")}</p>
          </Tooltip>
        )} */}
        {serviceProvider.has_usg_product === "TRUE" && (
          <Tooltip icon={<UsgProcuredIcon />}>
            <p>{t("Card.usgProduct")}</p>
          </Tooltip>
        )}
        {serviceProvider.home_delivery === "TRUE" && (
          <Tooltip icon={<HomeDeliveryIcon />}>
            <p>{t("Card.homeDelivery")}</p>
          </Tooltip>
        )}
        {serviceProvider.is_icatt_site === "TRUE" && (
          <Tooltip icon={<IcattIcon />}>
            <p>{t("Card.icatt")}</p>
          </Tooltip>
        )}
        {serviceProvider.has_oseltamivir_tamiflu === "TRUE" &&
          serviceProvider.has_oseltamivir_generic === "FALSE" &&
          serviceProvider.has_oseltamivir_suspension === "FALSE" && (
            <Tooltip icon={<NoGenericIcon />}>
              <p>{t("Card.tamifluOnly")}</p>
            </Tooltip>
          )}
        {/* {serviceProvider.has_oseltamivir_suspension === "TRUE" && (
          <Tooltip icon={<OseltamivirIcon />}>
            <p>{t("Card.oseltamivirSuspension")}</p>
          </Tooltip>
        )} */}
        {/* {serviceProvider.is_prescribing_svcs_available === "TRUE" && (
          <Tooltip icon={<PrescribingServicesIcon />}>
            <p>{t("Card.prescribingServices")}</p>
          </Tooltip>
        )} */}
      </StyledRow>
      {serviceProvider.is_prescribing_svcs_available === "TRUE" && (
        <p>
          {t("Card.rXorTelehealth")}&nbsp;
          <a
            href={
              serviceProvider.url_appointment
                ? serviceProvider.url_appointment
                : ""
            }
          >
            <strong>{t("Card.additionalInformation")}</strong>
          </a>
        </p>
      )}
      <StyledRow>
        <button onClick={copyToClipboard}>{t("Card.shareLocation")}</button>
        {serviceProvider.address1 && (
          <StyledOutlinedLink
            href={`https://www.google.com/maps/dir//${encodeURIComponent(
              serviceProvider.address1
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t("Card.directionsToLocation")}
          >
            <span>{t("Card.openInMaps")}</span>
          </StyledOutlinedLink>
        )}
      </StyledRow>
    </StyledCard>
  );
};
// #endregion -------------------- Render ------------------------------------
export default Card;
// #endregion ================ EXPORTED COMPONENT ==============================
