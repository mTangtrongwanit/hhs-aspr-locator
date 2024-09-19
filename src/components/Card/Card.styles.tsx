/**
 * Card Styles
 *
 * Styled components for the Card component.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import styled from 'styled-components';
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #region -------------- Custom Components / Utilities ------------------------
import { Breakpoints } from '@/styles/breakpoints';
// #endregion ----------- Custom Components / Utilities ------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENTS =============================
// #region -------------------------- Atoms ------------------------------------
export const StyledCardTitle = styled.h3`
  // --- Decorative ---
  font-size: var(--text-1);
  color: var(--ui-vibrant-dark);
  font-family: 'Merriweather';
`;

export const StyledLabel = styled.span`
  // --- Sizing / Box-Model ---
  margin-inline-end: calc(var(--default-spacing) / 2);

  // --- Position ---
  display: inline;

  // --- Decorative ---
  font-size: var(--text-0);
  color: var(--ui-mono-dark);
  font-style: italic;
`;

export const StyledOfferingSpan = styled.span`
  // --- Decorative ---
  font-weight: 400;
  font-size: var(--text-0);
  color: var(--ui-mono-med);

  // --- States ---
  // * Adds comma and space after all but the last
  &:not(:last-of-type)::after {
    content: ', ';
  }
`;

export const StyledOutlinedLink = styled.a`
  // --- Sizing / Box-Model ---
  padding: calc(var(--default-spacing) / 2) 0;

  // --- Layout ---
  display: flex;
  gap: calc(var(--default-spacing) / 2);
  align-items: center;

  // --- Decorative ---
  color: var(--ui-vibrant-dark);

  span {
    font-weight: 600;
  }
`;
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
export const StyledTitleRow = styled.div`
  // --- Layout ---
  display: flex;
  gap: var(--default-spacing);
  justify-content: space-between;
`;
export const StyledIconField = styled.div`
  // --- Layout ---
  display: flex;
  gap: calc(var(--default-spacing) / 2);
  align-items: center;
  color: var(--ui-vibrant-dark);
`;

export const StyledTooltipContainer = styled.div`
  // --- Layout ---
  display: flex;
  gap: var(--default-spacing);
  flex-wrap: wrap;
  row-gap: 4px;
`;
export const StyledRow = styled.div`
  // --- Layout ---
  display: flex;
  gap: var(--default-spacing);
  flex-wrap: wrap;
  row-gap: 4px;

  // --- Decorative ---
  color: var(--ui-mono-med);
`;

export const StyledLabelRow = styled.div`
  // --- Layout ---
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--default-spacing);

  // --- Decorative ---
  color: var(--ui-mono-med);
`;
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledCard = styled.div<{
  $category?: string;
  $selected?: boolean;
}>`
  // --- Sizing / Box-Model ---
  min-width: var(--min-card-width);
  max-width: var(--max-card-width);
  width: 100%; //prevent align-items: center from shrinking children
  padding: var(--default-spacing);
  border-radius: var(--default-border);

  // --- Position ---
  position: relative;
  z-index: 1; //raise above plants

  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: calc(var(--default-spacing) / 2);

  // --- Decorative ---
  border: var(--default-border) solid
    ${(props) => `var(--${props.$category}-med, var(--ui-pale-light))`};
  color: var(--ui-vibrant-dark);
  background-color: #fff;

  // --- States ---
  ${(props) =>
    props.$selected &&
    `
    border-color: var(--${props.$category}-dark, var(--ui-pale-dark));
  `}

  // --- Children ---
  .TooltipContent {
    // --- Sizing / Box-Model ---
    border-radius: 4px;
    padding: calc(var(--default-spacing) / 2);
    max-width: 12rem;

    // --- Position ---
    position: relative;
    z-index: 3;
    // --- Decorative ---
    color: var(--ui-vibrant-dark);
    background-color: white;
    box-shadow:
      hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    // --- Children ---
    & ${StyledOfferingSpan} {
      font-size: var(--text--1);
    }
  }

  .TooltipArrow {
    // --- Decorative ---
    fill: white;
  }

  .icon-light {
    color: var(--ui-pale-med);
  }

  .smallText {
    font-size: var(--text--1);
  }

  li {
    list-style-type: none;
  }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
