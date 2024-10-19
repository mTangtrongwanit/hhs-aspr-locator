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
export const StyledDropdownSelect = styled.section`
  position: relative;
  z-index: 2;

  .DropDownButton {
    position: relative;

    width: inherit;
    min-width: inherit;

    display: flex;
    justify-content: space-between;
    padding: calc(var(--unit) * 0.25);

    cursor: pointer;
    background: #155197;
    border-radius: var(--radius);
    color: white;
    padding: calc(var(--unit) * 0.25);
    height: 30px;
  }

  .DropdownMenuContent {
    min-width: inherit;
    background-color: white;
    border-radius: 6px;
    padding: calc(var(--unit) * 0.25);
    box-shadow:
      0px 0px 38px -10px rgba(18, 52, 85, 0.45),
      0px 10px 20px -15px rgba(18, 49, 79, 0.45);
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }

  .DropdownMenuArrow {
    fill: white;
  }

  .DropDownItem {
    display: flex;
    align-items: center;
    padding: calc(var(--unit) * 0.25) calc(var(--unit) * 0.5);
    gap: calc(var(--unit) * 0.25);
    font-size: var(--text--1);
    line-height: 25px;
    color: var(--selected, var(--text));
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      aspect-ratio: 1;
    }

    .placeholder {
      width: 20px;
    }
  }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
