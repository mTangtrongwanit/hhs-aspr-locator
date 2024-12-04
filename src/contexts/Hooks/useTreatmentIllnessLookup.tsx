// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
// #endregion ------------------- React ---------------------------------

import { useMemo } from "react";

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const useTreatmentIllnessLookup = ({
  treatmentIllnessData,
}: {
  treatmentIllnessData: __esri.Graphic[] | null;
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
      (treatmentIllnessData ?? []).reduce(
        (acc, feature) => {
          const illness = feature.attributes.illness;
          const treatment = {
            name: feature.attributes.display_name,
            field: feature.attributes.field_name,
          };
          if (acc[illness]) {
            acc[illness].push(treatment);
          } else {
            acc[illness] = [treatment];
          }
          return acc;
        },
        {} as { [key: string]: { name: string; field: string }[] },
      ),
    [treatmentIllnessData],
  );
  // #endregion -------------------- Render ------------------------------------
};
// #endregion =================== EXPORTED COMPONENT ==============================
