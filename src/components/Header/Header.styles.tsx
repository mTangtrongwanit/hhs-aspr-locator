/**
 * _TemplateComponent_ Styles
 *
 * Styled components for the _TemplateComponent_ component.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { Link } from "react-router-dom";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import styled from "styled-components";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { Breakpoints } from "@/utils/style-utils";
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
export const StyledHeaderContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    margin-right: auto;
    justify-content: flex-start;
  }
  &:last-child {
    margin-left: auto;
    justify-content: flex-end;
  }
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  & :hover {
    opacity: 0.8;
}
`;

export const StyledHeaderLogo = styled.img`
  max-inline-size: 100%;
  block-size: auto;
  object-fit: contain;
  height: 32px;
  width: auto;
`;

export const StyledAppTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: var(--text-3);
  font-weight: 700;
  color: var(--brand);
`;

export const StyledHeader = styled.header`
  display: flex;
  height: min-content;
  padding: var(--unit);
  gap: var(--unit);
  @media ${Breakpoints.lg} {
    flex-wrap: wrap;
    ${StyledAppTitle} {
      order: 3;
      flex-basis: 100%;
    }
    ${StyledHeaderContentContainer} {
      &:nth-child(2) {
        order: 3;
        flex-basis: 100%;
      }
      &:first-child {
        margin-right: auto;
        justify-content: flex-start;
      }
      &:last-child {
        margin-left: auto;
        justify-content: flex-end;
      }
    }
  }
`;

// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
