/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useRef, useEffect } from "react";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import { GovBanner } from "@trussworks/react-uswds";
import useResizeObserver from '@react-hook/resize-observer';
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { useAppContext } from "@/contexts/AppContext";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const HeaderComponent = () => {
  const { setBannerHeight, setHeaderHeight } = useAppContext();
  // #region ------------------ Hooks (Resources) ------------------------------
  const bannerRef = useRef<HTMLBaseElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useResizeObserver(bannerRef.current, (entry) => setBannerHeight(entry.contentRect.height));
  useResizeObserver(headerRef.current, (entry) => setHeaderHeight(entry.contentRect.height));

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  useEffect(() => {
    if (bannerRef.current !== null) {
      setBannerHeight(bannerRef.current.clientHeight);
    }
    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [])
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <>
      <aside ref={bannerRef}>
        {/* TODO: connect when i18n is in */}
        {/* <GovBanner
          language={i18n.resolvedLanguage === 'es' ? 'spanish' : undefined}
        /> */}
        <GovBanner ></GovBanner>
      </aside>
      <div ref={headerRef} className="dev-placeholder">Header</div>
    </>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default HeaderComponent;
// #endregion ================ EXPORTED COMPONENT ==============================
