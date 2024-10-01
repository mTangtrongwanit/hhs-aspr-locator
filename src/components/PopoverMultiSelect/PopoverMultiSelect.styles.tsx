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
export const StyledPopoverMultiSelect = styled.section`
  min-width: 8rem;

  .PopoverMenuButton {
    position: relative;

    width: inherit;
    min-width: inherit;

    display: flex;
    justify-content: space-between;
    gap: 4px;

    cursor: pointer;
    background: #155197;
    border-radius: 4px;
    color: white;
    padding: 5px;
    height: 30px;
  }

  .PopoverMenuContent {
    border-radius: 4px;
    padding: 20px;
    width: 260px;
    display: flex;
    background-color: white;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  .PopoverMenuContent:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
      0 0 0 2px var(--violet-7);
  }
  .PopoverMenuContent[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  .PopoverMenuContent[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  .PopoverMenuContent[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  .PopoverMenuContent[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  .PopoverMenuArrow {
    fill: white;
  }

  .PopoverMenuClose {
    font-family: inherit;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--violet-11);
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .PopoverMenuClose:hover {
    background-color: var(--violet-4);
  }
  .PopoverMenuClose:focus {
    box-shadow: 0 0 0 2px var(--violet-7);
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const PopoverMenuContentContainer = styled.div`
`;

export const PopoverMenuTitle = styled.h3`
  font-size: var(--text-1);
  font-weight: 600;
  line-height: 125%;
  color: var(--text);
  flex-grow: 1;
`;

export const PopoverCheckBoxContainer = styled.div`
`;

export const PopoverCheckBoxRow = styled.div`
 display: 'flex';
 alignItems: 'center';
`;

export const StyledCheckboxLabel = styled.label`
  color: var(--text);
  padding-left: 15px;
  font-size: 15px;
  line-height: 1;
`;


// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
