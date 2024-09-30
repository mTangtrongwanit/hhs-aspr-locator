/**
 * Configuration
 */

// #region ========================= IMPORTS ===================================
// #region ------------------------ Resources ----------------------------------
import { type StaticConfiguration } from "./config.types";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// #endregion ------------------------- Resources ---------------------------------
// #endregion ========================== IMPORTS ==================================

// #region ========================= EXPORTED CONSTANTS ==============================
const config: StaticConfiguration = {
    portal: {
        url: "https://dhhs.maps.arcgis.com/",
        appId: "2MAyeDcDhNcYTqwX"
    },
    treatmentData: {
        locationsWebMapId: "b5346d4c624f4c1f991928d6fc392fda",
        treatment_sites: {
            name: "Treatment Sites",
            locationsLayer: new FeatureLayer({
                portalItem: {
                    id: "1528cbc7e0e2409a9ddd6e018edfb0aa"
                }
            }),
        },
        treatmentsIllnessesData: {
            name: "Treatment Dictionary Option 2",
            treatmentsIllnessesLayer: new FeatureLayer({
                url: "https://services2.arcgis.com/ZQ4jTQn6k7VPXEwO/arcgis/rest/services/Treatments_Locator_2_Test_Data/FeatureServer/2"
            }),
        }
    }
};
// #endregion ========================== EXPORTED CONSTANTS ==============================
// #region ========================= EXPORTS ===================================
export default config;
// #endregion ========================== EXPORTS ===================================
