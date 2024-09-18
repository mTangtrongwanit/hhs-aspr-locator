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
export const StyledSearchContainer = styled.section`
    // --- Local Variables ---
// --- Sizing / Box-Model ---
width: 100%;
height: min-content;
padding: var(--unit) calc(var(--unit) * 2) ;
// --- Position ---
position: relative; //for box-shadow visibility
// --- Layout ---
display: flex;
gap: var(--unit);
// --- Decorative ---
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
// --- States ---
// --- Children ---
`;

export const StyledListContainer = styled.section`
// --- Local Variables ---
// --- Sizing / Box-Model ---
padding: calc(var(--unit) * 2) ;
height: fit-content;
// --- Position ---
// --- Layout ---
display: flex;
flex-direction: column;
gap: var(--unit);
// --- Decorative ---
background: var(--light);
// --- States ---
// --- Children ---
div:first-child {
    // --- Layout ---
    padding-top: var(--unit);
    position: sticky;
    top: 0;

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


`;

/**
 * Grid layouts and sticky/fixed positioning don't work nicely. We can use grid-area to give this element
 * correct position and width, but not height.
 */


export const StyledMapContainer = styled.section`
// --- Local Variables ---
// --- Sizing / Box-Model ---
/* height: 400px; */
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
export const StyledLocationsContent = styled.section`
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
  // --- Children ---
  #locs {
    display: flex;
  }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
