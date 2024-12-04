/**
 * Geographic Utilities
 *
 * Geographic utility functions.
 */

// #region ------------ 3rd-Party Components / Libraries -----------------------
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import Circle from "@arcgis/core/geometry/Circle";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import * as projection from "@arcgis/core/geometry/projection";
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
 * Build a query for locations
 * @param location Search center
 * @param distance Search radius (miles)
 * @param where Filtering where clause
 * @returns Query
 */
const buildLocationsQuery = (
  location: Point | undefined,
  distance: number,
  where?: string,
) => {
  const query = locationsData.createQuery();
  query.where = where || "1=1";
  query.outFields = ["*"];
  query.returnGeometry = true;
  if (location) {
    // query by exact circle geometry to match the search radius circle displayed on the map
    query.geometry = new Circle({
      center: location,
      radius: distance,
      radiusUnit: "miles",
      spatialReference: location.spatialReference,
    });
    query.spatialRelationship = "contains";
  }
  return query;
};

/**
 * Retrieve the number of locations for the given parameters
 * @param location Search center
 * @param distance Search radius (miles)
 * @param where Location filter clause
 * @returns Number of locations
 */
export const getLocationsCount = (
  location: Point,
  distance: number,
  where?: string,
) => {
  const query = buildLocationsQuery(location, distance, where);
  return locationsData.queryFeatureCount(query);
};

/**
 * Get locations data
 * @input {__esri.Point} searchPoint - Point to search around
 * @returns {Promise<__esri.Feature[]>} - Locations data
 */
export const getLocationsData = async (
  location: Point | undefined,
  distance: number = 50,
  where?: string,
) => {
  try {
    const query = buildLocationsQuery(location, distance, where);
    const locationsFeatures = await locationsData.queryFeatures(query);
    return locationsFeatures.features;
  } catch (error) {
    console.error("Error getting locations data: ", error);
    return [];
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
export const calculateDistanceBetweenTwoPoints = (
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
    // reproject polyline into search point's spatial reference
    const reprojectedPolyline = projection.project(polyline, {
      wkid: searchPoint.point.spatialReference.wkid,
    }) as Polyline;

    // get the planar distance between the two points
    return geometryEngine.planarLength(reprojectedPolyline, "miles");
  } catch (error) {
    console.error("Error calculating distance: ", error);
    return null;
  }
};
