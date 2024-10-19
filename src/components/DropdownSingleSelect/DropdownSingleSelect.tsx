/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------import { useState } from 'react';
import { useState, useEffect } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledDropdownSelect } from "./DropdownSingleSelect.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import config from "@/config/config";
import { useAppContext } from "@/contexts/AppContext";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region ========================= TYPES =====================================
interface DropdownSingleSelectProps {
  placeholder?: string;
  type: "language" | "sort" | "illness";
}
// #endregion ====================== TYPES =====================================
// #region =================== EXPORTED COMPONENT ==============================
const DropdownSingleSelect = ({
  placeholder,
  type,
}: DropdownSingleSelectProps) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { t, i18n } = useTranslation();
  const {
    treatmentIllnessLookup,
    selectedSort,
    setSelectedSort,
    selectedIllness,
    setSelectedIllness,
    setSelectedMedications,
    setSelectedFilters,
    locationsTotals,
    setLocations,
  } = useAppContext();
  const location = useLocation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [illnesses, setIllnesses] = useState<string[]>([]);

  console.log(selectedLanguage);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // Get the illness options from treatmentIllnessLookup
  useEffect(() => {
    if (!(JSON.stringify(treatmentIllnessLookup) === "{}")) {
      const illnesses = Object.keys(treatmentIllnessLookup);
      setIllnesses(illnesses);
    }
  }, [treatmentIllnessLookup]);

  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------

  const handleLanguageChange = (lang: { label: string; value: string }) => {
    i18n.changeLanguage(lang.value);
    setSelectedLanguage(lang.label);
  };

  const handleSortChange = (sort: { label: string; value: string }) => {
    setSelectedSort(sort);
  };

  const handleIllnessChange = (illness: { label: string; value: string }) => {
    setSelectedIllness(illness);
    setSelectedMedications([]);
    setSelectedFilters([]);
    setLocations(locationsTotals);
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  const options =
    type === "language"
      ? config.options.languageOptions
      : type === "sort"
        ? config.options.sortOptions
        : illnesses.map((illness) => ({
            label: t(`Illness.${illness}`, illness),
            value: illness,
          }));

  const selectedOption =
    type === "language"
      ? { label: "Languages", value: i18n.language }
      : type === "sort"
        ? selectedSort
        : selectedIllness;
  const selectedLabel = selectedOption.label;

  const handleChange =
    type === "language"
      ? handleLanguageChange
      : type === "sort"
        ? handleSortChange
        : handleIllnessChange;

  return (
    <StyledDropdownSelect
      className={
        location.pathname === "/" && type !== "language"
          ? "hhs-outline-button-landing-container"
          : ""
      }
    >
      <DropdownMenu.Root>
        {/* <DropdownMenu.Trigger className="hhs-primary-button"> */}
        <DropdownMenu.Trigger
          className={
            location.pathname === "/" && type !== "language"
              ? "hhs-outline-button hhs-outline-button-landing"
              : "hhs-primary-button"
          }
          title={
            placeholder && selectedOption.value === ""
              ? placeholder
              : selectedLabel
          }
          aria-label={
            placeholder && selectedOption.value === ""
              ? placeholder
              : selectedLabel
          }
        >
          {placeholder && selectedOption.value === ""
            ? placeholder
            : selectedLabel}{" "}
          <ChevronDownIcon />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {options.map((item) => (
            <DropdownMenu.Item
              style={
                {
                  "--selected": `${
                    selectedOption.value === item.value ? "var(--brand)" : ""
                  }`,
                } as React.CSSProperties
              }
              className="DropDownItem"
              key={item.value}
              onClick={() => handleChange(item)}
            >
              {selectedOption.value === item.value ? (
                <CheckIcon fontSize={"var(--text-2)"} />
              ) : (
                <span className="placeholder">&nbsp;</span>
              )}
              {item.label}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </StyledDropdownSelect>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default DropdownSingleSelect;
// #endregion ================ EXPORTED COMPONENT ==============================
