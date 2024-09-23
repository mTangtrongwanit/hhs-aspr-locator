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
import type Point from '@arcgis/core/geometry/Point';
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED TYPES ================================
export interface Props {
  category?: string;
  selected?: boolean;
  serviceProvider: ServiceProvider;
}

export interface ServiceProvider {
  key: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  website: string;
  // services: Record<string, string[]>;
  distance: number;
  // location: Point;
}
// #endregion ================== EXPORTED TYPES ================================
