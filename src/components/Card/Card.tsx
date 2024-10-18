/**
 * Card
 *
 * Card component for displaying service provider information.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------
// #region ------------ 3rd-Party Components / Libraries -----------------------
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
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from "./Card.types";
import PinIcon from "@/assets/icons/pin.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import HomeDeliveryIcon from "@/assets/icons/home-delivery.svg";
import IcattIcon from "@/assets/icons/icatt.svg";
import NoGenericIcon from "@/assets/icons/no-generic.svg";
import UsgProcuredIcon from "@/assets/icons/usg-procured.svg";
import PapIcon from "@/assets/icons/pap.svg";
import OseltamivirIcon from "@/assets/icons/oseltamivir.svg";
import PrescribingServicesIcon from "@/assets/icons/prescribing-services.svg";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Card = ({ selected, selectedIllness, serviceProvider, distance, searchPoint, setSelectedTreatmentSite, locations, t  }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  // #endregion --------------- Hooks (Resources) ------------------------------
  // #region ----------------------- Hooks (State) -------------------------------------
  // #endregion -------------------- Hooks (State) -------------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------

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

    Object.keys(queryParams).forEach((key) => {
      url.searchParams.append(key, queryParams[key]);
    });

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
    serviceProvider && copyToClipboard({
      facility_id: serviceProvider?.facility_id,
      geopoint: serviceProvider?.geopoint,
    });
  };

  const onZoomToClick = () => {
    const graphic = locations?.find((loc) => 
      loc.attributes["facility_id"] === serviceProvider?.facility_id
    );
    graphic && setSelectedTreatmentSite(graphic);
  }

  /**
   * Checks if a value is "true" or true.
   * @param value Value to check for limited truthiness.
   * @returns Boolean true/false
   */
  const isTrue = (value?: string | boolean) =>
    !!(typeof value === "string" ? value.toLowerCase() === "true" : value);
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard $selected={selected}  key={serviceProvider?.OBJECTID}>
      <StyledTitleRow>
        <StyledCardTitle className="bold">
          {serviceProvider?.provider_name}
        </StyledCardTitle>
        {distance !== null && (
          <p className="smallText">
            {t("Card.distance")}
            {`: ${distance && distance
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
            {serviceProvider?.address1}
            {serviceProvider?.address2 ? (
              <>
                <br />
                {serviceProvider?.address2}
              </>
            ) : null}
            <br />
            {serviceProvider?.city}, {serviceProvider?.state}{" "}
            {serviceProvider?.zip}
          </p>
        </StyledIconField>
        <StyledIconField className="addr">
          {serviceProvider?.public_phone && <PhoneIcon></PhoneIcon>}
          {serviceProvider?.public_phone && (
            <a href={`tel:${serviceProvider?.public_phone}`}>
              {serviceProvider?.public_phone}
            </a>
          )}
        </StyledIconField>
      </address>

      <StyledRow>
        {isTrue(serviceProvider?.is_pap) && (
          <Tooltip icon={<PapIcon />}>
            <p>
              <a
                href="https://paxlovid.iassist.com/"
                target="_blank"
                style={{ color: "inherit" }}
              >
                {t("Card.hoverPapLink")}
              </a>
              {t("Card.hoverPapDescription")}
            </p>
          </Tooltip>
        )}
        {isTrue(serviceProvider?.has_USG_product) && (
          <Tooltip icon={<UsgProcuredIcon />}>
            <p>{t("Card.hoverUSGProduct")}</p>
          </Tooltip>
        )}
        {isTrue(serviceProvider?.home_delivery) && (
          <Tooltip icon={<HomeDeliveryIcon />}>
            <p>{t("Card.hoverHomeDelivery")}</p>
          </Tooltip>
        )}
        {isTrue(serviceProvider?.is_icatt_site) && (
          <Tooltip icon={<IcattIcon />}>
            <p>{t("Card.hoverICATT")}</p>
          </Tooltip>
        )}
        {isTrue(serviceProvider?.has_oseltamivir_tamiflu) &&
          !isTrue(serviceProvider?.has_oseltamivir_generic) && (
            <Tooltip icon={<NoGenericIcon />}>
              <p>{t("Card.hoverTamifluOnly")}</p>
            </Tooltip>
          )}
        {isTrue(serviceProvider?.has_oseltamivir_suspension) && (
          <Tooltip icon={<OseltamivirIcon />}>
            <p>{t("Card.hoverOseltamivirSuspension")}</p>
          </Tooltip>
        )}
        {isTrue(serviceProvider?.is_prescribing_svcs_available) && (
          <Tooltip icon={<PrescribingServicesIcon />}>
            <p>{t("Card.hoverPrescribingServices")}</p>
          </Tooltip>
        )}
      </StyledRow>
      <StyledRow>
        {selectedIllness?.toLowerCase() == "covid" &&
          t(
            `Card.products.covid_${[
              isTrue(serviceProvider?.has_paxlovid) ? "p" : "-",
              isTrue(serviceProvider?.has_lagevrio) ? "l" : "-",
              isTrue(serviceProvider?.has_veklury) ? "v" : "-",
            ].join("")}`
          )}
        {selectedIllness?.toLowerCase() == "flu" &&
          t(
            `Card.products.flu_${[
              isTrue(serviceProvider?.has_oseltamivir_generic) ||
              isTrue(serviceProvider?.has_oseltamivir_tamiflu) ||
              isTrue(serviceProvider?.has_oseltamivir_suspension)
                ? "o"
                : "-",
              isTrue(serviceProvider?.has_baloxavir) ? "b" : "-",
              isTrue(serviceProvider?.has_peramivir) ? "p" : "-",
              isTrue(serviceProvider?.has_zanamivir) ? "z" : "-",
            ].join("")}`
          )}
      </StyledRow>
      {isTrue(serviceProvider?.is_prescribing_svcs_available) && (
        <p>
          {t("Card.additionalInformation")}&nbsp;
          <a
            href={
              serviceProvider?.url_appointment
                ? serviceProvider?.url_appointment
                : ""
            }
            target="_blank"
          >
            {t("Card.rXorTelehealth")}
          </a>
        </p>
      )}
      {serviceProvider?.grantee_code === "HR2" && (
        <p className="ital">{t("Card.hrsa")}</p>
      )}
      {serviceProvider?.grantee_code === "DD2" && (
        <p className="ital" style={{ whiteSpace: "pre-line" }}>
          {t("Card.dod")}
        </p>
      )}
      {serviceProvider?.grantee_code === "IH2" && (
        <p className="ital" style={{ whiteSpace: "pre-line" }}>
          {t("Card.ihs")}
        </p>
      )}
      <StyledRow>
        <button className="hhs-primary-button zoom-to-button" onClick={() => onZoomToClick()}>Zoom To Location</button>
        <a onClick={handleCopyToClipboard} className="hhs-outline-button">
          {t("Card.shareLocation")}
        </a>
        {serviceProvider?.address1 && (
          <a
            className="hhs-outline-button"
            href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
              searchPoint
                ? `${searchPoint.point.latitude},${searchPoint.point.longitude}`
                : ""
            )}&destination=${encodeURIComponent(
              `${serviceProvider?.address1} ${
                serviceProvider?.address2 ? serviceProvider?.address2 + " " : ""
              }${serviceProvider?.city} ${serviceProvider?.state} ${
                serviceProvider?.zip
              }`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("Card.directionsToLocation")}
          >
            <span style={{ fontWeight: "600" }}>{t("Card.openInMaps")}</span>
          </a>
        )}
      </StyledRow>
    </StyledCard>
  );
};
// #endregion -------------------- Render ------------------------------------
export default Card;
// #endregion ================ EXPORTED COMPONENT ==============================
