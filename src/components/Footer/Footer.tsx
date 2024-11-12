/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation } from "react-i18next";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterFirstColumn,
  StyledFooterSecondColumn,
  StyledFooterLinksContainer,
  StyledFooterLink,
  StyledFooterAddressContainer,
  StyledFooterAddressImageContainer,
  StyledFooterAddressImage,
  StyledFooterAddress,
  StyledFooterImageContainer,
  StyledFooterImageLink,
  StyledFooterImage,
  StyledFooterMediaLinksContainer,
  StyledFooterMediaLink,
} from "./Footer.styles";

import "@/utils/i18n";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Header.types";
import whiteLogoPath from "@/assets/images/ASPR-LOGO-WHITE.png";
import HHSLogoPath from "@/assets/images/birdlogo.png";
import xPath from "@/assets/images/x-logo-hhs-footer.png";
import xAltPath from "@/assets/images/x-logo-aspr-footer.png";
import linkedinPath from "@/assets/images/Link-W.png";
import igPath from "@/assets/images/Insta-W.png";
import emailPath from "@/assets/images/Email-W.png";
import threadsPath from "@/assets/images/Threads-W.png";
import flickrPath from "@/assets/images/Flicker-W.png";
import fbPath from "@/assets/images/Facebook-W.png";
import ytPath from "@/assets/images/Youtube-W.png";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const Footer = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledFooterContainer>
      <StyledFooter>
        <StyledFooterFirstColumn>
          <StyledFooterLinksContainer>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/Home.aspx"
                aria-label={t("Footer.Link to ASPR homepage")}
                title={t("Footer.Link to ASPR homepage")}
              >
                 {t("Footer.Home Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/Contact-Us---Footer.aspx"
                aria-label={t("Footer.ASPR Contact Section Link Screenreader Label")}
                title={t("Footer.ASPR Contact Section Link Screenreader Label")}
              >
                {t("Footer.Contact Us Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://public4.pagefreezer.com/browse/ASPR%20HHS/23-08-2024T07:29/https://aspr.hhs.gov/Pages/Home.aspx"
                aria-label={t("Footer.ASPR Archive Link Screenreader Label")}
                title={t("Footer.ASPR Archive Link Screenreader Label")}
                target="_blank"
                rel="noopener"
              >
                {t("Footer.ASPR Archive Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/accessibility.aspx"
                aria-label={t("Footer.ASPR Accessibility Link Screenreader Label")}
                title={t("Footer.ASPR Accessibility Link Screenreader Label")} 
              >
                {t("Footer.Accessibility Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/privacy.aspx"
                aria-label={t("Footer.ASPR Privacy Link Screenreader Label")}
                title={t("Footer.ASPR Privacy Link Screenreader Label")}
              >
                {t("Footer.Privacy Policies Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/disclaimer.aspx"
                aria-label={t("Footer.ASPR Disclaimer Link Screenreader Label")}
                title={t("Footer.ASPR Disclaimer Link Screenreader Label")}   
              >
                {t("Footer.Disclaimer Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/web/policies-and-standards/hhs-web-policies/plugins/index.html"
                aria-label={t("Footer.HHS Plugins Link Screenreader Label")}
                title={t("Footer.HHS Plugins Link Screenreader Label")}
                target="_blank"
                rel="noopener"
              >
                {t("Footer.HHS Viewers & Players Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/open/plain-writing/index.html"
                aria-label={t("Footer.HHS Plain Language Link Screenreader Label")}
                title={t("Footer.HHS Plain Language Link Screenreader Label")}
                target="_blank"
                rel="noopener"
              >
                {t("Footer.HHS Plain Language Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://www.hhs.gov/foia/index.html" target="_blank" rel="noopener"
                aria-label={t("Footer.HHS FOIA Link Screenreader Label")}
                title={t("Footer.HHS FOIA Link Screenreader Label")} 
              >
                {t("Footer.FOIA Link")}
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html"
                aria-label={t("Footer.HHS Vulnerability Link Screenreader Label")}
                title={t("Footer.HHS Vulnerability Link Screenreader Label")}
                target="_blank"
                rel="noopener"
              >
                
                {t("Footer.Vulnerability Disclosure Policy Link")}
              </a>
            </StyledFooterLink>
          </StyledFooterLinksContainer>
          <StyledFooterAddressContainer>
            <StyledFooterAddressImageContainer>
              <StyledFooterImageLink 
                href="https://www.hhs.gov/"
                aria-label={t("Footer.HHS Homepage Link Screenreader Label")}
                title={t("Footer.HHS Homepage Link Screenreader Label")}
              >
                <StyledFooterAddressImage
                  src={HHSLogoPath}
                  alt={t("Footer.HHS Logo Screenreader Label")}
                />
              </StyledFooterImageLink>
            </StyledFooterAddressImageContainer>
            <StyledFooterAddress>
              {t("Footer.HHS, Administration for Strategic Preparedness and Response (ASPR)")}
              <br />
              {t("Footer.200_Independence_Ave.,_Washington,_DC_20201")}
            </StyledFooterAddress>
          </StyledFooterAddressContainer>
        </StyledFooterFirstColumn>
        <StyledFooterSecondColumn>
          <StyledFooterImageContainer>
            <StyledFooterImageLink 
              href="https://aspr.hhs.gov/Pages/Home.aspx"
              aria-label={t("Footer.ASPR Homepage Link Screenreader Label")}
              title={t("Footer.ASPR Homepage Link Screenreader Label")}
            >
              <StyledFooterImage src={whiteLogoPath} alt={t("Footer.ASPR logo")} />
            </StyledFooterImageLink>
          </StyledFooterImageContainer>
          <StyledFooterMediaLinksContainer>
            <StyledFooterMediaLink>
              <a 
                href="https://x.com/ASPRgov"
                target="_blank" rel="noopener"
                aria-label={t("Footer.ASPRgov X Link Screenreader Label")}
                title={t("Footer.ASPRgov X Link Screenreader Label")}
              >
                <img src={xAltPath} alt={t("Footer.X Alt Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://x.com/HHS_ASPR"
                aria-label={t("Footer.HHS_ASPR X Link Screenreader Label")}
                title={t("Footer.HHS_ASPR X Link Screenreader Label")}
                target="_blank" rel="noopener">
                <img src={xPath} alt={t("Footer.X Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.linkedin.com/company/aspr/"
                aria-label={t("Footer.ASPR LinkedIn Link Screenreader Label")}
                title={t("Footer.ASPR LinkedIn Link Screenreader Label")}
                target="_blank" rel="noopener">
                <img src={linkedinPath} alt={t("Footer.LinkedIn Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.facebook.com/ASPRgov/"
                aria-label={t("Footer.Link to ASPRgov Facebook account")}
                title={t("Footer.Link to ASPRgov Facebook account")}
                target="_blank" rel="noopener">
                <img src={fbPath} alt={t("Footer.Facebook Icon")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a 
                href="https://www.instagram.com/asprgov"
                aria-label={t("Footer.ASPRgov Instagram Link Screenreader Label")}
                title={t("Footer.ASPRgov Instagram Link Screenreader Label")}
                target="_blank" rel="noopener"
              >
                <img src={igPath} alt={t("Footer.Instagram Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.threads.net/@asprgov"
                aria-label={t("Footer.ASPRgov Threads Link Screenreader Label")}
                title={t("Footer.ASPRgov Threads Link Screenreader Label")}
                target="_blank" rel="noopener"
              >
                <img src={threadsPath} alt={t("Footer.Threads Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.flickr.com/photos/asprgov"
                aria-label={t("Footer.ASPRgov Flickr Link Screenreader Label")}
                title={t("Footer.ASPRgov Flickr Link Screenreader Label")}
                target="_blank" rel="noopener"
              >
                <img src={flickrPath} alt={t("Footer.Flickr Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.youtube.com/c/ASPRgov"
                aria-label={t("Footer.ASPRgov YouTube Link Screenreader Label")}
                title={t("Footer.ASPRgov YouTube Link Screenreader Label")}
                target="_blank" rel="noopener"
              >
                <img src={ytPath} alt={t("Footer.YouTube Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://cloud.connect.hhs.gov/PHE"
                aria-label={t("Footer.ASPR Newsletter Screenreader Label")}
                title={t("Footer.ASPR Newsletter Screenreader Label")}
                target="_blank" rel="noopener"
              >
                <img src={emailPath} alt={t("Footer.Email Icon Screenreader Label")} />
              </a>
            </StyledFooterMediaLink>
          </StyledFooterMediaLinksContainer>
        </StyledFooterSecondColumn>
      </StyledFooter>
    </StyledFooterContainer>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Footer;
// #endregion ================ EXPORTED COMPONENT ==============================
