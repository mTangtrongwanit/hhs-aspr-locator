/**
 * Search Styles
 *
 * Styled components for the Search component.
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
export const StyledSearch = styled.div`
  //more relevant styles in index.css

  // --- Sizing / Box-Model ---
  width: auto;
  max-width: 20rem;
  padding: 8px 4px;
  height: var(--search-container-item-height);

  // --- Position ---
  // --- Layout ---
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  // --- Decorative ---
  border: var(--border) solid var(--brand);
  background: white;
  color: var(--brand);
  border-radius: 4px;
  // --- States ---
  // --- Children ---
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
