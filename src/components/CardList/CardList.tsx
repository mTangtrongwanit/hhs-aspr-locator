/**
 * CardList
 *
 * CardList component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useEffect, useState } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import Card from "../Card";
import { type ServiceProvider } from "../Card/Card.types";
import { calculateDistanceBetweenTwoPoints } from "../../utils/geographicUtils";
// #endregion ----------- Custom Components / Utilities -----------------------

// #region ------------------------ Resources ----------------------------------
import { useAppContext } from "@/contexts/AppContext";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region ========================= TYPES =====================================
// #endregion ====================== TYPES =====================================

// #region =================== EXPORTED COMPONENT ==============================
const CardList = ({
  serviceProviders,
}: {
  serviceProviders: ServiceProvider[];
}) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { selectedSort, searchPoint } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------
  // #region -------------------- Hooks (State) --------------------------------
  const [updatedServiceProviders, setUpdatedServiceProviders] = useState<
    ServiceProvider[]
  >([]);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------
  // #region -------------------- Hooks (Other) --------------------------------
  useEffect(() => {
    if (!searchPoint) return;
    const fetchDistances = async () => {
      const updatedProviders = await Promise.all(
        serviceProviders.map(async (serviceProvider) => {
          const distance = await calculateDistanceBetweenTwoPoints(
            serviceProvider,
            searchPoint
          );
          return { ...serviceProvider, distance };
        })
      );
      // setUpdatedServiceProviders((prev) => [...prev, ...updatedProviders]);
      setUpdatedServiceProviders(updatedProviders);
    };

    fetchDistances();
  }, [serviceProviders, searchPoint]);

  // useEffect(() => {
  //   if (updatedServiceProviders.length === 0) return;
  //   console.log("updatedServiceProviders", updatedServiceProviders);
  // }, [updatedServiceProviders]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  const sortedServiceProviders = [...updatedServiceProviders].sort((a, b) => {
    // Remove duplicates

    if (selectedSort.value === "distance") {
      return (a.distance || 0) - (b.distance || 0);
    } else if (selectedSort.value === "last_report_date") {
      return (
        new Date(b.last_report_date).getTime() -
        new Date(a.last_report_date).getTime()
      );
    }
    return 0;
  });
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <div>
      {sortedServiceProviders &&
        sortedServiceProviders.map((serviceProvider) => (
          <Card
            key={serviceProvider.facility_id}
            serviceProvider={serviceProvider}
          />
        ))}
    </div>
  );
  // #endregion ----------------------- Render ------------------------------------
};
export default CardList;
// #endregion =================== EXPORTED COMPONENT ==============================
