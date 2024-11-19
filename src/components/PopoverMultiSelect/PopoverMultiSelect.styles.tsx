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
  /* min-width: 8rem; */

  .PopoverMenuButton {
    position: relative;

    width: inherit;
    min-width: inherit;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;

    cursor: pointer;
    font-size: var(--text-0);
    background: #155197;
    border-radius: 4px;
    color: white;
    padding: calc(var(--unit) * 0.25);
    height: var(--search-container-item-height);
  }

  .PopOverFilterCount {
    display: flex;
    align-items: center;
    margin-left: calc(var(--unit) * 0.25);
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

export const PopoverMenuContentContainer = styled.div``;

export const PopoverMenuTitle = styled.h3`
  font-size: var(--text-1);
  font-weight: 600;
  line-height: 125%;
  color: var(--text);
  flex-grow: 1;
`;

export const PopoverCheckBoxContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--light);
  padding: 0;
`;

export const PopoverCheckBoxRow = styled.div`
  display: flex;
  padding: calc(var(--unit) * 0.75) var(--unit);
  align-items: center;
  background: var(--light);
  gap: 16px;
`;

export const StyledCheckboxLabel = styled.label`
  font-size: var(--text-0);
  font-weight: 400;
  line-height: 125%;
  color: var(--text);
`;

export const StyledFilterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const StyledOutlineButton = styled.button`
  display: flex;
  padding: calc(var(--unit) * 0.75) calc(var(--unit) * 0.75);
  font-size: var(--text-0);
  font-weight: 600;
  line-height: 125%;
  color: var(--brand);
  border: 1px solid var(--brand);
  border-radius: var(--radius);
  background: white;

  &:hover {
    color: white;
    background: var(--accent);
    cursor: pointer;
  }
`;

export const StyledPrimaryButton = styled.button`
  display: flex;
  padding: calc(var(--unit) * 0.75) calc(var(--unit) * 0.75);
  font-size: var(--text-0);
  font-weight: 600;
  line-height: 125%;
  color: white;
  border: 1px solid var(--brand);
  border-radius: var(--radius);
  background: var(--brand);

  &:hover {
    background: var(--accent);
    cursor: pointer;
  }
`;

// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
