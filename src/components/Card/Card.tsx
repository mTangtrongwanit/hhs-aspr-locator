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
import { isTrue } from "@/utils";
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
const Card = ({
  asDiv,
  selected,
  selectedIllness,
  serviceProvider,
  distance,
  searchPoint,
  t,
  onZoomToClick,
}: Props) => {
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
  // // Highlight the location if it was selected on the map
  // useEffect(() => {
  //   if (selected === true && cardRef.current) {
  //     // Highlight the location by applying inline CSS
  //     cardRef.current.scrollIntoView({behavior: "smooth"});
  //   }
  // }, [selected]);

  /**
   * Handles the click event for the "Share Location" button.
   * Copies the URL with the path "/locations/" and the facility ID of the service provider to the clipboard.
   * @param {React.MouseEvent<HTMLButtonElement>} event - The click event.
   * @returns {void}
   */
  const handleCopyToClipboard = () => {
    //TODO: add one more param here for the searched name s.t. it can show in the Search bar.
    serviceProvider &&
      copyToClipboard({
        facility_id: serviceProvider?.facility_id,
        geopoint: serviceProvider?.geopoint,
      });
  };

  {
    /*  this tooltip icons lookup object includes a check for selected illness, the icon to show, description to show on hover and an extra element if needed
        Covid:
          Pap
          USG Product
          Home Delivery
          ICATT
          Prescribing Services
          Flu:
          Oseltamivir Suspension
          Tamiflu Only
          Prescribing Services
          Home Delivery
        */
  }
  const toolTipIcons = [
    {
      name: "Patient Assistance Program",
      condition:
        selectedIllness?.toLowerCase() === "covid" &&
        (isTrue(serviceProvider?.is_pap) ||
          isTrue(serviceProvider?.has_USG_product)),
      icon: <PapIcon />,
      description: t("Card.hoverPapDescription"),
    },
    {
      name: "USG Product",
      condition:
        selectedIllness?.toLowerCase() === "covid" &&
        isTrue(serviceProvider?.has_USG_product),
      icon: <UsgProcuredIcon />,
      description: t("Card.hoverUSGProduct"),
    },
    {
      name: "Home Delivery",
      condition:
        (selectedIllness?.toLowerCase() === "covid" ||
          selectedIllness?.toLowerCase() === "flu") &&
        isTrue(serviceProvider?.home_delivery),
      icon: <HomeDeliveryIcon />,
      description: t("Card.hoverHomeDelivery"),
    },
    {
      name: "ICATT",
      condition:
        selectedIllness?.toLowerCase() === "covid" &&
        isTrue(serviceProvider?.is_icatt_site),
      icon: <IcattIcon />,
      description: t("Card.hoverICATT"),
    },
    {
      name: "Oseltamivir Tamiflu Only",
      condition:
        selectedIllness?.toLowerCase() === "flu" &&
        isTrue(serviceProvider?.has_oseltamivir_tamiflu) &&
        !isTrue(serviceProvider?.has_oseltamivir_generic),
      icon: <NoGenericIcon />,
      description: t("Card.hoverTamifluOnly"),
    },
    {
      name: "Oseltamivir Suspension",
      condition:
        selectedIllness?.toLowerCase() === "flu" &&
        isTrue(serviceProvider?.has_oseltamivir_suspension),
      icon: <OseltamivirIcon />,
      description: t("Card.hoverOseltamivirSuspension"),
    },
    {
      name: "Prescribing Services",
      condition:
        (selectedIllness?.toLowerCase() === "covid" ||
          selectedIllness?.toLowerCase() === "flu") &&
        isTrue(serviceProvider?.is_prescribing_svcs_available),
      icon: <PrescribingServicesIcon />,
      description: t("Card.hoverPrescribingServices"),
    },
  ];

  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard
      id={`${serviceProvider?.OBJECTID}` || "card"}
      as={asDiv === true ? "div" : "li"}
      $selected={selected}
      key={serviceProvider?.OBJECTID}
    >
      <StyledTitleRow>
        <StyledCardTitle className="bold">
          {serviceProvider?.provider_name}
        </StyledCardTitle>
        {distance !== null && (
          <p className="smallText">
            {t("Card.distance")}
            {`: ${
              distance &&
              distance
                .toFixed(1)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }`}
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
        {/* iterate over toolTipIcons and return a tooltip for each */}
        {toolTipIcons.map((icon, index) => {
          return (
            icon.condition && (
              <Tooltip name={icon.name} icon={icon.icon} key={index}>
                <p>
                  {icon.description}
                </p>
              </Tooltip>
            )
          );
        })}
      </StyledRow>
      <StyledRow>
        {selectedIllness?.toLowerCase() == "covid" &&
          t(
            `Card.products.covid_${[
              isTrue(serviceProvider?.has_paxlovid) ? "p" : "-",
              isTrue(serviceProvider?.has_lagevrio) ? "l" : "-",
              isTrue(serviceProvider?.has_veklury) ? "v" : "-",
            ].join("")}`,
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
            ].join("")}`,
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
        <button
          className="hhs-primary-button zoom-to-button"
          aria-label="Zoom to this site on the map"
          title="Zoom to this site on the map"
          onClick={
            onZoomToClick
              ? () => serviceProvider && onZoomToClick(serviceProvider)
              : undefined
          }
        >
          {t("Card.Zoom")}
        </button>
        <button 
          onClick={handleCopyToClipboard}
          className="hhs-outline-button"
          aria-label="Copy link to this site"
          title="Copy link to this site"
        >
          {t("Card.shareLocation")}
        </button>
        {serviceProvider?.address1 && (
          <a
            className="hhs-outline-button"
            href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
              searchPoint
                ? `${searchPoint.point.latitude},${searchPoint.point.longitude}`
                : "",
            )}&destination=${encodeURIComponent(
              `${serviceProvider?.address1} ${
                serviceProvider?.address2 ? serviceProvider?.address2 + " " : ""
              }${serviceProvider?.city} ${serviceProvider?.state} ${
                serviceProvider?.zip
              }`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
            title="Open location in Google Maps"
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
