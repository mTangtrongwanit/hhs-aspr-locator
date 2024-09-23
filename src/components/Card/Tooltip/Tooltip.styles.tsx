/**
 * Card Tooltip Styles
 *
 * Styled components for the Tooltip component.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENTS =============================
// #region --------------- Parent Component + Variants -------------------------
export const StyledIcon = styled.div`
  // --- Sizing / Box-Model ---
  height: min-content;
  width: min-content;

  // --- Decorative ---
  background-color: #fff;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const StyledTooltip = {
  ...Tooltip,
};

export const StyledTriggerButton = styled.button`
  // --- Sizing / Box-Model ---
  padding: calc(var(--unit) / 4) calc(var(--unit) / 3);

  // --- Decorative ---
  border-radius: var(--default-border);
  border: 4px solid var(--ui-mono-xlight);
  background-color: #fff;

  // --- States ---
  &:hover,
  &:hover * {
    background-color: var(--ui-mono-xlight);
  }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
