/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import { GovBanner } from "@trussworks/react-uswds";

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Header.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const HeaderComponent = () => {
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
  return (
    <>
      <aside>
        {/* TODO: connect when i18n is in */}
        {/* <GovBanner
          language={i18n.resolvedLanguage === 'es' ? 'spanish' : undefined}
        /> */}
        <GovBanner></GovBanner>
      </aside>
      <div className="dev-placeholder">Header</div>
    </>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default HeaderComponent;
// #endregion ================ EXPORTED COMPONENT ==============================
