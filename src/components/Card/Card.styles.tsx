/**
 * Card Styles
 *
 * Styled components for the Card component.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import styled from "styled-components";
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #region -------------- Custom Components / Utilities ------------------------
// import { Breakpoints } from "@/utils/style-utils";
// #endregion ----------- Custom Components / Utilities ------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENTS =============================
// #region -------------------------- Atoms ------------------------------------
export const StyledCardTitle = styled.h3`
  // --- Decorative ---
  font-size: var(--text-1);
  font-weight: 600;
  line-height: 125%;
  color: var(--text);
  flex-grow: 1;
`;

export const StyledLabel = styled.span`
  // --- Sizing / Box-Model ---
  margin-inline-end: calc(var(--unit) / 2);

  // --- Position ---
  display: inline;

  // --- Decorative ---
  font-size: var(--text-0);
  color: var(--text);
  font-style: italic;
`;

export const StyledOfferingSpan = styled.span`
  // --- Decorative ---
  font-weight: 400;
  font-size: var(--text-0);
  color: var(--text);

  // --- States ---
  // * Adds comma and space after all but the last
  &:not(:last-of-type)::after {
    content: ", ";
  }
`;

// export const StyledOutlinedLink = styled.a`
//   // --- Sizing / Box-Model ---
//   padding: calc(var(--unit) / 2);

//   // --- Layout ---
//   display: flex;
//   gap: calc(var(--unit) / 2);
//   align-items: center;

//   // --- Decorative ---
//   color: var(--brand);
//   text-decoration: none;
//   background: none;
//   border: 1px solid var(--brand);
//   border-radius: var(--radius);
//   cursor: pointer;

//   span {
//     font-weight: 400;
//   }
// `;
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
export const StyledTitleRow = styled.div`
  // --- Layout ---
  display: flex;
  gap: var(--unit);
  justify-content: space-between;
  align-items: baseline;
`;
export const StyledIconField = styled.div`
  // --- Layout ---
  display: flex;
  gap: calc(var(--unit) / 2);
  align-items: start;
  color: var(--text);
`;

export const StyledTooltipContainer = styled.div`
  // --- Layout ---
  display: flex;
  gap: var(--unit);
  flex-wrap: wrap;
  row-gap: calc(var(--unit) * 0.25);
`;
export const StyledRow = styled.div`
  // --- Layout ---
  display: flex;
  gap: calc(var(--unit) / 2);
  flex-wrap: wrap;
  row-gap: calc(var(--unit) / 2);

  // --- Decorative ---
  color: var(--text);
  background: #fff;

  &:last-child {
    justify-content: end;
  }
`;

export const StyledLabelRow = styled.div`
  // --- Layout ---
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--unit);

  // --- Decorative ---
  color: var(--text);
`;
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledCard = styled.li<{
  $selected?: boolean;
}>`
  // --- Sizing / Box-Model ---
  min-width: var(--min-card-width);
  max-width: var(--max-card-width);
  width: 100%; //prevent align-items: center from shrinking children
  padding: var(--unit);
  border-radius: var(--radius);

  // --- Position ---
  position: relative;
  z-index: 1; //raise above plants

  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit));

  // --- Decorative ---
  border: 4px solid #fff;
  color: var(--text);
  background-color: #fff;

  // --- States ---
  ${(props) =>
    props.$selected &&
    `
    border-color: #0274FA;
  `}

  // --- Children ---

  a {
    color: var(--brand);
    font-weight: 400;
  }
  address {
    display: flex;
    flex-direction: column;
    gap: calc(var(--unit) / 2);
    font-weight: 300;
  }
  .TooltipContent {
    // --- Sizing / Box-Model ---
    border-radius: 4px;
    padding: calc(var(--unit) / 2);
    max-width: 12rem;

    // --- Position ---
    position: relative;
    z-index: 3;
    // --- Decorative ---
    color: var(--light);
    background-color: var(--text);
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
    fill: var(--text);
  }

  .icon-light {
    color: var(--ui-pale-med);
  }

  .smallText {
    font-size: var(--text--1);
    font-weight: 300;
    line-height: 125%;
    color: var(--text);
  }

  li {
    list-style-type: none;
  }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
