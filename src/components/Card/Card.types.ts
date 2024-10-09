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
// import type Point from "@arcgis/core/geometry/Point";
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED TYPES ================================
export interface Props {
  selected?: boolean;
  serviceProvider: ServiceProvider;
}

export interface ServiceProvider {
  OBJECTID: number;
  facility_id: string;
  provider_name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: number;
  public_phone?: string;
  latitude: number;
  longitude: number;
  geopoint: string;
  geopoint_x: number;
  geopoint_y: number;
  last_report_date: number;
  is_pap?: string;
  is_prescribing_svcs_available?: string;
  url_appointment?: string;
  home_delivery?: string;
  is_icatt_site?: string;
  has_USG_product?: string;
  has_commercial_product?: string;
  has_paxlovid?: string;
  has_commercial_paxlovid?: string;
  has_usg_paxlovid?: string;
  has_lagevrio?: string;
  has_commercial_lagevrio?: string;
  has_usg_lagevrio?: string;
  has_veklury?: string;
  has_peramivir?: string;
  has_zanamivir?: string;
  has_baloxavir?: string;
  has_oseltamivir_generic?: string;
  has_oseltamivir_suspension?: string;
  has_oseltamivir_tamiflu?: string;
  non_public_yn?: string;
  grantee_code?: string;
  distance?: number;
  has_flu_treatments?: boolean;
  has_covid_treatments?: boolean;
}
// #endregion ================== EXPORTED TYPES ================================
