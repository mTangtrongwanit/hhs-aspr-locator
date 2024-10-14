/**
 * Geographic Utilities
 *
 * Geographic utility functions.
 */

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config";
import { type AppContextType } from "@/contexts/AppContext.types";
import { SiteAttributesType } from "./sharedTypes";
// #endregion --------------------- Resources ----------------------------------

// #region ------------------------ Constants ----------------------------------
const locationsData = config.treatmentData.treatment_sites.locationsLayer;
const treatmentsIllnessesData =
  config.treatmentData.treatmentsIllnessesData.treatmentsIllnessesLayer;
// #endregion --------------------- Constants ----------------------------------

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
    const locationsExtent = await locationsData.queryExtent(query);
    const locationsFeatures = await locationsData.queryFeatures(query);
    return {
      extent: locationsExtent,
      features: locationsFeatures,
    };
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
    const treatmentsIllnesses =
      await treatmentsIllnessesData.queryFeatures(query);
    return treatmentsIllnesses.features;
  } catch (error) {
    console.error("Error getting treatments illnesses data: ", error);
  }
};

/**
 * Calculates the geodesic distance between two geographical points: a point that represents
 * the user's search location and a service provider's location. The distance is computed in miles.
 *
 * @returns {Promise<number | null>} The distance in miles between the two points, or null if an error occurs.
 *
 * @param {ServiceProvider} serviceProvider The service provider for which to calculate the distance.
 */
export const calculateDistanceBetweenTwoPoints = async (
  serviceProvider: SiteAttributesType,
  searchPoint: AppContextType["searchPoint"],
) => {
  try {
    if (!searchPoint) {
      return null;
    }
    const serviceProviderPoint = new Point({
      latitude: serviceProvider.latitude,
      longitude: serviceProvider.longitude,
    });
    const polyline = new Polyline({
      paths: [
        [
          [searchPoint.point.longitude, searchPoint.point.latitude], // First point
          [serviceProviderPoint.longitude, serviceProviderPoint.latitude], // Second point
        ],
      ],
    });
  
    return geometryEngine.geodesicLength(polyline, "miles");
  } catch (error) {
    console.error("Error calculating distance: ", error);
    return null;
  }
};
