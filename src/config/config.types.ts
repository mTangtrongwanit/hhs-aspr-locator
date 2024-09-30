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
    treatment_sites: {
      name: string;
      url: string;
      fields: {
        state: string;
        city: string;
        zip: string;
      };
    };
    treatmentDictionaryOptiion1: {
      name: string;
      url: string;
      fields: {
        illness: string;
      };
    };
    treatmentDictionaryOption2: {
      name: string;
      url: string;
      fields: {
        display_name: string;
        illness: string;
      };
    };
  };
  portal: {
    url: string;
    appId: string;
  };
}
// #endregion ================== EXPORTED TYPES ================================
