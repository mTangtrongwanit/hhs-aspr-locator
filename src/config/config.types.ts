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
    fields: {
      is_pap: {
        name: string;
        label: string;
      };
      home_delivery: {
        name: string;
        label: string;
      };
      is_icatt_site: {
        name: string;
        label: string;
      };
      has_USG_product: {
        name: string;
        label: string;
      };
      has_oseltamivir_suspension: {
        name: string;
        label: string;
      };
      has_oseltamivir_tamiflu: {
        name: string;
        label: string;
      };
      has_oseltamivir_generic: {
        name: string;
        label: string;
      };
      is_prescribing_svcs_available: {
        name: string;
        label: string;
      };
    };
  };
  options: {
    languageOptions: { label: string; value: string }[];
    sortOptions: { label: string; value: string }[];
    illnessOptions: { label: string; value: string }[];
  };
  fieldsets: {
    fluLookupFields: string[];
    covidLookupFields: string[];
  };
  medicationOrder: string[];
}

// APP_VERSION is defined in vite.config.ts
declare global {
  const APP_MODE: string;
  const APP_VERSION: string;
}

// #endregion ================== EXPORTED TYPES ================================
