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
  width: 100%;
  height: min-content;
  padding: var(--unit) calc(var(--unit) * 2);
  // --- Position ---
  position: relative; //for box-shadow visibility
  // --- Layout ---
  display: flex;
  gap: var(--unit);
  flex-wrap: wrap;
  // --- Decorative ---
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  // --- States ---
  // --- Children ---
  #listViewToggle {
    display: none;
    height: var(--search-container-item-height);
    // --- Sizing / Box-Model ---
    width: min-content;
    padding: calc(var(--unit) / 2) calc(var(--unit)); //vert horz

    align-items: center;
    gap: calc(var(--unit) / 2);
    // --- Decorative ---
    white-space: nowrap;
    background: #fff;
    color: var(--brand);
    border-radius: var(--radius);
    border: 1px solid var(--brand);
    font-weight: bold;
    font-size: var(--text-0);
    // --- States ---

    &:hover,
    &:focus {
      border-color: var(--accent);
      cursor: pointer;
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
  padding: calc(var(--unit) * 2);
  height: fit-content;
  // --- Position ---
  position: relative;
  isolation: isolate;
  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  // --- Decorative ---
  background: var(--light);
  // --- States ---

  // --- Children ---
  #list-title {
    // --- Layout ---
    padding-top: var(--unit);
    padding-bottom: var(--unit);
    margin-bottom: calc(0px - var(--unit));
    position: sticky;
    top: 0;
    z-index: 2;
    //test commit

    display: flex;
    flex-wrap: wrap;
    gap: var(--unit);

    background: var(--light);

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

export const StyledMapContainer = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  flex: 1;
  /* height: calc((var(--vh) * 100) - var(--remainder, 0px)); */
  height: calc((var(--vh) * 100));

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
      height: calc((var(--vh) * 100) - var(--remainder, 0px));
    }

    ${StyledListContainer} {
      width: 100vw;
    }
  }
  // --- Children ---
  #locs {
    display: flex;
  }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
