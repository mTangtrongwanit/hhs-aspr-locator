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
import { StyledMap, StyledMessage } from "./LocationsMap.styles";
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
    // sharedSiteFacilityID,
    // selectedIllness,
    // selectedMedications,
    // selectedFilters,
    // locations,
    setFeatureLayer,
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
    [],
  );
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  const mapRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  /** Create map view when map and container are ready */
  useEffect(() => {
    let geopoint;
    if (searchParams.has("geopoint")) {
      geopoint = searchParams.get("geopoint");
    }
    if (map && mapRef.current && messageRef.current) {
      // Create map view
      const mapView = new MapView({
        map,
        container: mapRef.current,
        popupEnabled: false,
      });
      setLocationsMapView(mapView);

      mapView.ui.add(messageRef.current);

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
  }, [map, setLocationsMapView, setSelectedTreatmentSite, searchParams]);

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
    if (locationsMapView && searchPoint && locationsExtent) {
      reactiveUtils
        .whenOnce(() => locationsMapView.ready)
        .then(() => {
          const target = locationsExtent.extent
            ? locationsExtent.extent.center
            : searchPoint.point;
          const options = locationsExtent.extent
            ? { target, extent: locationsExtent.extent }
            : { target, zoom: 8 };

          locationsMapView.goTo(options).catch((error) => {
            console.error("MapView goTo error: ", error);
          });
        });
    }
  }, [locationsExtent, locationsMapView, searchPoint, searchParams]);

  // useEffect(() => {
  //   if (featureLayer == null || !locations || locations.length === 0) {
  //     return;
  //   }
  //   let where = "";
  //   console.log("locations: ", locations);
  //   const objectIds = locations.map((location) => location.attributes.OBJECTID);
  //   if (objectIds.length === 0) {
  //     return;
  //   }
  //   where = `OBJECTID IN (${objectIds.join(",")})`;
  //   console.log("where: ", where);
  //   // let where = "";

  //   // const matchFacilityID = `facility_id = ${sharedSiteFacilityID}`;
  //   // const matchesFluFields = `(has_baloxavir = 'TRUE' OR has_baloxavir = 'true' OR has_zanamivir = 'TRUE' OR has_zanamivir = 'true' OR has_peramivir = 'TRUE' OR has_peramivir = 'true' OR has_oseltamivir_generic = 'TRUE' OR has_oseltamivir_generic = 'true' OR has_oseltamivir_suspension = 'TRUE' OR has_oseltamivir_suspension = 'true' OR has_oseltamivir_tamiflu = 'TRUE' OR has_oseltamivir_tamiflu = 'true')`;
  //   // const matchesCovidFields = `has_paxlovid = 'TRUE' OR has_paxlovid = 'true' OR has_lagevrio = 'TRUE' OR has_lagevrio = 'true' OR has_veklury = 'TRUE' OR has_veklury = 'true'`;

  //   // //If a site was shared in the URL params, filter only to that site.
  //   // if (sharedSiteFacilityID) {
  //   //   where = matchFacilityID;
  //   // } else if (selectedIllness.value == "") {
  //   //   //If no selectedIllness, filter out everything
  //   //   where = "1=0";
  //   // } else {
  //   //   // Start with selected illness check
  //   //   if (selectedIllness.value.toLowerCase() == "flu") {
  //   //     where = matchesFluFields;
  //   //   } else if (selectedIllness.value.toLowerCase() == "covid") {
  //   //     where = matchesCovidFields;
  //   //   }
  //   //   // meds
  //   //   if (selectedMedications.includes("Balaxovir")) {
  //   //     where += ` AND (has_baloxavir = 'TRUE' OR has_baloxavir = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Zanamivir")) {
  //   //     where += ` AND (has_zanamivir = 'TRUE' OR has_zanamivir = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Peramivir")) {
  //   //     where += ` AND (has_peramivir = 'TRUE' OR has_peramivir = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Oseltamivir Generic")) {
  //   //     where += ` AND (has_oseltamivir_generic = 'TRUE' OR has_oseltamivir_generic = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Oseltamivir Suspension")) {
  //   //     where += ` AND (has_baloxavir = 'TRUE' OR has_baloxavir = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Oseltamivir Tamiflu")) {
  //   //     where += ` AND (has_oseltamivir_suspension = 'TRUE' OR has_oseltamivir_suspension = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Paxlovid")) {
  //   //     where += ` AND (has_paxlovid = 'TRUE' OR has_paxlovid = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Lagevrio")) {
  //   //     where += ` AND (has_lagevrio = 'TRUE' OR has_lagevrio = 'true')`;
  //   //   }
  //   //   if (selectedMedications.includes("Veklury")) {
  //   //     where += ` AND (has_veklury = 'TRUE' OR has_veklury = 'true')`;
  //   //   }
  //   //   if (selectedFilters.length !== 0) {
  //   //     selectedFilters.forEach((filter) => {
  //   //       where += ` AND (${filter.name} = 'TRUE' OR ${filter.name} = 'true')`;
  //   //     });
  //   //   }
  //   // }

  //   featureLayer.definitionExpression = where;
  // }, [
  //   featureLayer,
  //   sharedSiteFacilityID,
  //   selectedIllness,
  //   selectedMedications,
  //   selectedFilters,
  //   locations,
  // ]);

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
