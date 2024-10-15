/**
 * LocationsMap
 *
 * LocationsMap component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useRef, useEffect, useMemo } from "react";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
/* Create Map */
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Color from "@arcgis/core/Color";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Point from "@arcgis/core/geometry/Point";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledMap} from "./LocationsMap.styles";
import { useAppContext } from "@/contexts/AppContext";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config/config";
import { useSearchParams } from "react-router-dom";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const LocationsMap = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const {
    locationsMapView,
    setLocationsMapView,
    selectedTreatmentSite,
    setSelectedTreatmentSite,
    setSearchPoint,
    searchPoint,
    locationsExtent,
    setFeatureLayer,
    selectedIllness,
  } = useAppContext();
  const [searchParams] = useSearchParams();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // const [featureLayer, setFeatureLayer] = useState<FeatureLayer | null>(null);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  const map = useMemo<WebMap>(
    () =>
      new WebMap({
        portalItem: {
          id: config.treatmentData.locationsWebMapId,
          portal: {
            url: config.portal.url,
          },
        },
      }),
    []
  );
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  const mapRef = useRef<HTMLDivElement>(null);

  /** Create map view when map and container are ready */
  useEffect(() => {
    let geopoint;
    if (searchParams.has("geopoint")) {
      geopoint = searchParams.get("geopoint");
    }
    if (map && mapRef.current) {
      // Create map view
      const mapView = new MapView({
        map,
        container: mapRef.current,
        popupEnabled: false,
      });
      setLocationsMapView(mapView);

      if (geopoint && geopoint !== "" && geopoint.includes(",")) {
        reactiveUtils
          .whenOnce(() => !mapView.updating)
          .then(() => {
            // Get all layers from the map
            const allLayers = mapView.map.allLayers;
            // If the layer is a feature layer, and the layer includes "Treatments" set the outFields to all fields
            allLayers.forEach((layer) => {
              if (
                layer.type === "feature" &&
                layer.title &&
                layer.title.includes("Treatments")
              ) {
                (layer as __esri.FeatureLayer).outFields = ["*"];
                (layer as __esri.FeatureLayer).definitionExpression =
                  "OBJECTID = -1";
                layer.load().then(() => {
                  setFeatureLayer(layer as FeatureLayer);
                });
              }
            });

            const [lat, lon] = geopoint.split(",").map(Number);
            const p = new Point({
              longitude: lon,
              latitude: lat,
            });
            setSearchPoint({ name: geopoint, point: p });
            mapView.goTo({
              center: p,
              zoom: 12,
            });
          })
          .catch((error) => {
            console.error("MapView updating reactiveUtils error: ", error);
          });
      } else {
        reactiveUtils
          .whenOnce(() => !mapView.updating)
          .then(() => {
            // Get all layers from the map
            const allLayers = mapView.map.allLayers;
            // If the layer is a feature layer, and the layer includes "Treatments" set the outFields to all fields
            allLayers.forEach((layer) => {
              if (
                layer.type === "feature" &&
                layer.title &&
                layer.title.includes("Treatments")
              ) {
                (layer as __esri.FeatureLayer).outFields = ["*"];
                (layer as __esri.FeatureLayer).definitionExpression =
                  "OBJECTID = -1";
                layer.load().then(() => {
                  setFeatureLayer(layer as FeatureLayer);
                });
              }
            });
            mapView.on("click", (event) => {
              // Get the country name when a user clicks on the map
              // If the boundary layer is undefined return
              // If the user clicks on a country boundary, log the country name\

              //TODO: move this up into SFID block
              mapView
                .hitTest(event)
                .then(function (response) {
                  const treatmentsLayer = response.results?.find(
                    (hitResult) =>
                      (hitResult as __esri.GraphicHit).graphic?.layer &&
                      (hitResult as __esri.GraphicHit).graphic?.layer?.title &&
                      (
                        hitResult as __esri.GraphicHit
                      ).graphic?.layer?.title.includes("Treatments")
                  ) as __esri.GraphicHit;
                  if (!treatmentsLayer) return;
                  const t = treatmentsLayer as __esri.GraphicHit;
                  setSelectedTreatmentSite(t.graphic);
                })
                .catch((error) => {
                  console.error("MapView hitTest error: ", error);
                });
            });
          })
          .catch((error) => {
            console.error("MapView updating reactiveUtils error: ", error);
          });
      }

      // Cleanup map view on unmount
      return () => {
        // Remove resources from the view so they are not destroyed
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mapView.map = null;
      };
    }
  }, [map, setLocationsMapView, setSelectedTreatmentSite, searchParams, setSearchPoint, setFeatureLayer]);

  /** Highlight selected feature */
  useEffect(() => {
    if (locationsMapView && selectedTreatmentSite) {
      const highlight = selectedTreatmentSite.clone();
      highlight.symbol = new SimpleFillSymbol({
        outline: new SimpleLineSymbol({
          color: new Color([0, 84, 64]),
          style: "solid",
          width: 2,
        }),
        style: "solid",
        color: new Color([0, 84, 64, 0.25]),
      });

      locationsMapView.graphics.add(highlight);

      return () => {
        locationsMapView.graphics.remove(highlight);
      };
    }
  }, [locationsMapView, selectedTreatmentSite, setLocationsMapView]);

  /** Zoom to locations center and extent or zoom depending on properties of locationsExtent. */
  useEffect(() => {
    if (searchParams.has("geopoint")) {
      return;
    }
    if (locationsMapView && searchPoint && locationsExtent?.extent?.center) {
      reactiveUtils
        .whenOnce(() => locationsMapView.ready)
        .then(() => {
          const target = locationsExtent?.extent
            ? locationsExtent.extent.center
            :  searchPoint.point;
            const options = { target: target, zoom: 10 };

          locationsMapView.goTo(options).catch((error) => {
            console.error("MapView goTo error: ", error);
          });
        });
    }
  }, [
    locationsExtent,
    locationsMapView,
    searchPoint,
    searchParams,
    selectedIllness,
  ]);

  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <>
      <StyledMap ref={mapRef}></StyledMap>
    </>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default LocationsMap;
// #endregion ================ EXPORTED COMPONENT ==============================
