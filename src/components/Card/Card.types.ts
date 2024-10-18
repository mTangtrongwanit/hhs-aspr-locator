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
  selected?: boolean;
  selectedIllness?: string;
  serviceProvider?: SiteAttributesType;
  distance?: number | undefined;
  searchPoint?: { name: string; point: __esri.Point; } | null;
  locations?: __esri.Graphic[] | null;
  setSelectedTreatmentSite: (x: __esri.Graphic) => void;
  t: any;
}
// #endregion ================== EXPORTED TYPES ================================
