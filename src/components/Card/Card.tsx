/**
 * Card
 *
 * Card component for displaying service provider information.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation } from "react-i18next";
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
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from "./Card.types";
import PinIcon from "@/assets/icons/pin.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import HomeDeliveryIcon from "@/assets/icons/home-delivery.svg";
import IcattIcon from "@/assets/icons/icatt.svg";
import NoGenericIcon from "@/assets/icons/no-generic.svg";
import PatientAssistIcon from "@/assets/icons/patient-assist.svg";
import PediatricIcon from "@/assets/icons/pediatric.svg";
import UsgProcuredIcon from "@/assets/icons/usg-procured.svg";
// import PapIcon from "@/assets/icons/pap.svg";
// import OseltamivirIcon from "@/assets/icons/oseltamivir.svg";
// import PrescribingServicesIcon from "@/assets/icons/prescribing-services.svg";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Card = ({ selected, serviceProvider }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  /** Internationalization translation function */
  const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard $selected={selected}>
      <StyledTitleRow>
        <StyledCardTitle className='bold'>
          {serviceProvider.provider_name}
        </StyledCardTitle>
        {/* {serviceProvider.distance && (
          <p className='smallText'>{`Distance: ${serviceProvider.distance} miles`}</p>
        )} */}
      </StyledTitleRow>
      <address>
        <StyledIconField className='addr'>
          <PinIcon></PinIcon>{" "}
          <p className='smallText'>
            {serviceProvider.address1} |{" "}
            {serviceProvider.address2 ? serviceProvider.address2 : null}
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

      {/* TODO: Tooltips for these icons */}
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
      <p>
        Rx or telehealth&nbsp;
        <a href='TODO'>additional information</a>
      </p>
      {/* {serviceProvider.isHRSA && (
        <p className='ital'>
          Health Resources and Services Administration (HRSA) supported Health
          Center
        </p>
      )} */}
      {/* <StyledRow>
        <button>Share Location</button>
        {serviceProvider.address && (
          <StyledOutlinedLink
            href={`https://www.google.com/maps/dir//${encodeURIComponent(
              serviceProvider.address
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Directions to Location`}
          >
            <span>Open in Maps</span>
          </StyledOutlinedLink>
        )}
      </StyledRow> */}
    </StyledCard>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Card;
// #endregion ================ EXPORTED COMPONENT ==============================
