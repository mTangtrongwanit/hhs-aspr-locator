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
        locationsWebMapId: "TODO: Add WebMap ID",
    },
    portal: {
        url: "https://dhhs.maps.arcgis.com/",
        appId: "TODO: Add WebMap ID"
    }
};
// #endregion ========================== EXPORTED CONSTANTS ==============================
// #region ========================= EXPORTS ===================================
export default config;
// #endregion ========================== EXPORTS ===================================
