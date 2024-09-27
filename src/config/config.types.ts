/**
 * Configuration Types
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #endregion ====================== IMPORTS ===================================

// #region ========================== TYPES ====================================
// #endregion ======================= TYPES ====================================

// #region ===================== EXPORTED TYPES ================================
export interface StaticConfiguration {
    treatmentData: {
        locationsWebMapId: string;
    };
    portal: {
        url: string;
        appId: string;
    };
}
// #endregion ================== EXPORTED TYPES ================================