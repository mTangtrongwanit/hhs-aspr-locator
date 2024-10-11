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
  type: "language" | "sort" | "illness";
}
// #endregion ====================== TYPES =====================================
// #region =================== EXPORTED COMPONENT ==============================
const DropdownSingleSelect = ({ type }: DropdownSingleSelectProps) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { i18n } = useTranslation();
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
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [illnesses, setIllnesses] = useState<string[]>([]);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // Get the illness options from treatmentIllnessLookup
  useEffect(() => {
    if (!(JSON.stringify(treatmentIllnessLookup) === "{}")) {
      console.log(treatmentIllnessLookup);
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
      : illnesses.map((illness) => ({ label: illness, value: illness }));

  const selectedValue =
    type === "language"
      ? selectedLanguage
      : type === "sort"
      ? selectedSort.label
      : selectedIllness.label;

  const handleChange =
    type === "language"
      ? handleLanguageChange
      : type === "sort"
      ? handleSortChange
      : handleIllnessChange;

  return (
    <StyledDropdownSelect>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className='DropDownButton'>
          {selectedValue} <ChevronDownIcon />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
          {options.map((item) => (
            <DropdownMenu.Item
              style={
                {
                  "--selected": `${
                    (type === "language" ? i18n.language : selectedValue) ===
                    item.value
                      ? "var(--brand)"
                      : ""
                  }`,
                } as React.CSSProperties
              }
              className='DropDownItem'
              key={item.value}
              onClick={() => handleChange(item)}
            >
              {(type === "language" ? i18n.language : selectedValue) ===
              item.label ? (
                <CheckIcon fontSize={"var(--text-2)"} />
              ) : (
                <span className='placeholder'>&nbsp;</span>
              )}
              {item.label}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className='DropdownMenuArrow' />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </StyledDropdownSelect>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default DropdownSingleSelect;
// #endregion ================ EXPORTED COMPONENT ==============================
