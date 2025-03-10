/**
 * Card Types
 *
 * Card component types.
 */

import { SiteAttributesType } from "@/utils";

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
// import type Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED TYPES ================================
export interface Props {
  asDiv?: boolean;
  selected?: boolean;
  selectedIllness?: string;
  serviceProvider?: SiteAttributesType;
  distance?: number | undefined;
  searchPoint?: { name: string; point: __esri.Point } | null;
  t: any;
  autoZoom?: number | null;
  onZoomToClick?: (x: SiteAttributesType) => void;
  locations?:  __esri.Graphic[];
  locationsMapView?: __esri.MapView | null;
  setSelectedTreatmentSite?: (x: __esri.Graphic | null) => void;
}
// #endregion ================== EXPORTED TYPES ================================
