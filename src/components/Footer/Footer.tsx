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
              <a href="https://aspr.hhs.gov/Pages/Home.aspx">Home</a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a href="https://aspr.hhs.gov/Pages/Contact-Us---Footer.aspx">
                Contact Us
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://public4.pagefreezer.com/browse/ASPR%20HHS/23-08-2024T07:29/https://aspr.hhs.gov/Pages/Home.aspx"
                target="_blank"
              >
                ASPR Archive
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a href="https://aspr.hhs.gov/Pages/accessibility.aspx">
                Accessibility
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a href="https://aspr.hhs.gov/Pages/privacy.aspx">
                Privacy Policies
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a href="https://aspr.hhs.gov/Pages/disclaimer.aspx">
                Disclaimer
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/web/policies-and-standards/hhs-web-policies/plugins/index.html"
                target="_blank"
              >
                HHS Viewers &amp; Players
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/open/plain-writing/index.html"
                target="_blank"
              >
                HHS Plain Language
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a href="https://www.hhs.gov/foia/index.html" target="_blank">
                FOIA
              </a>
            </StyledFooterLink>
            <StyledFooterLink>|</StyledFooterLink>
            <StyledFooterLink>
              <a
                href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html"
                target="_blank"
              >
                Vulnerability Disclosure Policy
              </a>
            </StyledFooterLink>
          </StyledFooterLinksContainer>
          <StyledFooterAddressContainer>
            <StyledFooterAddressImageContainer>
              <StyledFooterImageLink href="https://www.hhs.gov/">
                <StyledFooterAddressImage
                  src={HHSLogoPath}
                  alt="Department of Health and Human Services Logo"
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
            <StyledFooterImageLink href="https://aspr.hhs.gov/Pages/Home.aspx">
              <StyledFooterImage src={whiteLogoPath} alt="ASPR logo" />
            </StyledFooterImageLink>
          </StyledFooterImageContainer>
          <StyledFooterMediaLinksContainer>
            <StyledFooterMediaLink>
              <a href="https://x.com/ASPRgov" target="_blank">
                <img src={xAltPath} alt="X AltIcon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://x.com/HHS_ASPR" target="_blank">
                <img src={xPath} alt="X Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://www.linkedin.com/company/aspr/" target="_blank">
                <img src={linkedinPath} alt="LinkedIn Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://www.facebook.com/ASPRgov/" target="_blank">
                <img src={fbPath} alt="Facebook Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://www.instagram.com/asprgov" target="_blank">
                <img src={igPath} alt="Instagram Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://www.threads.net/@asprgov" target="_blank">
                <img src={threadsPath} alt="Threads Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://www.flickr.com/photos/asprgov" target="_blank">
                <img src={flickrPath} alt="Flickr Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://www.youtube.com/c/ASPRgov" target="_blank">
                <img src={ytPath} alt="YouTube Icon" />
              </a>
            </StyledFooterMediaLink>
            <StyledFooterMediaLink>
              <a href="https://cloud.connect.hhs.gov/PHE" target="_blank">
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
