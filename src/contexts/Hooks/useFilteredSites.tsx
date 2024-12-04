// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { useMemo } from "react";
// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config";
import { isTrue } from "@/utils";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const useFilteredSites = ({
  locations,
  selectedFilters,
}: {
  locations: __esri.Graphic[];
  selectedFilters: {
    name: string;
  }[];
}) => {
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return useMemo(
    () =>
      locations.filter((location) =>
        selectedFilters.every(
          (filter) =>
            isTrue(
              location.attributes[
                config.treatmentData.fields[
                  filter.name as keyof typeof config.treatmentData.fields
                ].name
              ],
            ) ||
            (filter.name === "is_pap" &&
              isTrue(
                location.attributes[
                  config.treatmentData.fields.has_USG_product.name
                ],
              )),
        ),
      ),
    [locations, selectedFilters],
  );
  // #endregion -------------------- Render ------------------------------------
};
// #endregion =================== EXPORTED COMPONENT ==============================
