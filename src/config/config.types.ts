/**
 * Configuration Types
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #region ------------------------ Resources ----------------------------------
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// #endregion ------------------------- Resources ---------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ========================== TYPES ====================================
// #endregion ======================= TYPES ====================================

// #region ===================== EXPORTED TYPES ================================
export interface StaticConfiguration {
  portal: {
    url: string;
    appId: string;
  };
  treatmentData: {
    locationsWebMapId: string;
    treatment_sites: {
      name: string;
      locationsLayer: FeatureLayer;
    };
    treatmentsIllnessesData: {
      name: string;
      treatmentsIllnessesLayer: FeatureLayer;
    };
  },
  options: {
    languageOptions: { label: string; value: string }[],
    sortOptions: { label: string; value: string }[],
    illnessOptions: { label: string; value: string }[]
  };
  fieldsets: {
    fluTreatmentFields: string[],
    covidTreatmentFields: string[]
  }
}
// #endregion ================== EXPORTED TYPES ================================
