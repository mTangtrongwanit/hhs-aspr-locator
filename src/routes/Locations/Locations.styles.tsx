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
import { Breakpoints } from "@/utils";
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
export const StyledSearchContainer = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  border-top: var(--border) solid var(--brand);
  width: 100%;
  height: min-content;
  padding: var(--unit) calc(var(--unit) * 2);
  // --- Position ---
  position: relative; //for box-shadow visibility
  // --- Layout ---
  display: flex;
  gap: var(--unit);
  flex-wrap: wrap;
  z-index: 1;
  // --- Decorative ---
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  // --- States ---
  // --- Children ---
  #listViewToggle {
    display: none;
    border: var(--border) solid var(--brand);
    align-items: center;
    padding: calc(var(--unit) * 0.75) calc(var(--unit) * 0.75);
    gap: calc(var(--unit) * 0.25);
    font-size: var(--text-0);
    font-weight: 600 !important;
    line-height: 125%;
    color: var(--brand);
    border-radius: var(--radius);
    background: white;
    text-decoration: none;
    // --- States ---

    &:hover,
    &:focus {
      color: white;
      background: var(--accent);
      cursor: pointer;
    }

    &:hover > svg > g {
      fill: white;
    }

    @media ${Breakpoints.sm} {
      display: flex;
    }
  }
`;

export const StyledListContainer = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  min-width: calc(var(--min-card-width) + (var(--unit) * 4));
  max-width: var(--max-card-width);
  width: 30vw;
  padding: calc(var(--unit) * 1.5) calc(var(--unit) * 2);
  height: fit-content;
  // --- Position ---
  position: relative;
  isolation: isolate;
  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  // --- Decorative ---
  // --- States ---

  // --- Children ---
  #list-title {
    // --- Layout ---
    position: sticky;
    top: 0;
    z-index: 2;
    //test commit

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--unit);

    .dev-placeholder {
      width: min-content;
    }
  }
  h2 {
    font-size: var(--text-3);
    color: var(--brand);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--unit);
  }
`;

export const StyledListNoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(var(--unit) * 2) 0;
  gap: var(--unit);
  & p {
    text-align: center;
    font-weight: 400;
    font-size: var(--text--1);
    color: var(--text);
  }
  h3 {
    text-align: center;
  }
`;

export const StyledListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: calc(var(--unit) / 2);
`;

export const StyledListOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--unit);
`;

export const StyledMapContainer = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  flex: 1;
  /* height: calc((var(--vh) * 100) - var(--remainder, 0px)); */
  height: calc((var(--vh) * 100));

  @media ${Breakpoints.sm} {
    height: calc((var(--vh) * 70));
  }

  // --- Position ---
  position: sticky;
  top: 0;
  // --- Layout ---
  // --- Decorative ---
  // --- States ---
  // --- Children ---
`;
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledLocationsContent = styled.main`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  width: 100%;
  height: 100%;
  // --- Position ---
  position: relative;
  // --- Layout ---
  display: flex;
  flex-direction: column;
  // --- Decorative ---
  // --- States ---

  @media ${Breakpoints.sm} {
    &.lView ${StyledMapContainer} {
      display: none;
    }

    &.mView ${StyledListContainer} {
      display: none;
    }
    ${StyledMapContainer} {
      position: relative;
      width: 100vw;
    }

    ${StyledListContainer} {
      width: 100vw;
    }
  }
  // --- Children ---
  #locs {
    display: flex;
    background: var(--light);
  }
`;

export const StyledSearchHere = styled.div<{ ismobilelistview: string }>`
  position: fixed;
  right:  var(--unit);
  @media ${Breakpoints.sm} {
  right: none;
  position: relative;
  display: ${({ ismobilelistview }) => (ismobilelistview === 'true' ? 'none' : 'flex')
}
`;

// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
