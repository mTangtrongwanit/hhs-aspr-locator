/**
 * Landing Page
 */

// #region ========================= IMPORTS ===================================

// #region --------------------------- React -----------------------------------
import { useEffect } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation } from "react-i18next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledLandingContent,
  StyledSearchContainer,
  StyledContextRow,
  StyledFAQTitle,
  StyledRow,
  // StyledViewLocsButton,
  StyledDecorativeImage,
  StyledLink,
} from "./Landing.styles";

import Search from "@/components/Search";
import DropdownSingleSelect from "@/components/DropdownSingleSelect";
import "@/utils/i18n";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const Landing = () => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t } = useTranslation();
  const location = useLocation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  useEffect(() => {
    if (location.hash === "#faq") {
      document.getElementById("faq")?.scrollIntoView();
    }
  }, [location.hash]);

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
    <StyledLandingContent>
      {
        //#region First Row
      }

      <StyledSearchContainer>
        <h2>{t("Landing.Search Container Heading")}</h2>
        <p>{t("Landing.Search Container Description")}</p>

        <StyledRow style={{ flexWrap: "wrap" }}>
          <Search />
          <DropdownSingleSelect
            type={"illness"}
            placeholder={t("Landing.Illness Placeholder")}
          />
        </StyledRow>
        <StyledLink
          to="/locations"
          aria-label={t("Landing.View Locations Button Screenreader Label")}
          title={t("Landing.View Locations Button Screenreader Label")}
        >
          {t("Landing.View Locations Button Label")}
        </StyledLink>
      </StyledSearchContainer>
      <StyledDecorativeImage></StyledDecorativeImage>

      {
        //#endregion First Row
      }

      <StyledContextRow id="faq">
        <h2 className="visually-hidden">
          {t("Landing.Context Container Screenreader Heading")}
        </h2>
        <p>
          This content is not fully Section 508 conformant. If you need
          assistance, please contact&nbsp;
          <a
            href="mailto:gis@hhs.gov"
            aria-label={t("Landing.Email Link Screenreader Label") + " gis@hhs.gov"}
            title={t("Landing.Email Link Screenreader Label") + " gis@hhs.gov"}
          >
            gis@hhs.gov
          </a>
          .{" "}
          <a
            href="https://healthdata.gov/ASPR/COVID-19-Treatments/xkzp-zhs7/data_preview"
            aria-label={t("Landing.Link to Tabular Access Screenreader Label")}
            title={t("Landing.Link to Tabular Access Screenreader Label")}
          >
            {t("Landing.Tabular Access Available")}
          </a>
        </p>
        <p>
        {t("Landing.Website US Government")}&nbsp;
          <a
            href="https://paxlovid.iassist.com/"
            aria-label={t("Landing.Link to PAP Screenreader Label")}
            title={t("Landing.Link to PAP Screenreader Label")}
          >
            {t("Reusable.Patient Assistance Program")}
          </a>
          &nbsp;{t("Landing.PAP Text")}&nbsp;
          <a
            href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx#oral-antivirals"
            aria-label={t("Landing.COVID-19 Assistance Program Link Screenreader Label")}
            title={t("Landing.COVID-19 Assistance Program Link Screenreader Label")}
          >
            COVID-19
          </a>
          {" "}and{" "}
          <a
            href="#faq-flu"
            aria-label={t("Landing.Flu Assistance Program Link Screenreader Label")}
            title={t("Landing.Flu Assistance Program Link Screenreader Label")}
          >
            flu.
          </a>
        </p>
        <StyledFAQTitle>Frequently Asked Questions</StyledFAQTitle>
        {
          //#region Accordion
        }
        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          {
            //#region Drawer 1
          }
          <Accordion.Item className="AccordionItem" value="item-1">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 1.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 1.Heading")
                }
              >
                {t("Landing.Accordion Item 1.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>{t("Landing.Accordion Item 1.Content.Text 1")}</p>
                <strong>{t("Reusable.COVID-19")}</strong>
                <ul>
                  <li>
                    {t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 1.Text 1")}
                    <ul>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Text 1")}</li>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 2.Text 1")}</li>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 3.Text 1")}</li>
                    </ul>
                  </li>
                  <li>
                  {t("Reusable.Visit")}{" "}
                    <a href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx">
                    {t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 2.Anchor 1.Text 1")}{" "}{t("Reusable.COVID-19")}
                    </a>{" "}
                   {t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 2.Text 1")}
                  </li>
                  <li>{t("Landing.Accordion Item 1.Content.Unordered List 1.List Item 3.Text 1")}</li>
                </ul>

                <strong>{t("Reusable.Influenza")}{" "} ({t("Reusable.Flu")})</strong>
                <ul>
                  <li>
                    {t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 1.Text 1")}
                    <ul>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 1.Text 1")}</li>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 2.Text 1")}</li>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 3.Text 1")}</li>
                      <li>{t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 4.Text 1")}</li>
                    </ul>
                  </li>
                  <li>
                    {t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 2.Text 1")}{" "}
                    <a href="https://www.cdc.gov/flu/treatment/whatyoushould.htm">
                      {t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 2.Anchor 1.Text 1")}
                    </a>{" "}
                    {t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 2.Text 2")}{" "}
                    <a href="https://www.cdc.gov/flu/professionals/antivirals/summary-clinicians.htm">
                    {t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 2.Anchor 2.Text 1")}{" "}
                    </a>
                  </li>
                  <li>{t("Landing.Accordion Item 1.Content.Unordered List 2.List Item 3.Text 1")}</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 1
          }
          {
            //#region Drawer 2
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 2.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 2.Heading")
                }
              >
                {t("Landing.Accordion Item 2.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <ul>
                  <li>
                    {t("Landing.Accordion Item 2.Content.List Item 1.Text 1")}
                    <ul>
                      <li>{t("Landing.Accordion Item 2.Content.List Item 1.Unordered List 1.List Item 1")}</li>
                      <li>{t("Landing.Accordion Item 2.Content.List Item 1.Unordered List 1.List Item 2")}</li>
                      <li>{t("Landing.Accordion Item 2.Content.List Item 1.Unordered List 1.List Item 3")}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 2
          }
          {
            //#region Drawer 3
          }
          <Accordion.Item className="AccordionItem" value="item-3">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 3.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 3.Heading")
                }
              >
                {t("Landing.Accordion Item 3.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <ul>
                  <li>{t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 1.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 2.Text 1")}</li>
                  <li>
                    {t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 3.Text 1")}{" "}<strong>{t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 3.Text 2")}</strong>{" "}{t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 3.Text 3")}
                    <ul>
                      <li>{t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 3.Unordered List 1.List Item 1.Text 1")}{" "}</li>
                    </ul>
                  </li>
                  <li>{t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 4.Text 1")}</li>
                  <li>
                  {t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 5.Text 1")}{" "}
                    <a href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx">
                      {t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 5.Anchor 1.Text 1")}
                    </a>{" "}
                    {t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 5.Text 2")}{" "}
                    <a href="https://aspr.hhs.gov/COVID-19-Therapeutics/Side-by-Side-Overview/Pages/default.aspx">
                      {t("Landing.Accordion Item 3.Content.Unordered List 1.List Item 5.Anchor 2.Text 1")}
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 3
          }
          {
            //#region Drawer 4
          }
          <Accordion.Item className="AccordionItem" value="item-4">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 4")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 4")
                }
              >
                {t("Landing.Accordion Item 4.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <ul>
                  <li>
                    {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 1.Text 1")}
                    <ul>
                      <li>
                        {" "}{t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Text 1")}{" "}
                      </li>
                      <li>
                        {" "}{t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 2.Text 1")}{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 2.Text 1")}
                    <ul>
                      <li>{t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 2.Unordered List 1.List Item 1.Text 1")}{" "}</li>
                    </ul>
                  </li>
                  <li>
                  {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 3.Text 1")}
                    <ul>
                      <li>{t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 3.Unordered List 1.List Item 1.Text 1")}{" "}</li>
                      <li>
                      {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 3.Unordered List 1.List Item 2.Text 1")}{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 4.Text 1")}
                    <ul>
                      <li>{t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 4.Unordered List 1.List Item 1.Text 1")}</li>
                      <li>{t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 4.Unordered List 1.List Item 2.Text 1")}{" "}</li>
                    </ul>
                  </li>
                  <li>
                  {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 5.Text 1")}{" "}
                    <a href="https://www.cdc.gov/flu/treatment/whatyoushould.htm">
                      {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 5.Anchor 1.Text 1")}
                    </a>{" "}
                    {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 5.Text 2")}{" "}
                    <a href="https://www.cdc.gov/flu/professionals/antivirals/summary-clinicians.htm">
                      {t("Landing.Accordion Item 4.Content.Unordered List 1.List Item 5.Anchor 2.Text 1")}
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 4
          }
          {
            //#region Drawer 5
          }
          <Accordion.Item className="AccordionItem" value="item-5">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 5.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 5.Heading")
                }
              >
                {t("Landing.Accordion Item 5.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <strong>COVID-19{t("Reusable.COVID-19")}</strong>
                <ul>
                  <li>{t("Landing.Accordion Item 5.Content.Unordered List 1.List Item 1.Text 1")}</li>
                  <li>
                    {t("Landing.Accordion Item 5.Content.Unordered List 1.List Item 2.Text 1")}
                    <ul>
                      <li>
                        {t("Landing.Accordion Item 5.Content.Unordered List 1.List Item 2.Unordered List 1.List Item 1.Text 1")}
                      </li>
                    </ul>
                  </li>
                </ul>

                <strong>{t("Reusable.Influenza")}{" "}({t("Reusable.Flu")})</strong>
                <ul>
                  <li>
                    {t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 1.Text 1")}
                    <ul>
                      <li>
                        {t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 1.Text 1")}{" "}
                        <a href="https://www.cdc.gov/flu/highrisk/mixing-oseltamivir-qa.htm">
                        {t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 1.Anchor 1.Text 1")}
                        </a>{" "}{t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 1.Text 2")}
                      </li>
                    </ul>
                  </li>
                  <li>{t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 2.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 3.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 5.Content.Unordered List 2.List Item 4.Text 1")}{" "}</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 5
          }
          {
            //#region Drawer 6
          }
          <Accordion.Item className="AccordionItem" value="item-6">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 6.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 6.Heading")
                }
              >
                {t("Landing.Accordion Item 6.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <strong>{t("Reusable.COVID-19")}:</strong>
                <ul>
                  <li>{t("Landing.Accordion Item 6.Content.Unordered List 1.List Item 1.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 6.Content.Unordered List 1.List Item 2.Text 1")}{" "}</li>
                  <li>{t("Landing.Accordion Item 6.Content.Unordered List 1.List Item 3.Text 1")}</li>
                  <li>
                    {t("Landing.Accordion Item 6.Content.Unordered List 1.List Item 4.Text 1")}{" "}
                    <a href="https://aspr.hhs.gov/COVID-19-Therapeutics/Side-by-Side-Overview/Pages/default.aspx">
                      {t("Landing.Accordion Item 6.Content.Unordered List 1.List Item 4.Anchor 1.Text 1")}
                    </a>
                  </li>
                </ul>
                <strong>{t("Reusable.Influenza")}{" "}({t("Reusable.Flu")}):</strong>
                <ul>
                  <li>{t("Landing.Accordion Item 6.Content.Unordered List 2.List Item 1.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 6.Content.Unordered List 2.List Item 2.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 6.Content.Unordered List 2.List Item 3.Text 1")}</li>
                  <li>
                  {t("Landing.Accordion Item 6.Content.Unordered List 2.List Item 4.Text 1")}{" "}
                    <a href="https://www.cdc.gov/flu/professionals/antivirals/avrec_ob.htm#:~:text=For%20treatment%20of%20pregnant%20people,with%20oseltamivir%20is%205%20days.">
                    {t("Landing.Accordion Item 6.Content.Unordered List 2.List Item 4.Anchor 1.Text 1")}
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 6
          }
          {
            //#region Drawer 7
          }
          <Accordion.Item className="AccordionItem" value="item-7">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 7.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 7.Heading")
                }
              >
                {t("Landing.Accordion Item 7.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <ul>
                  <li>{t("Landing.Accordion Item 7.Content.Unordered List 1.List Item 1.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 7.Content.Unordered List 1.List Item 2.Text 1")}{" "}</li>
                  <li>{t("Landing.Accordion Item 7.Content.Unordered List 1.List Item 3.Text 1")}{" "}</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 7
          }
          {
            //#region Drawer 8
          }
          <Accordion.Item className="AccordionItem" value="item-8">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 8.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 8.Heading")
                }
              >
                {t("Landing.Accordion Item 8.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <ul>
                  <li>{t("Landing.Accordion Item 8.Content.Unordered List 1.List Item 1.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 8.Content.Unordered List 1.List Item 2.Text 1")}{" "}</li>
                  <li>{t("Landing.Accordion Item 8.Content.Unordered List 1.List Item 3.Text 1")}{" "}</li>
                  <li>{t("Landing.Accordion Item 8.Content.Unordered List 1.List Item 4.Text 1")}</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 8
          }
          {
            //#region Drawer 9
          }
          <Accordion.Item className="AccordionItem" id="faq-flu" value="item-9">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 9.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 9.Heading")
                }
              >
                {t("Landing.Accordion Item 9.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <strong>{t("Reusable.COVID-19")}:</strong>
                <ul>
                  <li>
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Text 1")}:
                    <ul>
                      <li>
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Text 1")}{" "}
                        <a href="https://aspr.hhs.gov/COVID-19/Therapeutics/updates/Pages/Commercialization-FAQ-Nov2023.aspx#collapse001">
                          {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Anchor 1.Text 1")}
                        </a>{" "}
                        <a href="https://www.paxlovid.com/paxcess">
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Anchor 2.Text 1")}
                        </a>{" "}
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Text 2")} <a href="https://paxlovid.iassist.com/">{t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 1.Text 3")}</a>
                      </li>
                      <li>{t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 2.Text 1")}{" "}</li>
                      <li>
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 3.Text 1")}{" "}
                        <a href="https://www.paxlovid.com/paxcess">{t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 3.Anchor 1.Text 1")}</a>{" "}
                          {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 3.Anchor 1.Text 2")}{" "}
                        <a href="https://paxlovid.pfizerpro.com/">
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 3.Anchor 2.Text 1")}
                        </a>{" "}
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 1.Unordered List 1.List Item 3.Text 2")}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 2.Text 1")}:
                    <ul>
                      <li>
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 2.Unordered List 1.List Item 1.Text 1")}{" "}
                        <a href="https://www.merckhelps.com/LAGEVRIO">
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 2.Unordered List 1.List Item 1.Anchor 1.Text 1")}
                        </a>{" "}
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 2.Unordered List 1.List Item 1.Text 2")}{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                  {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 3.Text 1")}:
                    <ul>
                      <li>
                      {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 3.Unordered List 1.List Item 1.Text 1")}{" "}
                        <a href="https://www.veklury.com/patient-support/">
                        {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 3.Unordered List 1.List Item 1.Anchor 1.Text 1")}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 4.Text 1")}{" "}
                    <a href="https://www.cms.gov/files/document/commercialcovid19oralantiviralsmemofinal.pdf">
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 4.Anchor 1.Text 1")}
                    </a>{" "}
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 4.Text 2")}{" "}
                    <a href="https://www.medicaid.gov/state-overviews/index.html">
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 4.Anchor 2.Text 1")}
                    </a>{" "}
                    {t("Landing.Accordion Item 9.Content.Unordered List 1.List Item 4.Text 3")}
                  </li>
                </ul>
                <strong>{t("Reusable.Influenza")}{" "}({t("Reusable.Flu")}):</strong>
                <ul>
                  <li>
                  {t("Landing.Accordion Item 9.Content.Unordered List 2.List Item 1.Text 1")}:
                    <ul>
                      <li>
                        <a href="https://www.gskforyou.com/">{t("Landing.Accordion Item 9.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 1.Anchor 1.Text 1")}</a> 
                        {t("Landing.Accordion Item 9.Content.Unordered List 2.List Item 1.Unordered List 1.List Item 1.Text 1")}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("Landing.Accordion Item 9.Content.Unordered List 2.List Item 2.Text 1")}:
                    <ul>
                      <li>
                        <a href="https://www.gene.com/patients/patient-foundation/patient-foundation-faqs">
                        {t("Landing.Accordion Item 9.Content.Unordered List 2.List Item 2.Unordered List 1.List Item 1.Anchor 1.Text 1")}
                        </a>{" "}{t("Landing.Accordion Item 9.Content.Unordered List 2.List Item 2.Unordered List 1.List Item 1.Text 1")}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 9
          }
          {
            //#region Drawer 10
          }
          <Accordion.Item className="AccordionItem" value="item-10">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 10.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 10.Heading")
                }
              >
                {t("Landing.Accordion Item 10.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  {t("Landing.Accordion Item 10.Content.Text 1")}{" "}
                  <a href="https://www.fda.gov/media/177069/download">
                  {t("Landing.Accordion Item 10.Content.Anchor 1.Text 1")}
                  </a>
                  {" "}{t("Landing.Accordion Item 10.Content.Text 2")}{" "}
                  <a href="https://www.pemgarda.com/patient/infusion-center-locator/">
                  {t("Landing.Accordion Item 10.Content.Anchor 2.Text 1")}
                  </a>{" "}
                  {t("Landing.Accordion Item 10.Content.Text 3")}
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 10
          }
          {
            //#region Drawer 11
          }
          <Accordion.Item className="AccordionItem" value="item-11">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 11.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 11.Heading")
                }
              >
                {t("Landing.Accordion Item 11.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>{t("Landing.Accordion Item 11.Content.Text 1")}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 11
          }
          {
            //#region Drawer 12
          }
          <Accordion.Item className="AccordionItem" value="item-12">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 12.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 12.Heading")
                }
              >
                {t("Landing.Accordion Item 12.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>{t("Landing.Accordion Item 12.Content.Text 1")}:</p>
                <ul>
                  <li>{t("Landing.Accordion Item 12.Content.Unordered List 1.List Item 1.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 12.Content.Unordered List 1.List Item 2.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 12.Content.Unordered List 1.List Item 3.Text 1")}</li>
                  <li>{t("Landing.Accordion Item 12.Content.Unordered List 1.List Item 4.Text 1")}{" "}</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 12
          }
          {
            //#region Drawer 13
          }
          <Accordion.Item className="AccordionItem" value="item-13">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 13.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 13.Heading")
                }
              >
                {t("Landing.Accordion Item 13.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  {" "}{t("Landing.Accordion Item 13.Content.Text 1")}{" "}
                  <a href="mailto:COVID19.therapeutics@hhs.gov">
                    COVID19.therapeutics@hhs.gov.
                  </a>{" "}
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 13
          }
          {
            //#region Drawer 14
          }
          <Accordion.Item className="AccordionItem" value="item-14">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 14.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 14.Heading")
                }
              >
                {t("Landing.Accordion Item 14.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  {t("Landing.Accordion Item 14.Content.Text 1")}{" "}
                  <a href="mailto:PharmacyNetworkContract102101@assistrx.com">
                  {t("Landing.Accordion Item 14.Content.Anchor 1.Text 1")}
                  </a>{" "}
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 14
          }
          {
            //#region Disclaimer
          }
          <Accordion.Item className="AccordionItem" value="item-15">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={"AccordionTrigger"}
                aria-label={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 15.Heading")
                }
                title={
                  t("Landing.Screenreader FAQ Intro") +
                  t("Landing.Accordion Item 15.Heading")
                }
              >
                {t("Landing.Accordion Item 15.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>{t("Landing.Accordion Item 15.Content.Text 1")}</p>
                <p>
                  {t("Landing.Accordion Item 15.Content.Text 2")}{" "}
                  <a href="https://aspr.hhs.gov/COVID-19/treatments/Pages/default.aspx">
                  {t("Landing.Accordion Item 15.Content.Anchor 1.Text 1")}
                  </a>
                  {t("Landing.Accordion Item 15.Content.Text 3")}{" "}
                  <a href="https://www.cdc.gov/flu/treatment/index.html">
                  {t("Landing.Accordion Item 15.Content.Anchor 2.Text 1")}
                  </a>{" "}
                  {t("Landing.Accordion Item 15.Content.Text 4")}
                </p>
                <p>{t("Landing.Accordion Item 15.Content.Text 5")}</p>
                <p>
                {t("Landing.Accordion Item 15.Content.Text 6")}{" "}
                  <strong>1-800-232-0233 (TTY 888-720-7489).</strong>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        {
          //#endregion Accordion
        }
      </StyledContextRow>
    </StyledLandingContent>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Landing;
// #endregion ================ EXPORTED COMPONENT ==============================
