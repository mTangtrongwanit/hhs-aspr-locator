/**
 * LocationsMap Styles
 *
 * Styled components for the LocationsMap component.
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

export const StyledMessage = styled.p`
  padding: 1rem;
  margin: var(--border);
  background-color: #000000;
  color: #fff;

  transform: translateX(50%);
`;
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  grid-area: select-map;
  position: relative;

  border-radius: var(--rounded);
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
