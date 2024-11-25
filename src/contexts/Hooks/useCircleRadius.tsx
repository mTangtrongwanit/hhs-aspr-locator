// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
// #endregion ------------------- React ---------------------------------

import Circle from "@arcgis/core/geometry/Circle";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import { useEffect } from "react";

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const useCircleRadius = ({
  searchPoint,
  locationsMapView,
  selectedIllness,
  radius,
  setCircle,
}: {
  searchPoint: {
    name: string;
    point: Point;
  } | null;
  locationsMapView: __esri.MapView | null;
  selectedIllness: {
    label: string;
    value: string;
  } | null;
  radius: number;
  setCircle: (circle: Circle) => void;
}) => {
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // useEffect to watch for changes in the selected Illness and search radius and update the map view
  // with a circle around the search area
  useEffect(() => {
    if (!searchPoint || !locationsMapView || !selectedIllness?.value) return;
    // add a circle to the map at the search point
    const circle = new Circle({
      center: new Point({
        latitude: searchPoint?.point.latitude,
        longitude: searchPoint?.point.longitude,
        spatialReference: searchPoint?.point?.spatialReference,
      }),
      radius: radius,
      radiusUnit: "miles",
      spatialReference: searchPoint?.point?.spatialReference,
    });
    setCircle(circle);
    const circleLayer = new GraphicsLayer({
      graphics: [
        new Graphic({
          geometry: circle,
          symbol: new SimpleFillSymbol({
            // Fill color #CCCCCC and .7 point border with color #000000. Transparency 35%
            color: [204, 204, 204, 0.35],
            outline: {
              color: [0, 0, 0],
              width: 0.7,
            },
          }),
        }),
      ],
    });
    locationsMapView.map.layers.add(circleLayer);
    locationsMapView.map.layers.reorder(circleLayer, 0);
    // cleanup by destroying the circle layer
    return () => {
      locationsMapView?.map?.remove(circleLayer);
      circleLayer.destroy();
    };
  }, [selectedIllness, locationsMapView, radius, searchPoint]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return {};
  // #endregion -------------------- Render ------------------------------------
};
// #endregion =================== EXPORTED COMPONENT ==============================
