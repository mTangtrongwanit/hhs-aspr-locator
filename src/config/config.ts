/**
 * Configuration
 */

// #region ========================= IMPORTS ===================================
// #region ------------------------ Resources ----------------------------------
import { type StaticConfiguration } from "./config.types";
// #endregion ------------------------- Resources ---------------------------------
// #endregion ========================== IMPORTS ==================================

// #region ========================= EXPORTED CONSTANTS ==============================
const config: StaticConfiguration = {
    treatmentData: {
        treatment_sites: {
            name: "Treatment Sites",
            url: "https://services2.arcgis.com/ZQ4jTQn6k7VPXEwO/arcgis/rest/services/Treatments_Locator_2_Test_Data/FeatureServer/0",
            fields: {
                "state": "state",
                "city": "city",
                "zip": "zip"
            },
        },
        treatmentDictionaryOptiion1: {
            name: "Treatment Dictionary Option 1",
            url: "https://services2.arcgis.com/ZQ4jTQn6k7VPXEwO/arcgis/rest/services/Treatments_Locator_2_Test_Data/FeatureServer/1",
            fields: {
                "illness": "illness"
            }
        },
        treatmentDictionaryOption2: {
            name: "Treatment Dictionary Option 2",
            url: "https://services2.arcgis.com/ZQ4jTQn6k7VPXEwO/arcgis/rest/services/Treatments_Locator_2_Test_Data/FeatureServer/2",
            fields: {
                "display_name": "display_name",
                "illness": "illness"
            }
        }
    },
    portal: {
        url: "https://dhhs.maps.arcgis.com/",
        // TODO
        appId: ""
    }
};
// #endregion ========================== EXPORTED CONSTANTS ==============================
// #region ========================= EXPORTS ===================================
export default config;
// #endregion ========================== EXPORTS ===================================