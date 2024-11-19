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
import useResizeObserver from "@react-hook/resize-observer";
import { useTranslation } from "react-i18next";
import webLogoPath from "@/assets/images/ASPR-logo-web.jpg";
import mobileLogoPath from "@/assets/images/ASPR-logo-mobile.jpg";

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import DropdownSingleSelect from "@/components/DropdownSingleSelect";
import {
  StyledHeader,
  StyledHeaderLink,
  StyledHeaderLogo,
  StyledAppTitle,
  StyledLink,
  StyledHeaderContentContainer,
} from "./Header.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { useAppContext } from "@/contexts/AppContext";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const HeaderComponent = () => {
  const { i18n, t } = useTranslation();

  const { setBannerHeight, setHeaderHeight } = useAppContext();
  // #region ------------------ Hooks (Resources) ------------------------------
  const bannerRef = useRef<HTMLBaseElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useResizeObserver(bannerRef.current, (entry) =>
    setBannerHeight(entry.contentRect.height),
  );
  useResizeObserver(headerRef.current, (entry) =>
    setHeaderHeight(entry.contentRect.height),
  );

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
  }, [setBannerHeight, setHeaderHeight]);
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
      <aside aria-hidden="false" data-aria-hidden="false" ref={bannerRef}>
        <GovBanner
          language={i18n.resolvedLanguage === "es" ? "spanish" : undefined}
        />
      </aside>
      <StyledHeader aria-hidden="false" data-aria-hidden="false" ref={headerRef}>
        <StyledHeaderContentContainer>
          <StyledHeaderLink to="/"
            aria-label="Link to COVID-19 and Flu Treatments Locator homepage"
            title="Link to COVID-19 and Flu Treatments Locator homepage">
            <StyledHeaderLogo
              src={webLogoPath}
              srcSet={`${mobileLogoPath} 274w, ${webLogoPath} 639w`}
              sizes="(max-width: 1100px) 117px,
              296px"
              alt="ASPR Administration for Strategic Preparedness & Response Logo"
            />
          </StyledHeaderLink>
        </StyledHeaderContentContainer>
        <StyledHeaderContentContainer>
          <StyledAppTitle>{t("Header.Title")}</StyledAppTitle>
        </StyledHeaderContentContainer>
        <StyledHeaderContentContainer>
        { location.pathname.includes("locations")
          ? <StyledLink
          to="/#faq"
          aria-label="View FAQ section"
          title="View FAQ section"
        >
          FAQ
        </StyledLink>
          : ""  }
          <DropdownSingleSelect type="language" />
        </StyledHeaderContentContainer>
      </StyledHeader>
    </>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default HeaderComponent;
// #endregion ================ EXPORTED COMPONENT ==============================
