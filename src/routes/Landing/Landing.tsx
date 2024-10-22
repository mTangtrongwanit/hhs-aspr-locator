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
          aria-label="View Locations based on entered location and selected treatment choice"
          title="View Locations based on entered location and selected treatment choice"
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
            aria-label="Email link: gis@hhs.gov"
            title="Email link: gis@hhs.gov"
          >
            gis@hhs.gov
          </a>
          .{" "}
          <a
            href="https://healthdata.gov/ASPR/COVID-19-Treatments/xkzp-zhs7/data_preview"
            aria-label="Link to tabular access to the data"
            title="Link to tabular access to the data"
          >
            Tabular access to the data is also available.
          </a>
        </p>
        <p>
          This website includes locations participating in the U.S.
          Government&nbsp;
          <a
            href="https://paxlovid.iassist.com/"
            aria-label="Link to patient assistance program"
            title="Link to patient assistance program"
          >
            Patient Assistance Program
          </a>
          &nbsp; operated by Pfizer, offering free Paxlovid for eligible
          patients. Other assistance programs are available for&nbsp;
          <a
            href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx#oral-antivirals"
            aria-label="Link to COVID-19 assistance program"
            title="Link to COVID-19 assistance program"
          >
            COVID-19
          </a>{" "}
          and
          <a
            href="#faq-flu"
            aria-label="Link to flu assistance program"
            title="Link to flu assistance program"
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 1.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 1.Heading")
                }
              >
                {t("Landing.Accordion Item 1.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  The COVID-19 and flu treatment locator can be used to help you
                  find FDA approved or authorized treatments for these diseases.{" "}
                </p>
                <strong>COVID-19</strong>
                <ul>
                  <li>
                    Three outpatient treatments are currently authorized or
                    approved by the U.S. Food and Drug Administration (FDA) to
                    help reduce the risk of hospitalization or death for
                    patients with mild to moderate COVID-19:
                    <ul>
                      <li>Oral Paxlovid (nirmatrelvir with ritonavir)</li>
                      <li>Oral Lagevrio (molnupiravir)</li>
                      <li>Intravenous outpatient Veklury (remdesivir)</li>
                    </ul>
                  </li>
                  <li>
                    Visit{" "}
                    <a href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx">
                      Treatment Options for COVID-19
                    </a>{" "}
                    to learn more about these medications.
                  </li>
                  <li>
                    All COVID treatments listed on this site require a
                    prescription from a health care provider and are most
                    effective if you take them as soon as you get sick, and
                    ideally within 5 days of developing symptoms.
                  </li>
                </ul>

                <strong>Influenza (Flu)</strong>
                <ul>
                  <li>
                    The following outpatient treatments are currently approved
                    by FDA and recommended by CDC to treat flu:
                    <ul>
                      <li>
                        Oral oseltamivir (available as a generic version or
                        under the trade name Tamiflu),
                      </li>
                      <li>Oral baloxavir (Xofluza) </li>
                      <li>Inhaled zanamivir (Relenza) </li>
                      <li>Intravenous peramivir (Rapivab)</li>
                    </ul>
                  </li>
                  <li>
                    Please visit{" "}
                    <a href="https://www.cdc.gov/flu/treatment/whatyoushould.htm">
                      What are Flu Antiviral Drugs | CDC
                    </a>{" "}
                    to learn more about treatments for flu. Healthcare providers
                    can visit CDC’s{" "}
                    <a href="https://www.cdc.gov/flu/professionals/antivirals/summary-clinicians.htm">
                      Influenza Antiviral Medications: Summary for Clinicians.{" "}
                    </a>
                  </li>
                  <li>
                    All flu treatments listed on this site require a
                    prescription from a health care provider and are most
                    effective if you take them as soon as you get sick, and
                    ideally within 48 hours of developing symptoms.
                  </li>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 2.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                    Antiviral drugs are prescription medicines that fight
                    against the specific virus they are prescribed for –
                    COVID-19 antivirals work to treat COVID-19, and flu
                    antivirals work to treat influenza. Antiviral drugs are
                    different from antibiotics, which fight against bacterial
                    infections, and come in different forms:
                    <ul>
                      <li>
                        Oral antiviral drugs, are taken by mouth (in a pill or
                        liquid suspension form)
                      </li>
                      <li>
                        Inhaled antiviral drugs are breathed in by mouth as
                        directed (e.g., can be administered by an inhaler).
                      </li>
                      <li>
                        Intravenous antiviral drugs are given directly into a
                        vein with a needle or a tube.
                      </li>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 3.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                  <li>
                    Paxlovid: Adults and children (12 years of age and older,
                    weighing at least 88 pounds [40 kg]), who are at high risk
                    for getting very sick from COVID-19 and who have mild to
                    moderate symptoms.
                  </li>
                  <li>
                    Lagevrio: Adults 18 years and older, who are at high risk
                    for getting very sick from COVID-19, have mild to moderate
                    symptoms, and do not have access to other COVID-19
                    outpatient treatment options or other treatment options are
                    not appropriate for them.
                  </li>
                  <li>
                    Veklury: In the outpatient setting, adults and children (28{" "}
                    <strong>days</strong> of age or older and weighing at least
                    7 pounds [3 kg]), who have mild to moderate symptoms of
                    COVID-19 and are at high risk for getting very sick from
                    COVID-19.
                    <ul>
                      <li>
                        This medication is given through an intravenous infusion
                        and may be given in the outpatient (not staying in the
                        hospital) setting over three consecutive visits or in
                        the inpatient (staying in the hospital) setting. This
                        website lists only outpatient locations where Veklury is
                        available.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Paxlovid and Lagevrio must be taken within 5 days of symptom
                    onset to be effective. Veklury outpatient administration is
                    within 7 days of symptom onset.
                  </li>
                  <li>
                    To learn more about indications for these products, see{" "}
                    <a href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx">
                      Treatment Options for COVID-19.
                    </a>{" "}
                    Healthcare providers can refer to the{" "}
                    <a href="https://aspr.hhs.gov/COVID-19-Therapeutics/Side-by-Side-Overview/Pages/default.aspx">
                      Side-by-Side Overview of Therapeutics Authorized or
                      Approved for the Treatment of Mild to Moderate COVID-19.
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 4")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                    Oseltamivir (including brand name Tamiflu): Recommended for
                    adults and children of all ages.
                    <ul>
                      <li>
                        {" "}
                        It is the preferred treatment for treatment of influenza
                        in pregnant women, hospitalized patients, and
                        outpatients with severe, complicated, or progressive
                        illness.{" "}
                      </li>
                      <li>
                        {" "}
                        Oseltamivir is taken twice daily by mouth for 5 days.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Peramivir (Rapivab): Otherwise healthy adults and children 6
                    months and older.
                    <ul>
                      <li>
                        This medication is given by a healthcare provider as a
                        single dose through an intravenous infusion{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Zanamivir (Relenza): Adults and children 7 years and older.
                    <ul>
                      <li>
                        Zanamivir is administered using an inhaler device and is
                        not recommended for people with breathing problems like
                        asthma or COPD or those with a history of allergy to
                        lactose or milk protein.{" "}
                      </li>
                      <li>
                        Zanamivir is taken twice daily using an inhaler device
                        for 5 days.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Baloxavir (Xofluza): Otherwise healthy children 5 years and
                    older for acute uncomplicated influenza, and adults and
                    children 12 years and older who are at high risk of
                    developing influenza-related complications.
                    <ul>
                      <li>Baloxavir is taken by mouth as a single dose</li>
                      <li>
                        Baloxavir is not recommended for treatment of flu in
                        pregnant or breastfeeding people, severely
                        immunosuppressed persons, or in outpatients with
                        complicated or progressive illness because there is no
                        information about use of baloxavir in these patients.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Please see{" "}
                    <a href="https://www.cdc.gov/flu/treatment/whatyoushould.htm">
                      What are Flu Antiviral Drugs | CDC
                    </a>{" "}
                    for more information on treatment of flu. Healthcare
                    providers can visit CDC’s{" "}
                    <a href="https://www.cdc.gov/flu/professionals/antivirals/summary-clinicians.htm">
                      Influenza Antiviral Medications: Summary for Clinicians.
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 5.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 5.Heading")
                }
              >
                {t("Landing.Accordion Item 5.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <strong>COVID-19</strong>
                <ul>
                  <li>
                    Paxlovid is authorized by the FDA for emergency use in
                    children 12 years or older weighing at least 88 pounds [40
                    kg], who are at high risk for getting very sick from
                    COVID-19 and who have mild to moderate symptoms.
                  </li>
                  <li>
                    Veklury is FDA-approved for children 28 days of age or older
                    and weighing at least 7 pounds [3 kg], who have mild to
                    moderate symptoms of COVID-19 and are at high risk for
                    getting very sick from COVID-19.
                    <ul>
                      <li>
                        This medication is given through an intravenous infusion
                        and may be given in the outpatient (not staying in the
                        hospital) or inpatient (staying in the hospital)
                        setting. This website lists only outpatient locations
                        where Veklury is available.
                      </li>
                    </ul>
                  </li>
                </ul>

                <strong>Influenza (Flu)</strong>
                <ul>
                  <li>
                    Oral oseltamivir is approved by the FDA for treatment of
                    acute uncomplicated influenza within 2 days of illness onset
                    in people 14 days of age and older. Although not part of the
                    FDA-approved indications, use of oral oseltamivir for
                    treatment of influenza in infants less than 14 days old is
                    recommended by the CDC. Oseltamivir is available as an oral
                    suspension for children.
                    <ul>
                      <li>
                        If your health care provider prescribes oseltamivir
                        capsules for your child and your child cannot swallow
                        capsules, please refer to{" "}
                        <a href="https://www.cdc.gov/flu/highrisk/mixing-oseltamivir-qa.htm">
                          CDC guidance
                        </a>{" "}
                        on opening and mixing oseltamivir capsules with liquids.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Zanamivir is approved for early treatment of flu in people 7
                    years and older, though it is not recommended for use in
                    children with underlying respiratory disease, including
                    asthma and other chronic lung diseases, and in patients with
                    milk protein allergy.
                  </li>
                  <li>
                    Peramivir is approved for early treatment of flu in
                    otherwise healthy patients 6 months and older.
                  </li>
                  <li>
                    Baloxavir is available in a single dose tablet for early
                    treatment of flu in otherwise healthy children aged 5 years
                    and older, and in children 12 years and older who are at
                    higher risk of developing flu-related complications.{" "}
                  </li>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 6.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 6.Heading")
                }
              >
                {t("Landing.Accordion Item 6.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <strong>COVID-19:</strong>
                <ul>
                  <li>
                    Pregnant and recently pregnant people (at least 6 weeks
                    following the end of pregnancy) are at increased risk of
                    severe illness from COVID-19.
                  </li>
                  <li>
                    Paxlovid (ritonavir with nirmatrelvir) is the preferred
                    treatment option for pregnant and recently pregnant patients
                    with COVID-19.{" "}
                  </li>
                  <li>
                    Lagevrio (molnupiravir) is not recommended for use during
                    pregnancy because of risk it may cause fetal harm. Prior to
                    initiating treatment with Lagevrio, health care providers
                    should assess whether an individual of childbearing
                    potential is pregnant, if clinically indicated.
                    Breastfeeding is not recommended during treatment with
                    Lagevrio and for 4 days after final dose.
                  </li>
                  <li>
                    Healthcare providers can refer to the{" "}
                    <a href="https://aspr.hhs.gov/COVID-19-Therapeutics/Side-by-Side-Overview/Pages/default.aspx">
                      Side-by-Side Overview of Therapeutics Authorized or
                      Approved for the Treatment of Mild to Moderate COVID-19.
                    </a>
                  </li>
                </ul>
                <strong>Influenza (Flu):</strong>
                <ul>
                  <li>
                    Treatment with antiviral medications for flu is recommended
                    for pregnant people or people who are up to 2 weeks
                    postpartum (including following pregnancy loss) with
                    suspected or confirmed influenza of any severity and can be
                    taken during any trimester of pregnancy.
                  </li>
                  <li>
                    Oral oseltamivir is the preferred treatment options for
                    pregnant people with flu because it has the most studies
                    available to suggest that it is safe and beneficial.
                  </li>
                  <li>
                    Baloxavir is not recommended for pregnant or post-partum
                    people or while breastfeeding, as there are no available
                    efficacy or safety data.
                  </li>
                  <li>
                    For more information on the treatment of flu during
                    pregnancy, healthcare providers can visit{" "}
                    <a href="https://www.cdc.gov/flu/professionals/antivirals/avrec_ob.htm#:~:text=For%20treatment%20of%20pregnant%20people,with%20oseltamivir%20is%205%20days.">
                      Recommendations for Obstetric Health Care Providers
                      Related to Use of Antiviral Medications in the Treatment
                      and Prevention of Influenza.
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 7.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                  <li>
                    Medications to treat COVID-19 (Paxlovid, Lagevrio, Veklury)
                    and flu (oseltamivir, zanamivir, peramivir, baloxavir) must
                    be prescribed by a health care provider and should be
                    started as soon as possible after diagnosis to be effective.
                  </li>
                  <li>
                    Talk to your health care professional about available
                    treatment options if you have symptoms consistent with
                    COVID-19 or flu.{" "}
                  </li>
                  <li>
                    Certain locations listed on this locator may provide
                    prescribing services to patients who do not already have a
                    prescription.{" "}
                  </li>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 8.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                  <li>
                    All medications listed on this website are approved or
                    authorized by FDA as safe and effective when used
                    appropriately.
                  </li>
                  <li>
                    If you have COVID-19 and are more likely to get very sick,
                    treatments are available that can reduce your chances of
                    being hospitalized or dying from the disease.{" "}
                  </li>
                  <li>
                    Early flu antiviral treatment can shorten the duration of
                    fever and illness and may reduce the risk of some
                    complications from influenza.{" "}
                  </li>
                  <li>
                    Some treatments might have side effects or interact with
                    other medications you are taking. Ask a health care provider
                    if medications to treat COVID-19 or influenza are right for
                    you.
                  </li>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 9.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 9.Heading")
                }
              >
                {t("Landing.Accordion Item 9.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <strong>COVID-19:</strong>
                <ul>
                  <li>
                    For Paxlovid:
                    <ul>
                      <li>
                        Medicare, Medicaid, and uninsured patients can receive
                        Paxlovid at no charge through December 2024 through the
                        U.S. Government (USG) Patient Assistance Program (PAP)
                        operated by Pfizer. This includes all patients who are
                        publicly insured through Medicare (with or without Part
                        D, Part B, or Part C and inclusive of Medicare
                        Advantage), Medicaid/Children’s Health Insurance
                        Program, TRICARE, and patients insured through the
                        Department of Veterans Affairs Community Care Network.
                        More information can be found on the{" "}
                        <a href="https://aspr.hhs.gov/COVID-19/Therapeutics/updates/Pages/Commercialization-FAQ-Nov2023.aspx#collapse001">
                          COVID-19 therapeutics website.
                        </a>{" "}
                        <a href="https://www.paxlovid.com/paxcess">
                          Learn more about this program
                        </a>{" "}
                        or <a href="https://paxlovid.iassist.com/">enroll.</a>
                      </li>
                      <li>
                        You can search for locations participating in this
                        Paxlovid PAP using this locator tool by filtering for
                        PAP sites.
                      </li>
                      <li>
                        Concurrently, Pfizer is operating a Paxlovid Co-Pay
                        Savings Program for eligible privately (commercially)
                        insured patients.{" "}
                        <a href="https://www.paxlovid.com/paxcess">Patients</a>{" "}
                        and{" "}
                        <a href="https://paxlovid.pfizerpro.com/">
                          healthcare providers
                        </a>{" "}
                        can download a co-pay savings card.
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    For Lagevrio:
                    <ul>
                      <li>
                        The{" "}
                        <a href="https://www.merckhelps.com/LAGEVRIO">
                          Merck Patient Assistance Program
                        </a>{" "}
                        (a 501c3 non-profit organization) will provide Lagevrio
                        free of charge to patients who meet eligibility criteria
                        and who, without assistance, could not otherwise afford
                        the product.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    For Veklury:
                    <ul>
                      <li>
                        Please contact Gilead's Advancing Access program to
                        learn more about access to Veklury in the outpatient
                        setting and{" "}
                        <a href="https://www.veklury.com/patient-support/">
                          financial support.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Note: This response does not address whether these COVID-19
                    treatments are covered by Medicare and Medicaid generally.
                    More information is available for{" "}
                    <a href="https://www.cms.gov/files/document/commercialcovid19oralantiviralsmemofinal.pdf">
                      Medicare
                    </a>{" "}
                    and{" "}
                    <a href="https://www.medicaid.gov/state-overviews/index.html">
                      Medicaid
                    </a>{" "}
                    coverage.
                  </li>
                </ul>
                <strong>Influenza (Flu):</strong>
                <ul>
                  <li>
                    For Zanamivir (Relenza):
                    <ul>
                      <li>
                        <a href="https://www.gskforyou.com/">GSK for You</a> is
                        a program committed to assisting eligible patients
                        access to medications. They offer programs for patients
                        who meet income and other eligibility requirements.
                      </li>
                    </ul>
                  </li>
                  <li>
                    For Tamiflu and Baloxavir (Xofluza):
                    <ul>
                      <li>
                        <a href="https://www.gene.com/patients/patient-foundation/patient-foundation-faqs">
                          The Genentech Patient Foundation
                        </a>{" "}
                        gives free Genentech medicine to people who do not have
                        insurance coverage or who have financial concerns and
                        meet eligibility criteria.
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 10.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                  Throughout the COVID-19 pandemic, the federal government
                  granted Emergency Use Authorization (EUA) for therapeutics to
                  help combat COVID-19, including certain monoclonal antibodies.
                  Because the U.S. Food and Drug Administration (FDA) does not
                  currently authorize any monoclonal antibody therapeutics to
                  treat COVID-19 in the United States, no monoclonal antibody
                  products are listed on this locator. Pemivibart (PEMGARDA), a
                  monoclonal antibody to prevent COVID-19 in certain patients,
                  is currently{" "}
                  <a href="https://www.fda.gov/media/177069/download">
                    authorized by the FDA
                  </a>{" "}
                  for emergency use. Infusion sites offering this medication can
                  be found using the{" "}
                  <a href="https://www.pemgarda.com/patient/infusion-center-locator/">
                    PEMGARDA infusion center locator tool.
                  </a>{" "}
                  There are no monoclonal antibodies available to treat flu.
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 11.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 11.Heading")
                }
              >
                {t("Landing.Accordion Item 11.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  There may be locations that offer outpatient COVID-19 or
                  influenza medications and are not listed on this website. The
                  locations displayed on this website have either self-attested
                  they have inventory of COVID-19 or influenza antiviral
                  medications within at least the last two months and/or
                  reported participation in the US Government Paxlovid Patient
                  Assistance Program operated by Pfizer.
                </p>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 12.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 12.Heading")
                }
              >
                {t("Landing.Accordion Item 12.Heading")}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  Where indicated, the locations listed on this website may:
                </p>
                <ul>
                  <li>
                    Have remaining free Paxlovid and/or Lagevrio distributed by
                    the U.S. Department of Health and Human Services{" "}
                  </li>
                  <li>
                    Participate in the Paxlovid Patient Assistance Program,
                    providing free Paxlovid to publicly insured (Medicare,
                    Medicaid, etc.) and uninsured patients
                  </li>
                  <li>
                    Offer prescribing services (including telehealth) or home
                    delivery of medicines
                  </li>
                  <li>
                    Offer no-cost COVID-19 testing for eligible uninsured people
                    (Increasing Community Access to Testing [ICATT]
                    participating site){" "}
                  </li>
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 13.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                  {" "}
                  If you would like more information about being added to the
                  Treatments Locator, please email{" "}
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 14.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
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
                  Retail pharmacies can learn more about participating in the
                  Paxlovid Patient Assistance Program by{" "}
                  <a href="mailto:PharmacyNetworkContract102101@assistrx.com">
                    contacting the program vendor
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
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 15.Heading")
                }
                title={
                  t("Landing.Accessible FAQ Intro") +
                  t("Landing.Accordion Item 15.Heading")
                }
              >
                {t("Landing.Accordion Item 15.Heading")}

                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  Outpatient COVID-19 and influenza (flu) medications may be
                  available at additional locations not listed on this website.
                  The locations displayed have either self-attested they have
                  inventory of COVID-19 or influenza antiviral medications
                  within at least the last two months and/or reported
                  participation in the Paxlovid Patient Assistance Program.
                </p>
                <p>
                  All therapeutics identified in the locator not approved by the
                  FDA must be used in alignment with the terms of the respective
                  product’s Emergency Use Authorization. Visit the{" "}
                  <a href="https://aspr.hhs.gov/COVID-19/treatments/Pages/default.aspx">
                    ASPR COVID-19 Treatments page
                  </a>
                  for more information on all COVID-19 treatment options and{" "}
                  <a href="https://www.cdc.gov/flu/treatment/index.html">
                    CDC’s Flu Treatment page
                  </a>{" "}
                  for more information on influenza treatment options.
                </p>
                <p>
                  This website identifies sites that have commercially purchased
                  inventory of COVID-19 and influenza treatments and, in some
                  cases, may identify sites that have remaining, no-cost U.S.
                  government distributed supply. Some sites may charge for
                  services which may or may not be covered by insurance. Some
                  sites may offer prescribing services for patients, including
                  telehealth services. This website is intended for
                  informational purposes only and does not serve as an
                  endorsement or recommendation for use of any of the locations
                  listed on the sites.
                </p>
                <p>
                  For questions regarding this site, contact{" "}
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
