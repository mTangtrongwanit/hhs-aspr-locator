/**
 * Configuration
 */

// #region ========================= IMPORTS ===================================
// #region ------------------------ Resources ----------------------------------
import { type StaticConfiguration } from "./config.types";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as en from "../utils/locales/en.json";
// #endregion ------------------------- Resources ---------------------------------
// #endregion ========================== IMPORTS ==================================

// #region ========================= EXPORTED CONSTANTS ==============================
const config: StaticConfiguration = {
  portal: {
    url: "https://dhhs.maps.arcgis.com/",
    appId: "2MAyeDcDhNcYTqwX",
  },
  treatmentData: {
    locationsWebMapId: "b5346d4c624f4c1f991928d6fc392fda",
    treatment_sites: {
      name: "Treatment Sites",
      locationsLayer: new FeatureLayer({
        portalItem: {
          id: "1528cbc7e0e2409a9ddd6e018edfb0aa",
        },
      }),
    },
    treatmentsIllnessesData: {
      name: "Treatment Dictionary Option 2",
      treatmentsIllnessesLayer: new FeatureLayer({
        url: "https://services2.arcgis.com/ZQ4jTQn6k7VPXEwO/arcgis/rest/services/Treatments_Locator_2_Test_Data/FeatureServer/2",
      }),
    },
    fields: {
      is_pap: {
        name: "is_pap",
        label: en.Card.pap,
      },
      home_delivery: {
        name: "home_delivery",
        label: en.Card.homeDelivery,
      },
      is_icatt_site: {
        name: "is_icatt_site",
        label: en.Card.icatt,
      },
      has_USG_product: {
        name: "has_USG_product",
        label: en.Card.usgProduct,
      },
      has_oseltamivir_suspension: {
        name: "has_oseltamivir_suspension",
        label: en.Card.oseltamivirSuspension,
      },
      has_oseltamivir_tamiflu: {
        name: "has_oseltamivir_tamiflu",
        label: en.Card.tamifluOnly,
      },
      has_oseltamivir_generic: {
        name: "has_oseltamivir_generic",
        label: en.Card.oseltamivirGeneric,
      },
      is_prescribing_svcs_available: {
        name: "is_prescribing_svcs_available",
        label: en.Card.prescribingServices,
      },
    }
  },
  options: {
    languageOptions: [
      {
        label: "English",
        value: "en",
      },
      {
        label: "Spanish",
        value: "es",
      },
      {
        label: "Chinese (Simplified)",
        value: "zh",
      },
    ],
    sortOptions: [
      { label: "Distance", value: "distance" },
      { label: "Last Reported", value: "last reported" },
    ],
    illnessOptions: [
      { label: "Flu", value: "flu" },
      { label: "COVID-19", value: "COVID" },
    ],
  },
  fieldsets: {
    fluTreatmentFields: [
      "has_baloxavir",
      "has_zanamivir",
      "has_peramivir",
      "has_oseltamivir_generic",
      "has_oseltamivir_suspension",
      "has_oseltamivir_tamiflu",
    ],
    covidTreatmentFields: ["has_paxlovid", "has_lagevrio", "has_veklury"],
  },
};
// #endregion ========================== EXPORTED CONSTANTS ==============================
// #region ========================= EXPORTS ===================================
export default config;
// #endregion ========================== EXPORTS ===================================
