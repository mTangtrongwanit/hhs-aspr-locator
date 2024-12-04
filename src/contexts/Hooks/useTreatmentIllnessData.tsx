// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
// #endregion ------------------- React ---------------------------------
import { useEffect } from "react";
// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #region ------------------------ Resources ----------------------------------
import config from "@/config";
import { getTreatmentsIllnessesData } from "@/utils/geographicUtils";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const useTreatmentIllnessData = ({
  setTIData,
}: {
  setTIData: (treatmentIllnesses: __esri.Graphic[]) => void;
}) => {
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  /** Get the treatement illness data and set it to state */
  useEffect(() => {
    const fetchTreatmentsIllnesses = async () => {
      const treatmentIllnesses = await getTreatmentsIllnessesData();
      // custom oseltamivir parent object to use in generic filtering
      const oseltamivirParent = {
        attributes: {
          OBJECTID: 1,
          display_name: "Oseltamivir",
          field_name: "has_Oseltamivir",
          illness: "Flu",
        },
      } as __esri.Graphic;

      // remove 'Oseltamivir Generic',
      // 'Oseltamivir Suspension',
      // 'Oseltamivir Tamiflu',
      // 'Veklury'
      // and add oseltamivirParent and vekluryParent
      // to treatmentIllnesses
      const filterTreatmentIllnesses =
        treatmentIllnesses &&
        [oseltamivirParent, ...treatmentIllnesses]?.filter((treatment) => {
          return (
            treatment.attributes.display_name !== "Oseltamivir Generic" &&
            treatment.attributes.display_name !== "Oseltamivir Suspension" &&
            treatment.attributes.display_name !== "Oseltamivir Tamiflu" &&
            treatment.attributes.display_name !== "Veklury"
          );
        });

      filterTreatmentIllnesses?.sort((a, b) => {
        return (
          config.medicationOrder.findIndex(
            // Order by the index of the medicationOrder array
            (order) =>
              order.toLowerCase() === a.attributes.display_name.toLowerCase(),
          ) -
          config.medicationOrder.findIndex(
            (order) =>
              order.toLowerCase() === b.attributes.display_name.toLowerCase(),
          )
        );
      });

      setTIData(filterTreatmentIllnesses ?? []);
    };
    fetchTreatmentsIllnesses();
  }, []);

  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return {};
  // #endregion -------------------- Render ------------------------------------
};
// #endregion =================== EXPORTED COMPONENT ==============================
