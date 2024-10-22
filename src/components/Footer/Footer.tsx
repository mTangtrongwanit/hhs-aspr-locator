/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
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
                aria-label="Link to ASPR homepage"
                title="Link to ASPR homepage"
              >
                 Home
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/Contact-Us---Footer.aspx"
                aria-label="Link to ASPR contact section"
                title="Link to ASPR contact section"              
              >
                Contact Us
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://public4.pagefreezer.com/browse/ASPR%20HHS/23-08-2024T07:29/https://aspr.hhs.gov/Pages/Home.aspx"
                aria-label="Link to ASPR Archive"
                title="Link to ASPR Archive"  
                target="_blank"
                rel="noopener"
              >
                ASPR Archive
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/accessibility.aspx"
                aria-label="Link to accessibility page on ASPR site"
                title="Link to accessibility page on ASPR site"  
              >
                Accessibility
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/privacy.aspx"
                aria-label="Link to privacy page on ASPR site"
                title="Link to privacy page on ASPR site"                 
              >
                Privacy Policies
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://aspr.hhs.gov/Pages/disclaimer.aspx"
                aria-label="Link to disclaimer page on ASPR site"
                title="Link to disclaimer page on ASPR site"   
              >
                Disclaimer
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/web/policies-and-standards/hhs-web-policies/plugins/index.html"
                aria-label="Link to plugins page on HHS site"
                title="Link to plugins page on ASPR site" 
                target="_blank"
                rel="noopener"
              >
                HHS Viewers &amp; Players
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/open/plain-writing/index.html"
                aria-label="Link to plain writing page on HHS site"
                title="Link to plain writing page on ASPR site" 
                target="_blank"
                rel="noopener"
              >
                HHS Plain Language
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a 
                href="https://www.hhs.gov/foia/index.html" target="_blank" rel="noopener"
                aria-label="Link to FOIA page on HHS site"
                title="Link to FOIA page on ASPR site" 
              >
                FOIA
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html"
                aria-label="Link to vulnerability disclosure policy page on HHS site"
                title="Link to vulnerability disclosure policy page on HHS site" 
                target="_blank"
                rel="noopener"
              >
                Vulnerability Disclosure Policy
              </a>
            </StyledFooterLink>
          </StyledFooterLinksContainer>
          <StyledFooterAddressContainer>
            <StyledFooterAddressImageContainer>
              <StyledFooterImageLink 
                href="https://www.hhs.gov/"
                aria-label="Link to HHS homepage"
                title="Link to HHS homepage"
              >
                <StyledFooterAddressImage
                  src={HHSLogoPath}
                  alt="Department of Health & Human Services Logo • USA"
                />
              </StyledFooterImageLink>
            </StyledFooterAddressImageContainer>
            <StyledFooterAddress>
              HHS, Administration for Strategic Preparedness and Response (ASPR)
              <br />
              200 Independence Ave., Washington, DC 20201
            </StyledFooterAddress>
          </StyledFooterAddressContainer>
        </StyledFooterFirstColumn>
        <StyledFooterSecondColumn>
          <StyledFooterImageContainer>
            <StyledFooterImageLink 
              href="https://aspr.hhs.gov/Pages/Home.aspx"
              aria-label="Link to ASPR homepage"
              title="Link to ASPR homepage"
            >
              <StyledFooterImage src={whiteLogoPath} alt="ASPR logo" />
            </StyledFooterImageLink>
          </StyledFooterImageContainer>
          <StyledFooterMediaLinksContainer>
            <StyledFooterMediaLink>
              <a 
                href="https://x.com/ASPRgov"
                target="_blank" rel="noopener"
                aria-label="Link to ASPRgov X account"
                title="Link to ASPRgov X account"
              >
                <img src={xAltPath} alt="X AltIcon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://x.com/HHS_ASPR"
                aria-label="Link to HHS_ASPR X account"
                title="Link to HHS_ASPR X account"
                target="_blank" rel="noopener">
                <img src={xPath} alt="X Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.linkedin.com/company/aspr/"
                aria-label="Link to ASPR LinkedIn account"
                title="Link to ASPR LinkedIn account"
                target="_blank" rel="noopener">
                <img src={linkedinPath} alt="LinkedIn Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.facebook.com/ASPRgov/"
                aria-label="Link to ASPRgov Facebook account"
                title="Link to ASPRgov Facebook account"
                target="_blank" rel="noopener">
                <img src={fbPath} alt="Facebook Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a 
                href="https://www.instagram.com/asprgov"
                aria-label="Link to ASPRgov Instagram account"
                title="Link to ASPRgov Instagram account"
                target="_blank" rel="noopener"
              >
                <img src={igPath} alt="Instagram Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.threads.net/@asprgov"
                aria-label="Link to ASPRgov Threads account"
                title="Link to ASPRgov Threads account"
                target="_blank" rel="noopener"
              >
                <img src={threadsPath} alt="Threads Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.flickr.com/photos/asprgov"
                aria-label="Link to ASPRgov Flickr account"
                title="Link to ASPRgov Flickr account"
                target="_blank" rel="noopener"
              >
                <img src={flickrPath} alt="Flickr Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://www.youtube.com/c/ASPRgov"
                aria-label="Link to ASPRgov YouTube account"
                title="Link to ASPRgov YouTube account"
                target="_blank" rel="noopener"
              >
                <img src={ytPath} alt="YouTube Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a
                href="https://cloud.connect.hhs.gov/PHE"
                aria-label="Link to ASPR latest news sign-up page"
                title="Link to ASPR latest news sign-up page"
                target="_blank" rel="noopener"
              >
                <img src={emailPath} alt="Email Icon" />
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
