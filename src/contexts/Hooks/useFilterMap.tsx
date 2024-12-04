// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
// #endregion ------------------- React ---------------------------------

import { useEffect } from "react";

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
// useEffect to watch for changes in the filteredSites and update the feature layer definition expression
export const useFilterMap = ({
  featureLayer,
  locations,
  locationsMapView,
  filteredSites,
  radius,
  selectedIllness,
  selectedMedications,
  selectedFilters,
  treatmentIllnessLookup,
  sharedSiteFacilityID,
}: {
  featureLayer: __esri.FeatureLayer | null;
  locations: __esri.Graphic[] | null;
  locationsMapView: __esri.MapView | null;
  filteredSites: __esri.Graphic[] | null;
  radius: number;
  selectedIllness: {
    label: string;
    value: string;
  };
  selectedMedications: string[];
  selectedFilters: {
    name: string;
  }[];
  treatmentIllnessLookup: {
    [key: string]: {
      name: string;
      field: string;
    }[];
  };
  sharedSiteFacilityID: string | null;
}) => {
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // useEffect to watch for changes in the filteredSites and update the feature layer definition expression
  useEffect(() => {
    if (!featureLayer || !locations || !locationsMapView) return;
    let where = "OBJECTID = -1";

    // build the illness clause
    const illnessLookupFields =
      config.fieldsets[
        `${selectedIllness.value.toLowerCase()}LookupFields` as keyof typeof config.fieldsets
      ] ?? [];
    const illnessClause =
      illnessLookupFields?.length &&
      illnessLookupFields
        .map((field) => `LOWER(${field}) = 'true'`)
        .join(" OR ");

    // build the medication clause
    const medicationClause =
      selectedMedications.length &&
      selectedMedications
        .map(
          (medication) =>
            treatmentIllnessLookup[selectedIllness.value]?.find(
              (treatment) => treatment.name === medication,
            ),
        )
        .filter((treatment) => treatment)
        .map((treatment) =>
          treatment?.field === "has_Oseltamivir"
            ? `(LOWER(has_oseltamivir_generic) = 'true' OR LOWER(has_oseltamivir_suspension) = 'true' OR LOWER(has_oseltamivir_tamiflu) = 'true')`
            : `LOWER(${treatment?.field}) = 'true'`,
        )
        .join(" AND ");

    // build the filter clause
    const filterClause =
      selectedFilters.length &&
      selectedFilters
        .map((filter) => {
          const filterName =
            config.treatmentData.fields[
              filter.name as keyof typeof config.treatmentData.fields
            ].name;
          if (filterName === "is_pap") {
            return `(LOWER(${config.treatmentData.fields.has_USG_product.name}) = 'true' OR LOWER(${filterName}) = 'true')`;
          } else {
            return `LOWER(${filterName}) = 'true'`;
          }
        })
        .join(" AND ");

    // if no selectedIllness show no points
    if (!illnessClause) {
      where = sharedSiteFacilityID
        ? `facility_id = '${sharedSiteFacilityID}'`
        : "OBJECTID = -1";
    } else {
      // join illness, meds and filters if they are present
      const clauses = [illnessClause, medicationClause, filterClause]
        .filter((clause) => clause)
        .map((clause) => `(${clause})`);
      where = clauses.join(" AND ");
    }
    featureLayer.definitionExpression = where;
  }, [
    featureLayer,
    locations,
    locationsMapView,
    filteredSites,
    radius,
    selectedIllness,
    selectedMedications,
  ]);

  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return {};
  // #endregion -------------------- Render ------------------------------------
};
// #endregion =================== EXPORTED COMPONENT ==============================
