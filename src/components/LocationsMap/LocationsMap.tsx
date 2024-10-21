/**
 * LocationsMap
 *
 * LocationsMap component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import React, { useRef, useEffect, useMemo } from "react";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
/* Create Map */
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Extent from "@arcgis/core/geometry/Extent";
import Point from "@arcgis/core/geometry/Point";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import CustomContent from "@arcgis/core/popup/content/CustomContent.js";
import Graphic from "@arcgis/core/Graphic";

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledMap } from "./LocationsMap.styles";
import { useAppContext } from "@/contexts/AppContext";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config/config";
import { useSearchParams } from "react-router-dom";
import Card from "../Card";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import { calculateDistanceBetweenTwoPoints } from "@/utils/geographicUtils";
// import { SiteAttributesType } from "@/utils";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

interface LocationsMapProps {
  isMobileListView: boolean;
}

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const LocationsMap = ({ isMobileListView }: LocationsMapProps) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const {
    locations,
    locationsMapView,
    searchPoint,
    selectedIllness,
    selectedTreatmentSite,
    setFeatureLayer,
    setLocationsMapView,
    setSearchPoint,
    setSelectedTreatmentSite,
  } = useAppContext();
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // define a method to create custom content for a popup
  // taking in a jsx element and returning a custom content object
  const createPopupValue = (Popup: JSX.Element) => {
    return new CustomContent({
      outFields: ["*"],
      creator: async (event: any) => {
        // create an html element that will serve as the dom node
        const popup = document.createElement("popup");
        // use createRoot to create a domnode to which you can attach the html element
        // see https://react.dev/reference/react-dom/client/createRoot#createroot
        const root = createRoot(popup);
        const feature: Graphic = event.graphic;
        // @ts-expect-error - We know that the layer is a FeatureLayer
        const layer = map.findLayerById(feature.sourceLayer.id) as FeatureLayer;
        // query the point on the map with the objectID of the feature
        const item = await layer.queryFeatures({
          objectIds: [feature.attributes.OBJECTID],
          outFields: ["*"],
          returnGeometry: true,
        });
        const distance = await calculateDistanceBetweenTwoPoints(
          item.features[0].geometry as any,
          searchPoint,
        );
        // render valid React jsx within that dom node
        root.render(
          React.cloneElement(Popup, {
            serviceProvider: feature.attributes,
            key: feature.attributes.OBJECTID,
            selected: true,
            distance: distance,
          }),
        );
        return popup;
      },
    });
  };

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
    [],
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
        // popupEnabled: isMobileListView ? false: true,
        popupEnabled: true,
      });

      // remove the all the dock options so they don't show in the popup
      mapView.popup.dockOptions = {
        buttonEnabled: false,
        // set the break point to dock the popup in mobile
        breakpoint: { width: 672 },
        position: "bottom-center",
      };
      setLocationsMapView(mapView);

      if (geopoint && geopoint !== "" && geopoint.includes(",")) {
        const [lat, lon] = geopoint.split(",").map(Number);
        const p = new Point({
          longitude: lon,
          latitude: lat,
        });
        setSearchPoint({ name: geopoint, point: p });
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

            mapView
              .goTo({
                center: p,
                zoom: 11,
              })
              .catch((error) => {
                console.error("MapView goTo error: ", error);
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
                layer.load().then(() => {
                  setFeatureLayer(layer as FeatureLayer);
                });
              }
            });
            mapView.on("click", (event) => {
              // Get the country name when a user clicks on the map
              // If the boundary layer is undefined return
              // If the user clicks on a country boundary, log the country name\

              const treatmentsLayer = mapView.map.allLayers.find((layer) => {
                return (
                  layer.type == "feature" && layer.title?.includes("Treatments")
                );
              }) as __esri.FeatureLayer;

              //TODO: move this up into SFID block
              mapView
                .hitTest(event, {
                  include: treatmentsLayer ? [treatmentsLayer] : [],
                })
                .then(function (response) {
                  const treatmentsLayer = response.results?.find(
                    (hitResult) =>
                      (hitResult as __esri.GraphicHit).graphic?.layer &&
                      (hitResult as __esri.GraphicHit).graphic?.layer?.title &&
                      (
                        hitResult as __esri.GraphicHit
                      ).graphic?.layer?.title.includes("Treatments"),
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
  }, [
    map,
    setLocationsMapView,
    setSelectedTreatmentSite,
    searchParams,
    setSearchPoint,
    setFeatureLayer,
    isMobileListView,
  ]);

  // new useEffect that watches for selectedTreatmentSite and resets the map's popupTemplate
  useEffect(() => {
    if (!map || !selectedTreatmentSite) return;
    const content = createPopupValue(
      <Card
        asDiv={true}
        searchPoint={searchPoint}
        t={t}
        selectedIllness={selectedIllness.value}
      ></Card>,
    );
    const allLayers = map.allLayers.filter(
      (layer) =>
        layer.type === "feature" && layer?.title.includes("Treatments"),
    );
    allLayers.forEach((layer) => {
      if (
        layer.type === "feature" &&
        layer.title &&
        layer.title.includes("Treatments")
      ) {
        (layer as __esri.FeatureLayer).popupTemplate = new PopupTemplate({
          content: [content],
          overwriteActions: true,
        });
      }
    });
  }, [
    createPopupValue,
    selectedTreatmentSite,
    map,
    searchPoint,
    selectedIllness.value,
    t,
  ]);

  /** Highlight selected feature */
  useEffect(() => {
    if (locationsMapView && selectedTreatmentSite) {
      const highlight = selectedTreatmentSite.clone();
      reactiveUtils
        .whenOnce(() => !locationsMapView.updating && locationsMapView.ready)
        .then(() => {
          highlight.symbol = new SimpleMarkerSymbol({
            color: "#0274FA",
            size: "20",
          });
          locationsMapView.graphics.add(highlight);
          locationsMapView
            .goTo({ target: highlight.geometry, zoom: 15 })
            .catch((error) => {
              console.error("MapView goTo error: ", error);
            });
        });

      return () => {
        locationsMapView.graphics.remove(highlight);
      };
    }
  }, [locationsMapView, selectedTreatmentSite]);

  /** Zoom to locations center and extent. */
  useEffect(() => {
    if (searchParams.has("geopoint")) {
      return;
    }
    if (locationsMapView && searchPoint) {
      reactiveUtils
        .whenOnce(() => locationsMapView.ready)
        .then(() => {
          const target = locations.length ? locations : searchPoint?.point;

          const options =
            searchPoint.name === "US"
              ? new Extent({
                  xmin: -13888529.05448729,
                  ymin: 2816952.5443763654,
                  xmax: -7452716.4203439662,
                  ymax: 6340150.9062428866,
                  spatialReference: {
                    wkid: 102100,
                  },
                })
              : { target: target, zoom: 11 };
          locationsMapView.goTo(options).catch((error) => {
            console.error("MapView goTo error: ", error);
          });
        });
    }
  }, [locations, locationsMapView, searchPoint, searchParams, selectedIllness]);

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
