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

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledMap, StyledMessage } from "./LocationsMap.styles";
import { useAppContext } from "@/contexts/AppContext";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config/config";
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
  } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
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
  const messageRef = useRef<HTMLParagraphElement>(null);

  /** Create map view when map and container are ready */
  useEffect(() => {
    if (map && mapRef.current && messageRef.current) {
      // Create map view
      const mapView = new MapView({
        map,
        container: mapRef.current,
        popupEnabled: false,
      });
      setLocationsMapView(mapView);

      mapView.ui.add(messageRef.current);

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
            }
          });

          mapView.on("click", (event) => {
            // Get the country name when a user clicks on the map
            // If the boundary layer is undefined return
            // If the user clicks on a country boundary, log the country name
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

      // Cleanup map view on unmount
      return () => {
        // Remove resources from the view so they are not destroyed
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mapView.map = null;
      };
    }
  }, [map, setLocationsMapView, setSelectedTreatmentSite]);

  useEffect(() => {
    if (selectedTreatmentSite) {
      console.log("Selected treatment site changed: ", selectedTreatmentSite);
    }
  }, [selectedTreatmentSite]);

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
      <StyledMessage ref={messageRef}>
        Select a treatment site to view details.
      </StyledMessage>

      <StyledMap ref={mapRef}></StyledMap>
    </>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default LocationsMap;
// #endregion ================ EXPORTED COMPONENT ==============================
