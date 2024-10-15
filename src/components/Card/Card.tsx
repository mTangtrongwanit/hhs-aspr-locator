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
  // StyledOutlinedLink,
  StyledRow,
  StyledTitleRow,
} from "./Card.styles";
import Tooltip from "./Tooltip";
import { calculateDistanceBetweenTwoPoints } from "../../utils/geographicUtils";
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
import PapIcon from "@/assets/icons/pap.svg";
import OseltamivirIcon from "@/assets/icons/oseltamivir.svg";
import PrescribingServicesIcon from "@/assets/icons/prescribing-services.svg";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Card = ({ selected, serviceProvider }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const location = useLocation();
  const cardRef = useRef<HTMLLIElement>(null);
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
        searchPoint,
      );
      setDistance(dist);
    };

    fetchDistance();
  }, [searchPoint, serviceProvider]);

  // Highlight the location if it was selected on the map
  useEffect(() => {
    if (selected === true && cardRef.current) {
      // Highlight the location by applying inline CSS
      cardRef.current.scrollIntoView();
    }
  }, [selected]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  /**
   * Copies a URL with specified path and query parameters to the clipboard.
   * The URL is constructed using the current window's origin, the provided path, and query parameters.
   * @param {string} path - The path to append to the origin.
   * @param {Record<string, string>} queryParams - An object representing the query parameters.
   * @returns {void}
   */
  const copyToClipboard = (queryParams: Record<string, string>) => {
    const url = new URL(`${window.location.origin}${window.location.pathname}`);
    let hash = window.location.hash;
    // Append query parameters manually to the hash, otherwise they'll prepend it, breaking the url
    const queryString = new URLSearchParams(queryParams).toString();
    if (hash.includes('?')) {
      // if not the first query parameter, add an ampersand
      hash += `&${queryString}`;
    } else {
      // if the first query parameter, add a question mark
      hash += `?${queryString}`;
    }
    // Set the modified hash back to the URL
    url.hash = hash;
    navigator.clipboard.writeText(url.href);
  };

  /**
   * Handles the click event for the "Share Location" button.
   * Copies the URL with the path "/locations/" and the facility ID of the service provider to the clipboard.
   * @param {React.MouseEvent<HTMLButtonElement>} event - The click event.
   * @returns {void}
   */
  const handleCopyToClipboard = () => {
    //TODO: add one more param here for the searched name s.t. it can show in the Search bar.
    copyToClipboard({
      facility_id: serviceProvider.facility_id,
      geopoint: serviceProvider.geopoint,
    });
  };
  // #endregion ------------- Supporting Functions -----------------------------


  
  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard tabIndex={0} $selected={selected} ref={cardRef}>
      <StyledTitleRow>
        <StyledCardTitle className="bold">
          {serviceProvider.provider_name}
        </StyledCardTitle>
        {distance !== null && (
          <p className="smallText">
            {t("Card.distance")}
            {`: ${distance
              .toFixed(1)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            {` ${t("Card.miles")}`}
          </p>
        )}
      </StyledTitleRow>
      <address>
        <StyledIconField className="addr">
          <PinIcon></PinIcon>{" "}
          <p className="smallText">
            {serviceProvider.address1}
            {serviceProvider.address2 ? (
              <>
                <br />
                {serviceProvider.address2}
              </>
            ) : null}
            <br />
            {serviceProvider.city}, {serviceProvider.state}{" "}
            {serviceProvider.zip}
          </p>
        </StyledIconField>
        <StyledIconField className="addr">
          {serviceProvider.public_phone && <PhoneIcon></PhoneIcon>}
          {serviceProvider.public_phone && (
            <a href={`tel:${serviceProvider.public_phone}`}>
              {serviceProvider.public_phone}
            </a>
          )}
        </StyledIconField>
      </address>

      <StyledRow>
        {serviceProvider.is_pap?.toUpperCase() === "TRUE" && (
          <Tooltip icon={<PapIcon />}>
            <p>{t("Card.pap")}</p>
          </Tooltip>
        )}
        {serviceProvider.has_USG_product?.toUpperCase() === "TRUE" && (
          <Tooltip icon={<UsgProcuredIcon />}>
            <p>{t("Card.usgProduct")}</p>
          </Tooltip>
        )}
        {serviceProvider.home_delivery?.toUpperCase() === "TRUE" && (
          <Tooltip icon={<HomeDeliveryIcon />}>
            <p>{t("Card.homeDelivery")}</p>
          </Tooltip>
        )}
        {serviceProvider.is_icatt_site?.toUpperCase() === "TRUE" && (
          <Tooltip icon={<IcattIcon />}>
            <p>{t("Card.icatt")}</p>
          </Tooltip>
        )}
        {serviceProvider.has_oseltamivir_tamiflu?.toUpperCase() === "TRUE" &&
          serviceProvider.has_oseltamivir_generic?.toUpperCase() ===
            "FALSE" && (
            <Tooltip icon={<NoGenericIcon />}>
              <p>{t("Card.tamifluOnly")}</p>
            </Tooltip>
          )}
        {serviceProvider.has_oseltamivir_suspension?.toUpperCase() ===
          "TRUE" && (
          <Tooltip icon={<OseltamivirIcon />}>
            <p>{t("Card.oseltamivirSuspension")}</p>
          </Tooltip>
        )}
        {serviceProvider.is_prescribing_svcs_available?.toUpperCase() ===
          "TRUE" && (
          <Tooltip icon={<PrescribingServicesIcon />}>
            <p>{t("Card.prescribingServices")}</p>
          </Tooltip>
        )}
      </StyledRow>
      {serviceProvider.is_prescribing_svcs_available?.toUpperCase() ===
        "TRUE" && (
        <p>
          {t("Card.rXorTelehealth")}&nbsp;
          <a
            href={
              serviceProvider.url_appointment
                ? serviceProvider.url_appointment
                : ""
            }
            target="_blank"
          >
            {t("Card.additionalInformation")}
          </a>
        </p>
      )}
      {serviceProvider.grantee_code === "HR2" && (
        <p className="ital">{t("Card.hrsa")}</p>
      )}
      {serviceProvider.grantee_code === "DD2" && (
        <p className="ital">{t("Card.dod")}</p>
      )}
      {serviceProvider.grantee_code === "IH2" && (
        <p className="ital">{t("Card.ihs")}</p>
      )}
      <StyledRow>
        <a onClick={handleCopyToClipboard} className="hhs-outline-button">
          {t("Card.shareLocation")}
        </a>
        {serviceProvider.address1 && (
          <a className="hhs-outline-button"
            href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
              searchPoint
                ? `${searchPoint.point.latitude},${searchPoint.point.longitude}`
                : "",
            )}&destination=${encodeURIComponent(
              `${serviceProvider.address1} ${
                serviceProvider.address2 ? serviceProvider.address2 + " " : ""
              }${serviceProvider.city} ${serviceProvider.state} ${
                serviceProvider.zip
              }`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("Card.directionsToLocation")}
          >
            <span style={{fontWeight: "600"}}>{t("Card.openInMaps")}</span>
          </a>
        )}
      </StyledRow>
    </StyledCard>
  );
};
// #endregion -------------------- Render ------------------------------------
export default Card;
// #endregion ================ EXPORTED COMPONENT ==============================
