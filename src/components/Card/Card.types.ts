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
  selectedIllness: string;
  serviceProvider: SiteAttributesType;
}
// #endregion ================== EXPORTED TYPES ================================
