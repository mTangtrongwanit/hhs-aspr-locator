/**
 * Card Types
 *
 * Card component types.
 */

/**
 * TODO: Copied from ACF
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import type Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED TYPES ================================
export interface Props {
  selected?: boolean;
  serviceProvider: ServiceProvider;
}

export interface ServiceProvider {
  key: number; //OID
  name: string;
  address: string;
  phone: string;
  distance?: number;
  homeDelivery?: boolean;
  usgProcured?: boolean;
  icatt?: boolean;
  patientAssistance?: boolean;
  tamifluOnly?: boolean;
  pediatric?: boolean;
  isHRSA?: boolean;
  //TODO: Set this prop to optional for testing, but it should be required.
  location?: Point;
}
// #endregion ================== EXPORTED TYPES ================================
