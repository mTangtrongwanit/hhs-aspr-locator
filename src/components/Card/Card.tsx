/**
 * Card
 *
 * Card component for displaying service provider information.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
// import { useTranslation } from "react-i18next";
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

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Card = ({ selected, serviceProvider }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  /** Internationalization translation function */
  // const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledCard $selected={selected}>
      <StyledTitleRow>
        <StyledCardTitle className='bold'>
          {serviceProvider.name}
        </StyledCardTitle>
        {serviceProvider.distance && (
          <p className='smallText'>{`Distance: ${serviceProvider.distance} miles`}</p>
        )}
      </StyledTitleRow>
      <address>
        <StyledIconField className='addr'>
          <PinIcon></PinIcon>{" "}
          <p className='smallText'>{serviceProvider.address}</p>
        </StyledIconField>
        <StyledIconField className='addr'>
          <PhoneIcon></PhoneIcon>
          <a href={`tel:${serviceProvider.phone}`}>{serviceProvider.phone}</a>
        </StyledIconField>
      </address>

      {/* TODO: Tooltips for these icons */}
      {/* TODO: Alt text for these icons */}

      <StyledRow>
        {serviceProvider.homeDelivery && (
          <Tooltip icon={<HomeDeliveryIcon />}>
            <p>Home Delivery</p>
          </Tooltip>
        )}
        {serviceProvider.usgProcured && (
          <Tooltip icon={<UsgProcuredIcon />}>
            <p>USG-procured product</p>
          </Tooltip>
        )}
        {serviceProvider.icatt && (
          <Tooltip icon={<IcattIcon />}>
            <p>ICATT</p>
          </Tooltip>
        )}
        {serviceProvider.patientAssistance && (
          <Tooltip icon={<PatientAssistIcon />}>
            <p>Patient Assistance</p>
          </Tooltip>
        )}
        {serviceProvider.tamifluOnly && (
          <Tooltip icon={<NoGenericIcon />}>
            <p>"Tamiflu" brand name only (no generic oseltamivir available)</p>
          </Tooltip>
        )}
        {serviceProvider.pediatric && (
          <Tooltip icon={<PediatricIcon />}>
            <p>Pediatric oseltamivir suspension</p>
          </Tooltip>
        )}
      </StyledRow>
      <p>
        Rx or telehealth&nbsp;
        <a href='TODO'>additional information</a>
      </p>
      {serviceProvider.isHRSA && (
        <p className='ital'>
          Health Resources and Services Administration (HRSA) supported Health
          Center
        </p>
      )}
      <StyledRow>
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
      </StyledRow>
    </StyledCard>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Card;
// #endregion ================ EXPORTED COMPONENT ==============================
