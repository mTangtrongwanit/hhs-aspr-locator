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

// CSS styling for the language dropdown
export const StyledDropdownSelect = styled.section`
  .DropDownButton{
    position: relative;
    left: 30%;
    
    cursor: pointer;
    background: #155197;
    border-radius: 4px;
    color: white;
    padding: 5px;
    height: 30px;
    width: 350px;
  }
  
  .DropdownMenuContent{
    min-width: 220px;
    background-color: white;
    border-radius: 6px;
    padding: 5px;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  
  .DropdownMenuArrow {
    fill: white;
  }
  
  .DropDownItem {
    padding-left: 25px;
    font-size: 12px;
    line-height: 25px;
    
    cursor: pointer;
  }
`;

// #region -------------------------- Atoms ------------------------------------
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
