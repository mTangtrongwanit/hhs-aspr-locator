/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------import { useState } from 'react';
import { useEffect, useState } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as PopoverMenu from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";
import { ChevronDownIcon, Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
// import { useTranslation } from "react-i18next";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledPopoverMultiSelect,
  PopoverMenuTitle,
  PopoverCheckBoxContainer,
  PopoverCheckBoxRow,
  StyledCheckboxLabel,
  StyledFilterButtonContainer,
  StyledOutlineButton,
  StyledPrimaryButton,
} from "./PopoverMultiSelect.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { useAppContext } from "@/contexts/AppContext";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== TYPES ============================================
interface PopoverMultiSelectProps {
  type: "medications" | "filter";
}
// #endregion ================== TYPES ==========================================

// #region =================== EXPORTED COMPONENT ==============================
const PopoverMultiSelect = ({ type }: PopoverMultiSelectProps) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const { illnessesTreatments } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [selectedMedications, setSelectedMedications] = useState<string[]>([
    "Oseltamivir",
    "Baloxavir",
  ]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  // TODO: This will come from the single select comonent based on the selected illness
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedIllness, setSelectedIllness] = useState<string>("Flu");
  const [treatments, setTreatments] = useState<string[]>([]);
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
  /** Handle the medication change */
  const handleMedicationChange = (medication: string) => {
    setSelectedMedications((prev) =>
      prev.includes(medication)
        ? prev.filter((item) => item !== medication)
        : [...prev, medication]
    );
  };

  /** Handle the filter change */
  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Effects -----------------------------------
  /** When the illnessesTreatements object is not empty, set the treatments based off the selected illness. */
  useEffect(() => {
    if (!(JSON.stringify(illnessesTreatments) === "{}")) {
      setTreatments(illnessesTreatments[selectedIllness]);
    }
  }, [illnessesTreatments, selectedIllness]);
  // #endregion -------------------- Effects -----------------------------------

  // #region ----------------------- Render ------------------------------------
  const renderContent = () => {
    if (type === "medications") {
      return (
        <>
          <PopoverMenuTitle>Medications</PopoverMenuTitle>
          <PopoverCheckBoxContainer>
            {["Oseltamivir", "Baloxavir"].map((medication) => (
              <PopoverCheckBoxRow key={medication}>
                <Checkbox.Root
                  className='CheckboxRoot'
                  checked={selectedMedications.includes(medication)}
                  onCheckedChange={() => handleMedicationChange(medication)}
                  id={medication}
                >
                  <Checkbox.Indicator className='CheckboxIndicator'>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <StyledCheckboxLabel htmlFor={medication}>
                  {medication}
                </StyledCheckboxLabel>
              </PopoverCheckBoxRow>
            ))}
          </PopoverCheckBoxContainer>
        </>
      );
    } else if (type === "filter") {
      return (
        <>
          <PopoverMenuTitle>Filters</PopoverMenuTitle>
          <PopoverCheckBoxContainer>
            {treatments.length === 0 && ( // If there are no treatments, show a message to the user
              <PopoverCheckBoxRow>
                <StyledCheckboxLabel>No filters available</StyledCheckboxLabel>
              </PopoverCheckBoxRow>
            )}
            {treatments &&
              treatments.length > 0 &&
              treatments.map((filter) => (
                <PopoverCheckBoxRow key={filter}>
                  <Checkbox.Root
                    className='CheckboxRoot'
                    checked={selectedFilters.includes(filter)}
                    onCheckedChange={() => handleFilterChange(filter)}
                    id={filter}
                  >
                    <Checkbox.Indicator className='CheckboxIndicator'>
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <StyledCheckboxLabel htmlFor={filter}>
                    {filter}
                  </StyledCheckboxLabel>
                </PopoverCheckBoxRow>
              ))}
          </PopoverCheckBoxContainer>
        </>
      );
    }
  };

  return (
    <StyledPopoverMultiSelect>
      <PopoverMenu.Root>
        <PopoverMenu.Trigger className='PopoverMenuButton'>
          {type === "medications" ? "Medications" : "Filters"}{" "}
          <ChevronDownIcon />
          <span className='PopOverFilterCount'>
            {type === "medications"
              ? selectedMedications.length
              : selectedFilters.length}
          </span>
        </PopoverMenu.Trigger>
        <PopoverMenu.Portal>
          <PopoverMenu.Content className='PopoverMenuContent' sideOffset={5}>
            {renderContent()}
            <StyledFilterButtonContainer>
              <StyledOutlineButton
                onClick={() =>
                  type === "medications"
                    ? setSelectedMedications([])
                    : setSelectedFilters([])
                }
              >
                Clear All
              </StyledOutlineButton>
              <StyledPrimaryButton>Apply</StyledPrimaryButton>
            </StyledFilterButtonContainer>
            <PopoverMenu.Close className='PopoverMenuClose' aria-label='Close'>
              <Cross2Icon />
            </PopoverMenu.Close>
            <PopoverMenu.Arrow className='PopoverMenuArrow' />
          </PopoverMenu.Content>
        </PopoverMenu.Portal>
      </PopoverMenu.Root>
    </StyledPopoverMultiSelect>
  );
};
// #endregion -------------------- Render ------------------------------------
export default PopoverMultiSelect;
// #endregion ================ EXPORTED COMPONENT ==============================
