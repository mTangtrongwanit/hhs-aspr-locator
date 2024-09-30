/**
 * Geographic Utilities
 *
 * Geographic utility functions.
 */

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import Point from "@arcgis/core/geometry/Point.js";
import Polyline from "@arcgis/core/geometry/Polyline.js";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { type ServiceProvider } from "../components/Card/Card.types";
import { type AppContextType } from "@/contexts/AppContext.types";
// #endregion --------------------- Resources ----------------------------------

/**
 * Calculates the geodesic distance between two geographical points: a point that represents
 * the user's search location and a service provider's location. The distance is computed in miles.
 *
 * @returns {Promise<number | null>} The distance in miles between the two points, or null if an error occurs.
 *
 * @param {ServiceProvider} serviceProvider The service provider for which to calculate the distance.
 */
export const calculateDistanceBetweenTwoPoints = async (
  serviceProvider: ServiceProvider,
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
          [searchPoint.longitude, searchPoint.latitude], // First point
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
