/**
 * Geographic Utilities
 *
 * Geographic utility functions.
 */

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point.js";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config";
// #endregion --------------------- Resources ----------------------------------

const locationsData = config.treatmentData.treatment_sites.locationsLayer;
const treatmentsIllnessesData = config.treatmentData.treatmentsIllnessesData.treatmentsIllnessesLayer;

/**
 * Get locations data
 * @input {__esri.Point} searchPoint - Point to search around
 * @returns {Promise<__esri.Feature[]>} - Locations data
 */
export const getLocationsData = async (location: Point) => {
    try {
        const query = locationsData.createQuery();
        query.where = "1=1";
        query.outFields = ["*"];
        query.returnGeometry = true;
        query.geometry = location;
        query.distance = 50;
        query.units = "miles";
        query.spatialRelationship = "intersects";
        const locations = await locationsData.queryFeatures(query);
        return locations.features;
    } catch (error) {
        console.error("Error getting locations data: ", error);
    }
};

/**
 * Get treatments illnesses data
 * @input {void}
 * @returns {Promise<__esri.Feature[]>} - Treatments illnesses data
 */
export const getTreatmentsIllnessesData = async () => {
    try {
        const query = treatmentsIllnessesData.createQuery();
        query.where = "1=1";
        query.outFields = ["*"];
        query.returnGeometry = false;
        const treatmentsIllnesses = await treatmentsIllnessesData.queryFeatures(query);
        return treatmentsIllnesses.features;
    } catch (error) {
        console.error("Error getting treatments illnesses data: ", error);
    }
};