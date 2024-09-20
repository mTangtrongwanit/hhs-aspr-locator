/**
 * _TemplateComponent_ Styles
 *
 * Styled components for the _TemplateComponent_ component.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import styled from "styled-components";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENTS =============================
/* Property Organization Guide */
// --- Local Variables ---
// --- Sizing / Box-Model ---
export const StyledCheckboxContainer = styled.section`
  .PopoverTrigger {
    background-color: yellow;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .PopoverContent {
    border-radius: 4px;
    padding: 20px;
    width: 260px;
    background-color: red;
  }
  
  .PopoverArrow {
    fill: white;
  }
`;

export const StyledCheckboxButton = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  width: 100%;
  padding: calc(var(--unit) * 2) var(--footer-offset);
  // --- Position ---
  grid-area: context-row;
  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  // --- Decorative ---
  background-color: #fff;
  color: var(--text);
  // --- States ---
  // --- Children ---
  p a {
    color: var(--brand);
    font-weight: 700;
  }
`;

// --- Position ---
// --- Layout ---
// --- Decorative ---
// --- States ---
// --- Children ---

// #region -------------------------- Atoms ------------------------------------
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
