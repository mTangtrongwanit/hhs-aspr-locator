/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledLandingContent, StyledSearchContainer, StyledContextRow } from "./Landing.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Landing.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const Landing = () => {
  // #region ------------------ Hooks (Resources) ------------------------------

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
  return (<StyledLandingContent>
    <StyledSearchContainer>
      <h2>&str Find COVID-19 and Flu Medications</h2>
      <p>&str This locator displays...</p>
      <div>
        <div className="dev-placeholder">Location Search Placeholder</div>
        <div className="dev-placeholder">Illness Select Placeholder</div>
      </div>
      <button>&str TODO: Link</button>
    </StyledSearchContainer>
    <div className="dev-placeholder" style={{ gridArea: 'image' }}>Image placeholder, hide from SR</div>
    <StyledContextRow>
      <h2 className="visually-hidden">&str Contextual Information</h2>
      <p>&str Locations participating in the U.S. Government&nbsp;
        <a href="/todo">Patient Assistance Program</a>       ...
      </p>
      <div className="dev-placeholder">Accordion placeholder</div>
      </StyledContextRow>
  </StyledLandingContent>);
  // #endregion -------------------- Render ------------------------------------
};
export default Landing;
// #endregion ================ EXPORTED COMPONENT ==============================
