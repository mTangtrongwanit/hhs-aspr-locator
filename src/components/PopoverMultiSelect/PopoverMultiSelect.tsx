/**
 * PopoverMultiSelect
 *
 * PopoverMultiSelect component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useEffect, useMemo, useState } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as PopoverMenu from "@radix-ui/react-popover";
import { PopoverClose } from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";
import { ChevronDownIcon, Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
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

import { FilterType } from "../../utils/sharedTypes";

// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { useAppContext } from "@/contexts/AppContext";
import config from "@/config/config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== TYPES ============================================
interface PopoverMultiSelectProps {
  type: "medications" | "filter";
}

interface Filter {
  name: string;
  label: string;
}
// #endregion ================== TYPES ==========================================

// #region =================== EXPORTED COMPONENT ==============================
const PopoverMultiSelect = ({ type }: PopoverMultiSelectProps) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  const {
    selectedFilters,
    selectedIllness,
    selectedMedications,
    setSelectedFilters,
    setSelectedMedications,
    treatmentIllnessLookup,
  } = useAppContext();

  const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [filters, setFilters] = useState<Filter[]>([]);
  const [medications, setMedications] = useState<string[]>([]);
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  const treatments = useMemo(
    () => treatmentIllnessLookup[selectedIllness.value]?.map((t) => t.name),
    [treatmentIllnessLookup, selectedIllness],
  );
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  useEffect(() => {
    setFilters([...selectedFilters]);
  }, [selectedFilters]);

  useEffect(() => {
    setMedications([...selectedMedications]);
  }, [selectedMedications]);
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region --------- Short-Circuit (Empty/Invalid State) ---------------------
  // #endregion ------ Short-Circuit (Empty/Invalid State) ---------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  /** Handle the medication change */
  const handleMedicationChange = (medication: string) => {
    setMedications((prev: string[]) =>
      prev.includes(medication)
        ? prev.filter((item: string) => item !== medication)
        : [...prev, medication],
    );
  };

  /** Handle the filter change */
  const handleFilterChange = (filter: Filter) => {
    setFilters((prev: Filter[]) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  /** Handle the apply click */
  const handleApplyClick = () => {
    if (type === "medications") {
      setSelectedMedications([...medications]);
    } else {
      setSelectedFilters([...filters]);
    }
  };

  /** Handle the clear filters click */
  const handleClearFilters = () => {
    if (type === "medications") {
      setSelectedMedications([]);
    } else {
      setSelectedFilters([]);
    }
  };

  /* note: this logic from https://dev.azure.com/Esri-Professional-Services/HHS-ASPR%20Treatment%20Locator%202.0/_workitems/edit/58802/
    posted by Carlee, John (OS ASPR SIIM) (CTR)
      COVID
    Free/reduced cost
    is_pap: true OR has_USG_product: true
    Free Testing
    is_icatt_site: true
    Prescribing Services
    is_prescribing_svcs_available: true
    Home Delivery
    home_delivery: true
    Flu
    Prescribing Services
    is_prescribing_svcs_available: true
    Home Delivery
    home_delivery: true
    Oseltamivir suspension
    has_oseltamivir_suspension: true
  */

  const filterLookup = {
    is_pap: {
      checker: () => ["COVID"].includes(selectedIllness.value),
      field: config.treatmentData.fields.is_pap,
    },
    is_icatt_site: {
      checker: () => ["COVID"].includes(selectedIllness.value),
      field: config.treatmentData.fields.is_icatt_site,
    },
    home_delivery: {
      checker: () => ["COVID", "Flu"].includes(selectedIllness.value),
      field: config.treatmentData.fields.home_delivery,
    },
    has_oseltamivir_suspension: {
      checker: () => ["Flu"].includes(selectedIllness.value),
      field: config.treatmentData.fields.has_oseltamivir_suspension,
    },

    is_prescribing_svcs_available: {
      checker: () => ["COVID", "Flu"].includes(selectedIllness.value),
      field: config.treatmentData.fields.is_prescribing_svcs_available,
    },
  } as Record<string, { checker: () => boolean; field: FilterType }>;

  // Get the filtered locations from the locations based on filters
  const services = Object.keys(filterLookup)
    ?.map((key) => {
      const filter = filterLookup[key];
      if (filter.checker()) {
        return filter.field;
      }
    })
    .filter((item) => item);
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  const renderContent = () => {
    if (type === "medications") {
      return (
        <>
          {/* button to log locations */}
          <PopoverMenuTitle id="meds-popover-title">Medications</PopoverMenuTitle>
          <PopoverCheckBoxContainer>
            <legend className="visually-hidden" aria-labelledby="meds-popover-title"></legend>
            {treatments !== undefined &&
              treatments.map((medication) => (
                <PopoverCheckBoxRow role="menuitemcheckbox" aria-checked={medications.includes(medication)} aria-label={medication} >
                  <Checkbox.Root
                    className="CheckboxRoot"
                    checked={medications.includes(medication)}
                    onCheckedChange={() => handleMedicationChange(medication)}
                    id={medication}
                  >
                    <Checkbox.Indicator className="CheckboxIndicator">
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
          <PopoverMenuTitle id="filters-popover-title">Filters</PopoverMenuTitle>
          <PopoverCheckBoxContainer>
          <legend className="visually-hidden" aria-labelledby="filters-popover-title"></legend>

            {services?.map((filter: FilterType | undefined) => {
              if (!filter) return;
              return (
                <PopoverCheckBoxRow key={filter.name} role="menuitemcheckbox" aria-checked={filters.includes(filter)} aria-label={filter.label}>
                  <Checkbox.Root
                    className="CheckboxRoot"
                    checked={filters.includes(filter)}
                    onCheckedChange={() => handleFilterChange(filter)}
                    id={filter.name}
                  >
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <StyledCheckboxLabel htmlFor={filter.label}>
                    {filter.label}
                  </StyledCheckboxLabel>
                </PopoverCheckBoxRow>
              );
            })}
          </PopoverCheckBoxContainer>
        </>
      );
    }
  };

  return (
    <StyledPopoverMultiSelect>
      <PopoverMenu.Root>
        <PopoverMenu.Trigger
          className="hhs-primary-button"
          title={
            type === "medications"
              ? "This button filters results to only include specific medications!"
              : "This buttons filters results to only include specific site information"
          }
          aria-label={
            type === "medications"
              ? "This button filters results to only include specific medications!"
              : "This buttons filters results to only include specific site information"
          }
        >
          {type === "medications" ? t("Illness.Prompt") : "Filters"}{" "}
          <ChevronDownIcon />
          <span className="PopOverFilterCount">
            &#40;
            {type === "medications" ? medications.length : filters.length}
            &#41;
          </span>
        </PopoverMenu.Trigger>
        <PopoverMenu.Portal>
          <PopoverMenu.Content className="PopoverMenuContent" sideOffset={5}>
            {renderContent()}
            <StyledFilterButtonContainer>
              <PopoverClose
                asChild
                aria-label="Clear Filters and Close Dropdown"
              >
                <StyledOutlineButton onClick={handleClearFilters}>
                  Clear All
                </StyledOutlineButton>
              </PopoverClose>

              {/* TODO: disable if nothing selected ("if nothing, do the same thing as clear all") */}
              <PopoverClose
                asChild
                aria-label="Apply Changes and Close Dropdown"
              >
                <StyledPrimaryButton onClick={handleApplyClick}>
                  Apply
                </StyledPrimaryButton>
              </PopoverClose>
            </StyledFilterButtonContainer>
            <PopoverMenu.Close className="PopoverMenuClose" aria-label="Close">
              <Cross2Icon />
            </PopoverMenu.Close>
            <PopoverMenu.Arrow className="PopoverMenuArrow" />
          </PopoverMenu.Content>
        </PopoverMenu.Portal>
      </PopoverMenu.Root>
    </StyledPopoverMultiSelect>
  );
};
// #endregion -------------------- Render ------------------------------------
export default PopoverMultiSelect;
// #endregion ================ EXPORTED COMPONENT ==============================
