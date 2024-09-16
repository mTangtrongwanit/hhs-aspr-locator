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
padding: var(--unit);
padding-inline-start: var(--footer-offset);
// --- Position ---
// --- Layout ---
display: flex;
flex-direction: column;
gap: var(--unit);
// --- Decorative ---
color: #fff;
background-color: var(--brand);
// --- States ---
// --- Children ---
h2 {
    // --- Decorative ---
    font-size: var(--text-5);
    font-weight: 700;
}

p + div {
    display: flex;
    gap: inherit;
}

button {
// --- Sizing / Box-Model ---
width: min-content;
padding: calc(var(--unit) / 2) calc(var(--unit)); //vert horz
// --- Position ---
// --- Layout ---
// --- Decorative ---
white-space: nowrap;
background: var(--accent);
color: #fff;
border-radius: var(--radius);
border: var(--border) solid #fff;
font-weight: bold;
// --- States ---

&:hover {
    background: var(--brand);
}
// --- Children ---
}

`;

export const StyledContextRow = styled.section`
    // --- Local Variables ---
// --- Sizing / Box-Model ---
// --- Position ---
// --- Layout ---
// --- Decorative ---
// --- States ---
// --- Children ---
`;
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledLandingContent = styled.section`
    // --- Local Variables ---
// --- Sizing / Box-Model ---
width: 100%;
height: 100%;
// --- Position ---
// --- Layout ---
display: grid;
grid-template-areas: 
"search-container image"
"context-row context-row";
grid-template-columns: 2fr 1fr;
grid-template-rows: auto minmax(0, 1fr);
// --- Decorative ---
// --- States ---
// --- Children ---
`

// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
