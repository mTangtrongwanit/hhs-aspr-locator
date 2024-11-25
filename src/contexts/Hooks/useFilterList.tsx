// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
// #endregion ------------------- React ---------------------------------

import { Dispatch, SetStateAction, useEffect } from "react";

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config";
import Graphic from "@arcgis/core/Graphic";
import {
  calculateDistanceBetweenTwoPoints,
  getLocationsData,
  getLocationsCount,
} from "@/utils/geographicUtils";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const useFilterList = ({
  treatmentIllnessLookup,
  searchPoint,
  selectedIllness,
  selectedMedications,
  sharedSiteFacilityID,
  setLocations,
  setRadius,
}: {
  treatmentIllnessLookup: {
    [key: string]: {
      name: string;
      field: string;
    }[];
  };
  searchPoint: {
    name: string;
    point: __esri.Point;
  } | null;
  selectedIllness: {
    label: string;
    value: string;
  };
  selectedMedications: string[];
  sharedSiteFacilityID: string | null;
  setLocations: Dispatch<SetStateAction<Graphic[]>>;
  setRadius: Dispatch<SetStateAction<number>>;
}) => {
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  /** Update the locations by searchPoint/illness/medication */
  useEffect(() => {
    debugger;
    setLocations([]);
    if (!sharedSiteFacilityID && (!searchPoint || !selectedIllness.value)) {
      return;
    }

    // build the illness clause
    const illnessLookupFields =
      config.fieldsets[
        `${selectedIllness.value.toLowerCase()}LookupFields` as keyof typeof config.fieldsets
      ] ?? [];
    const illnessClause = illnessLookupFields
      .map((field) => `LOWER(${field}) = 'true'`)
      .join(" OR ");

    // todo: will have to pull these meds from the lookup table
    // build the medications clause
    const medicationClause = selectedMedications
      .map(
        (medication) =>
          treatmentIllnessLookup[selectedIllness.value]?.find(
            (treatment) => treatment.name === medication,
          ),
      )
      .filter((treatment) => treatment)
      .map((treatment) =>
        treatment?.field === "has_Oseltamivir"
          ? `LOWER(has_oseltamivir_generic) = 'true' OR LOWER(has_oseltamivir_suspension) = 'true' OR LOWER(has_oseltamivir_tamiflu) = 'true'`
          : `LOWER(${treatment?.field}) = 'true'`,
      )
      .join(" AND ");

    // build the where clause from illness/medication clauses
    const where = sharedSiteFacilityID
      ? `facility_id = '${sharedSiteFacilityID}'`
      : medicationClause.length
      ? `(${illnessClause}) AND (${medicationClause})`
      : illnessClause;

    // find the appropriate search radius
    const MAX_SEARCH_RADIUS = 50; // starting full search radius
    const MIN_SEARCH_RADIUS_INCREMENT = 2; // minimum increment to reduce the search radius
    const DISPLAY_COUNT = 100; // number of results to display
    const COUNT_BUFFER_FACTOR = 2; // conservative buffer to ensure we don't miss any points
    const DENSITY_ADJUSTMENT_FACTOR = 0.75; // density adjustment factor to account for clustering of points near cities (also assuming the search point is near a city, otherwise why would we have too many results?)
    const narrowSearchRadius = (radius: number): Promise<number> =>
      // @ts-expect-error - TS doesn't detect that we won't reach here if searchPoint is null
      getLocationsCount(searchPoint.point, radius, where)
        .then((count) => {
          const target = DISPLAY_COUNT * COUNT_BUFFER_FACTOR;
          // if the count is greater than the target count, calculate a new radius
          if (count > target) {
            // calculate a new radius (w/minimum increment) using the density of points (accounting for clustering near city center)
            // area = π * radius^2
            // density = count / area * density adjustment factor
            // new_area = target / density
            // new_radius = sqrt(new_area / π) = radius * sqrt(target / (count * density adjustment factor))
            const new_radius = Math.min(
              radius *
                Math.sqrt(
                  target /
                    (count * (DENSITY_ADJUSTMENT_FACTOR * COUNT_BUFFER_FACTOR)),
                ),
              radius - MIN_SEARCH_RADIUS_INCREMENT,
            );
            return narrowSearchRadius(new_radius);
          }
          setRadius(radius);
          return radius;
        })
        .catch(() => radius);

    (sharedSiteFacilityID
      ? Promise.resolve(MAX_SEARCH_RADIUS)
      : narrowSearchRadius(MAX_SEARCH_RADIUS)
    )
      .then((distance) =>
        // get the locations using the narrowed search radius
        getLocationsData(searchPoint?.point, distance, where),
      )
      .then((allLocations) => {
        // enrich the locations
        const allLocationsEnriched = allLocations.map((location) => {
          location.attributes.distance =
            calculateDistanceBetweenTwoPoints(
              location.attributes,
              searchPoint,
            ) ?? 0;
          return location;
        });

        // sort the locations by distance and clip to display count
        const displayLocations = allLocationsEnriched
          .sort((a, b) => a.attributes.distance - b.attributes.distance)
          .slice(0, DISPLAY_COUNT);

        setLocations(displayLocations);
      })
      .catch((error) => {
        console.error("Error getting locations data: ", error);
      });
  }, [
    treatmentIllnessLookup,
    searchPoint,
    selectedIllness,
    selectedMedications,
    sharedSiteFacilityID,
  ]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return {};
  // #endregion -------------------- Render ------------------------------------
};
// #endregion =================== EXPORTED COMPONENT ==============================
