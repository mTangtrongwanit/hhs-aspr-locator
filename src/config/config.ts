/**
 * Configuration
 */

// #region ========================= IMPORTS ===================================
// #region ------------------------ Resources ----------------------------------
import { type StaticConfiguration } from "./config.types";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import * as en from "../utils/locales/en.json";
import * as en from "../../public/locales/en.json";
// #endregion ------------------------- Resources ---------------------------------
// #endregion ========================== IMPORTS ==================================

// #region ========================= EXPORTED CONSTANTS ==============================
const config: StaticConfiguration = {
  portal: {
    url: "https://dhhs.maps.arcgis.com/",
    appId: "2MAyeDcDhNcYTqwX",
  },
  treatmentData: {
    //locationsWebMapId: "159676ebd40b46eea39381bb79506d07", // TODO: Use this webmap id instead once the basemap for it has been updated.
    locationsWebMapId: "01e986fdcbd14b66aa4f5d6641935ea2",
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
    },
  },
  options: {
    // Can add more language options below:
    languageOptions: [
      {
        label: "English",
        value: "en",
      },
      /* {
        label: "Spanish",
        value: "es",
      },
      {
        label: "Chinese",
        value: "zh",
      }, */
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
    fluLookupFields: ["is_FLU"],
    covidLookupFields: ["is_COVID"],
  },
  medicationOrder: [
    "Oseltamivir Generic",
    "Oseltamivir Suspension",
    "Oseltamivir Tamiflu",
    "Baloxovir",
    "Zanamivir",
    "Lagevrio",
    "Peramivir",
    "Paxlovid",
    "Outpatient Veklury",
  ],
};
// #endregion ========================== EXPORTED CONSTANTS ==============================
// #region ========================= EXPORTS ===================================
export default config;
// #endregion ========================== EXPORTS ===================================
