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
// #endregion ----------- Custom Components / Utilities ------------------------

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
        {/* <p>&str Locations participating in the U.S. Government&nbsp;
        <a href="/todo">Patient Assistance Program</a>       ...
      </p> */}
        <div className="dev-placeholder">Accordion placeholder</div>
      </StyledContextRow>
    </StyledLandingContent>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Landing;
// #endregion ================ EXPORTED COMPONENT ==============================
