/**
 * _TemplateComponent_ Types
 *
 * _TemplateComponent_ component types.
 */

// #region ========================= IMPORTS ===================================
// #region ---------------------- Next / React ---------------------------------
// #endregion ------------------- Next / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED TYPES ================================
export interface Props {
    id: string,
    name: string, // can be used for label
    value: string, // disease, medications, etc.
    checked?: boolean,
}
// #endregion ================== EXPORTED TYPES ================================
