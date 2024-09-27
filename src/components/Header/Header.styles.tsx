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
export const StyledHeader = styled.header`
  height: min-content;
  padding: var(--unit);

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 700;
    color: var(--brand);
    font-size: var(--text-3);
  }

  & .dev-placeholder {
    width: 12rem;
  }
`;

// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
