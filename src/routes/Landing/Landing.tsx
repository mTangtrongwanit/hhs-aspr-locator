/**
 * Landing Page
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { Link } from "react-router-dom";

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation } from "react-i18next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
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
    <StyledLandingContent>
      {
        //#region First Row
      }

      <StyledSearchContainer>
        <h2>{t("Landing.Search Container Heading")}</h2>
        <p>{t("Landing.Search Container Description")}</p>
        <p>
          This content is not fully Section 508 conformant. If you need
          assistance, please contact&nbsp;
          <a href="mailto:gis@hhs.gov">gis@hhs.gov</a>.{" "}
          <a href="https://healthdata.gov/ASPR/COVID-19-Treatments/xkzp-zhs7/data_preview">
            Tabular access to the data is also available.
          </a>
        </p>
        <p>
          This website includes locations participating in the U.S.
          Government&nbsp;
          <a href="https://paxlovid.iassist.com/">Patient Assistance Program</a>
          &nbsp; operated by Pfizer, offering free Paxlovid for eligible
          patients. Other assistance programs are available for&nbsp;
          <a href="https://aspr.hhs.gov/COVID-19/Treatments/Pages/Possible-Treatment-Options-for-COVID19.aspx#oral-antivirals">
            COVID-19
          </a>{" "}
          {/* TODO: ADD THIS ID */}
          and <a href="/#faq-flu">flu.</a>
        </p>
        <StyledRow>
          <Search />
          <DropdownSingleSelect type={"illness"} />
        </StyledRow>
        <Link
          to="/locations"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <button className="hhs-secondary-button">
            {t("Landing.View Locations Button Label")}
          </button>
        </Link>
      </StyledSearchContainer>
      <StyledDecorativeImage></StyledDecorativeImage>

      {
        //#endregion First Row
      }

      <StyledContextRow>
        <h2 className="visually-hidden">
          {t("Landing.Context Container Screenreader Heading")}
        </h2>
        <p>
          Locations participating in the U.S. Government&nbsp;
          <a href="TODO">Patient Assistance Program</a> operated by Pfizer
          offering free Paxlovid for eligible patients are included on this
          website. Eligible patients with a Paxlovid prescription can enroll in
          the program at <a href="TODO">https://paxlovid.iassist.com.</a>&nbsp;
          Other <a href="TODO">assistance programs</a> are available for
          Paxlovid, Lagevrio, and Veklury.
        </p>
        {
          //#region Accordion
        }
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          {
            //#region Drawer 1
          }
          <Accordion.Item className="AccordionItem" value="item-1">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                Which outpatient medications available to treat COVID-19 and flu
                appear on this locator?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  The COVID-19 and flu treatment locator can be used to help you
                  find FDA approved or authorized treatments for these diseases.{" "}
                </p>
                <StyledFAQTitle>COVID-19</StyledFAQTitle>
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

                <StyledFAQTitle>Influenza (Flu)</StyledFAQTitle>
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
              <Accordion.Trigger className={"AccordionTrigger"}>
                What are antivirals?
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
              <Accordion.Trigger className={"AccordionTrigger"}>
                Who can take the outpatient COVID-19 medications listed on this
                website?
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
              <Accordion.Trigger className={"AccordionTrigger"}>
                Who can take the outpatient flu medications listed on this
                website?
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
                         This medication is given by a healthcare provider as a
                        single dose through an intravenous infusion{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    o Zanamivir (Relenza): Adults and children 7 years and
                    older.
                    <ul>
                      <li>
                         Zanamivir is administered using an inhaler device and
                        is not recommended for people with breathing problems
                        like asthma or COPD or those with a history of allergy
                        to lactose or milk protein.{" "}
                      </li>
                      <li>
                         Zanamivir is taken twice daily using an inhaler device
                        for 5 days.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    o Baloxavir (Xofluza): Otherwise healthy children 5 years
                    and older for acute uncomplicated influenza, and adults and
                    children 12 years and older who are at high risk of
                    developing influenza-related complications.
                    <ul>
                      <li> Baloxavir is taken by mouth as a single dose</li>
                      <li>
                         Baloxavir is not recommended for treatment of flu in
                        pregnant or breastfeeding people, severely
                        immunosuppressed persons, or in outpatients with
                        complicated or progressive illness because there is no
                        information about use of baloxavir in these patients.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    o Please see{" "}
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
              <Accordion.Trigger className={"AccordionTrigger"}>
                Can children take the antiviral medications listed on this
                website?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 5
          }
          {
            //#region Drawer 6
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                Can pregnant people take flu and COVID-19 antiviral medications?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 6
          }
          {
            //#region Drawer 7
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 7
          }
          {
            //#region Drawer 8
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 8
          }
          {
            //#region Drawer 9
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 9
          }
          {
            //#region Drawer 10
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 10
          }
          {
            //#region Drawer 11
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 11
          }
          {
            //#region Drawer 12
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 12
          }
          {
            //#region Drawer 13
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 13
          }
          {
            //#region Drawer 14
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                2. What are antivirals?
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText"></div>
            </Accordion.Content>
          </Accordion.Item>
          {
            //#endregion Drawer 14
          }
          {
            //#region Disclaimer
          }
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className={"AccordionTrigger"}>
                Disclaimer
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                <p>
                  Additional information on COVID-19 treatments can be found on
                  the <a href="TODO">ASPR COVID-19 Treatments page.</a>&nbsp;
                  For questions regarding this site, contact 1-800-232-0233 (TTY
                  888-720-7489). To learn more about COVID-19 testing, including
                  how to order free test kits, visit{" "}
                  <a href="TODO">COVID.gov.</a>
                </p>
                <p className="ital">
                  * This content is not fully Section 508 conformant. If you
                  need assistance, please contact{" "}
                  <a href="TODO">gis@hhs.gov.</a>{" "}
                  <a href="TODO">
                    Tabular access to the data is also available.
                  </a>
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
