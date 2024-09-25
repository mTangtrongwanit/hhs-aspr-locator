/**
 * Landing Page
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { Link } from "react-router-dom";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledLandingContent,
  StyledSearchContainer,
  StyledContextRow,
} from "./Landing.styles";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Landing.types";

// import where needed to bring in i18n translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const Landing = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledLandingContent>
      <StyledSearchContainer>
        <h2>{t("Landing.Search Container Heading")}</h2>
        <p>{t("Landing.Search Container Description")}</p>
        <div>
          <div className="dev-placeholder">Location Search Placeholder</div>
          <div className="dev-placeholder">Illness Select Placeholder</div>
        </div>
        <Link to="/locations">
          <button>{t("Landing.View Locations Button Label")}</button>
        </Link>
      </StyledSearchContainer>
      <div className="dev-placeholder" style={{ gridArea: "image" }}>
        Image placeholder, hide from SR
      </div>
      <StyledContextRow>
        <h2 className="visually-hidden">
          {t("Landing.Context Container Screenreader Heading")}
        </h2>
        <p>Locations participating in the U.S. Government&nbsp;
          <a>Patient Assistance Program</a> operated by Pfizer offering free Paxlovid for eligible patients are included on this website. Eligible patients with a Paxlovid prescription can enroll in the program at <a>https://paxlovid.iassist.com.</a> Other <a>assistance programs</a> are available for Paxlovid, Lagevrio, and Veklury.
        </p>
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
    <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={'AccordionTrigger'}
    >
      Frequently Asked Questions
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>      <Accordion.Content>TODO</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
    <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={'AccordionTrigger'}
    >
      Disclaimer
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
      <Accordion.Content>
      <div className="AccordionContentText">
      <p>
        Additional information on COVID-19 treatments can be found on the <a></a>ASPR COVID-19 Treatments page.  For questions regarding this site, contact 1-800-232-0233 (TTY  888-720-7489). To learn more about COVID-19 testing, including how to  order free test kits, visit COVID.gov.

        </p>
      * This content is not fully Section 508 conformant. If you need assistance, please contact gis@hhs.gov. Tabular access to the data is also available.     

      </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>

      </StyledContextRow>
    </StyledLandingContent>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Landing;
// #endregion ================ EXPORTED COMPONENT ==============================
