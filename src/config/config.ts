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
        locationsWebMapId: "b5346d4c624f4c1f991928d6fc392fda",
    },
    portal: {
        url: "https://dhhs.maps.arcgis.com/",
        appId: "2MAyeDcDhNcYTqwX"
    }
};
// #endregion ========================== EXPORTED CONSTANTS ==============================
// #region ========================= EXPORTS ===================================
export default config;
// #endregion ========================== EXPORTS ===================================
