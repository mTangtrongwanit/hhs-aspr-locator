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
const Card = ({ selected, selectedIllness, serviceProvider }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const cardRef = useRef<HTMLLIElement>(null);
  const { searchPoint, setSelectedTreatmentSite, locations } = useAppContext();
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
  }, [searchPoint, serviceProvider]);

  // Highlight the location if it was selected on the map
  useEffect(() => {
    if (selected === true && cardRef.current) {
      // Highlight the location by applying inline CSS
      cardRef.current.scrollIntoView({behavior: "smooth"});
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
    copyToClipboard({
      facility_id: serviceProvider.facility_id,
      geopoint: serviceProvider.geopoint,
    });
  };

  const onZoomToClick = () => {
    const graphic = locations?.find((loc) => 
      loc.attributes["facility_id"] === serviceProvider.facility_id
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



  {/*  this tooltip icons lookup object includes a check for selected illness, the icon to show, description to show on hover and an extra element if needed
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
        */}
  const toolTipIcons = [
    {
      condition: selectedIllness.toLowerCase() === "covid" && (isTrue(serviceProvider.is_pap) || isTrue(serviceProvider.has_USG_product)),
      icon: <PapIcon />,
      extraElement: (
        <a href="https://paxlovid.iassist.com/" target="_blank" style={{ color: "inherit" }}>
          {t("Card.hoverPapLink")}
        </a>
      ),
      description: t("Card.hoverPapDescription"),
    },
    {
      condition: selectedIllness.toLowerCase() === "covid" && isTrue(serviceProvider.has_USG_product),
      icon: <UsgProcuredIcon />,
      description: t("Card.hoverUSGProduct"),
    },
    {
      condition: (selectedIllness.toLowerCase() === "covid" || selectedIllness.toLowerCase() === "flu") && isTrue(serviceProvider.home_delivery),
      icon: <HomeDeliveryIcon />,
      description: t("Card.hoverHomeDelivery"),
    },
    {
      condition: selectedIllness.toLowerCase() === "covid" && isTrue(serviceProvider.is_icatt_site),
      icon: <IcattIcon />,
      description: t("Card.hoverICATT"),
    },
    {
      condition: selectedIllness.toLowerCase() === "flu" && isTrue(serviceProvider.has_oseltamivir_tamiflu) && !isTrue(serviceProvider.has_oseltamivir_generic),
      icon: <NoGenericIcon />,
      description: t("Card.hoverTamifluOnly"),
    },
    {
      condition: selectedIllness.toLowerCase() === "flu" && isTrue(serviceProvider.has_oseltamivir_suspension),
      icon: <OseltamivirIcon />,
      description: t("Card.hoverOseltamivirSuspension"),
    },
    {
      condition: (selectedIllness.toLowerCase() === "covid" || selectedIllness.toLowerCase() === "flu") && isTrue(serviceProvider.is_prescribing_svcs_available),
      icon: <PrescribingServicesIcon />,
      description: t("Card.hoverPrescribingServices"),
    },
  ];

 
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard $selected={selected} ref={cardRef} key={serviceProvider.OBJECTID}>
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
       
     
        {/* iterate over toolTipIcons and return a tooltip for each */}
        {toolTipIcons.map((icon, index) => {
          return icon.condition && (
            <Tooltip icon={icon.icon} key={index}>
              <p>
                {icon.extraElement}
                {icon.description}
              </p>
            </Tooltip>
          )
        })}

      </StyledRow>
      <StyledRow>
        {selectedIllness.toLowerCase() == "covid" &&
          t(
            `Card.products.covid_${[
              isTrue(serviceProvider.has_paxlovid) ? "p" : "-",
              isTrue(serviceProvider.has_lagevrio) ? "l" : "-",
              isTrue(serviceProvider.has_veklury) ? "v" : "-",
            ].join("")}`
          )}
        {selectedIllness.toLowerCase() == "flu" &&
          t(
            `Card.products.flu_${[
              isTrue(serviceProvider.has_oseltamivir_generic) ||
              isTrue(serviceProvider.has_oseltamivir_tamiflu) ||
              isTrue(serviceProvider.has_oseltamivir_suspension)
                ? "o"
                : "-",
              isTrue(serviceProvider.has_baloxavir) ? "b" : "-",
              isTrue(serviceProvider.has_peramivir) ? "p" : "-",
              isTrue(serviceProvider.has_zanamivir) ? "z" : "-",
            ].join("")}`
          )}
      </StyledRow>
      {isTrue(serviceProvider.is_prescribing_svcs_available) && (
        <p>
          {t("Card.additionalInformation")}&nbsp;
          <a
            href={
              serviceProvider.url_appointment
                ? serviceProvider.url_appointment
                : ""
            }
            target="_blank"
          >
            {t("Card.rXorTelehealth")}
          </a>
        </p>
      )}
      {serviceProvider.grantee_code === "HR2" && (
        <p className="ital">{t("Card.hrsa")}</p>
      )}
      {serviceProvider.grantee_code === "DD2" && (
        <p className="ital" style={{ whiteSpace: "pre-line" }}>
          {t("Card.dod")}
        </p>
      )}
      {serviceProvider.grantee_code === "IH2" && (
        <p className="ital" style={{ whiteSpace: "pre-line" }}>
          {t("Card.ihs")}
        </p>
      )}
      <StyledRow>
        <button className="hhs-primary-button zoom-to-button" aria-label="Zoom To Location" title="Zoom To Location" onClick={() => onZoomToClick()}>Zoom To Location</button>
        <button onClick={handleCopyToClipboard} className="hhs-outline-button" aria-label="Copy location address to clipboard" title="Copy location address to clipboard">
          {t("Card.shareLocation")}
        </button>
        {serviceProvider.address1 && (
          <a
            className="hhs-outline-button"
            href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
              searchPoint
                ? `${searchPoint.point.latitude},${searchPoint.point.longitude}`
                : ""
            )}&destination=${encodeURIComponent(
              `${serviceProvider.address1} ${
                serviceProvider.address2 ? serviceProvider.address2 + " " : ""
              }${serviceProvider.city} ${serviceProvider.state} ${
                serviceProvider.zip
              }`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps" title="Open location in Google Maps"
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
