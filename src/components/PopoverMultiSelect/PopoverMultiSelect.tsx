/**
 * PopoverMultiSelect
 *
 * PopoverMultiSelect component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
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
    treatmentIllnessLookup,
    locations,
    setLocations,
    treatmentIllnessData,
    selectedIllness,
    selectedMedications,
    setSelectedMedications,
    selectedFilters,
    setSelectedFilters,
  } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [treatments, setTreatments] = useState<string[]>([]);
  const [unfilteredLocations, setUnfilteredLocations] = useState<
    __esri.Graphic[] | null
  >(null);
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
    //@ts-expect-error todo
    setSelectedMedications((prev: string[]) =>
      prev.includes(medication)
        ? prev.filter((item: string) => item !== medication)
        : [...prev, medication],
    );
  };

  /** Handle the filter change */
  const handleFilterChange = (filter: Filter) => {
    setSelectedFilters((prev: Filter[]) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  /** Handle the apply click */
  const handleApplyClick = () => {
    if (
      (selectedMedications.length > 0 && treatmentIllnessData) ||
      (selectedFilters.length > 0 && treatmentIllnessData)
    ) {
      setUnfilteredLocations(locations);

      const filteredLocations = locations?.filter((loc) => {
        let match = true;

        // Filter based on selected filters
        if (selectedFilters.length > 0) {
          selectedFilters.forEach((filter) => {
            const attributeValue =
              loc.attributes[
                config.treatmentData.fields[
                  filter.name as keyof typeof config.treatmentData.fields
                ].name
              ]?.toUpperCase();

            if (filter.name === "has_oseltamivir_tamiflu") {
              if (
                attributeValue !== "TRUE" ||
                loc.attributes[
                  config.treatmentData.fields.has_oseltamivir_generic.name
                ]?.toUpperCase() === "TRUE"
              ) {
                match = false;
              }
            } else if (attributeValue !== "TRUE") {
              match = false;
            }
          });
        }

        // Filter based on selected medications
        if (match && selectedMedications.length > 0) {
          const medicationMatch = selectedMedications.every((medication) => {
            const treatment = treatmentIllnessData.find(
              (treatment) => treatment.attributes.display_name === medication,
            );
            if (!treatment) return false;

            const medicationAttribute =
              loc.attributes[treatment.attributes.field_name]?.toUpperCase();
            return medicationAttribute === "TRUE";
          });
          if (!medicationMatch) {
            match = false;
          }
        }

        return match;
      });

      setLocations(filteredLocations || null);
    } else {
      setLocations(unfilteredLocations);
    }
  };

  /** Handle the clear filters click */
  const handleClearFilters = (type: "medications" | "filter") => {
    if (type === "medications") {
      setSelectedMedications([]);
    } else {
      setSelectedFilters([]);
    }
    setLocations(unfilteredLocations);
  };

  // Get the services from the locations
  const services = Array.from(
    new Set(
      locations?.flatMap((loc) => {
        const serviceList: Filter[] = [];
        if (
          loc.attributes[config.treatmentData.fields.is_pap.name] &&
          loc.attributes[
            config.treatmentData.fields.is_pap.name
          ].toUpperCase() === "TRUE"
        )
          serviceList.push(config.treatmentData.fields.is_pap);
        if (
          loc.attributes[config.treatmentData.fields.is_icatt_site.name] &&
          loc.attributes[
            config.treatmentData.fields.is_icatt_site.name
          ].toUpperCase() === "TRUE"
        )
          serviceList.push(config.treatmentData.fields.is_icatt_site);
        if (
          loc.attributes[config.treatmentData.fields.home_delivery.name] &&
          loc.attributes[
            config.treatmentData.fields.home_delivery.name
          ].toUpperCase() === "TRUE"
        )
          serviceList.push(config.treatmentData.fields.home_delivery);
        if (
          loc.attributes[config.treatmentData.fields.has_USG_product.name] &&
          loc.attributes[
            config.treatmentData.fields.has_USG_product.name
          ].toUpperCase() === "TRUE"
        )
          serviceList.push(config.treatmentData.fields.has_USG_product);
        if (
          loc.attributes[
            config.treatmentData.fields.has_oseltamivir_suspension.name
          ] &&
          loc.attributes[
            config.treatmentData.fields.has_oseltamivir_suspension.name
          ].toUpperCase() === "TRUE"
        )
          serviceList.push(
            config.treatmentData.fields.has_oseltamivir_suspension,
          );
        if (
          loc.attributes[
            config.treatmentData.fields.has_oseltamivir_tamiflu.name
          ] &&
          loc.attributes[
            config.treatmentData.fields.has_oseltamivir_tamiflu.name
          ].toUpperCase() === "TRUE" &&
          loc.attributes[
            config.treatmentData.fields.has_oseltamivir_generic.name
          ] &&
          loc.attributes[
            config.treatmentData.fields.has_oseltamivir_generic.name
          ].toUpperCase() === "FALSE"
        )
          serviceList.push(config.treatmentData.fields.has_oseltamivir_tamiflu);
        if (
          loc.attributes[
            config.treatmentData.fields.is_prescribing_svcs_available.name
          ] &&
          loc.attributes[
            config.treatmentData.fields.is_prescribing_svcs_available.name
          ].toUpperCase() === "TRUE"
        )
          serviceList.push(
            config.treatmentData.fields.is_prescribing_svcs_available,
          );
        return serviceList;
      }) || [],
    ),
  );

  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Effects -----------------------------------
  /** When the illnessesTreatements object is not empty, set the treatments based off the selected illness. */
  useEffect(() => {
    if (!(JSON.stringify(treatmentIllnessLookup) === "{}")) {
      setTreatments(treatmentIllnessLookup[selectedIllness.value]);
    }
  }, [treatmentIllnessLookup, selectedIllness]);
  // #endregion -------------------- Effects -----------------------------------

  // #region ----------------------- Render ------------------------------------
  const renderContent = () => {
    if (type === "medications") {
      return (
        <>
          <PopoverMenuTitle>Medications</PopoverMenuTitle>
          <PopoverCheckBoxContainer>
            {treatments !== undefined &&
              treatments.map((medication) => (
                <PopoverCheckBoxRow key={medication}>
                  <Checkbox.Root
                    className="CheckboxRoot"
                    checked={selectedMedications.includes(medication)}
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
          <PopoverMenuTitle>Filters</PopoverMenuTitle>
          <PopoverCheckBoxContainer>
            {services !== undefined &&
              services.length > 0 &&
              services.map((filter) => (
                <PopoverCheckBoxRow key={filter.name}>
                  <Checkbox.Root
                    className="CheckboxRoot"
                    checked={selectedFilters.includes(filter)}
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
              ))}
          </PopoverCheckBoxContainer>
        </>
      );
    }
  };

  return (
    <StyledPopoverMultiSelect>
      <PopoverMenu.Root>
        <PopoverMenu.Trigger className="PopoverMenuButton">
          {type === "medications" ? "Medications" : "Filters"}{" "}
          <ChevronDownIcon />
          <span className="PopOverFilterCount">
            {type === "medications"
              ? selectedMedications.length
              : selectedFilters.length}
          </span>
        </PopoverMenu.Trigger>
        <PopoverMenu.Portal>
          <PopoverMenu.Content className="PopoverMenuContent" sideOffset={5}>
            {renderContent()}
            <StyledFilterButtonContainer>
              <StyledOutlineButton onClick={() => handleClearFilters(type)}>
                Clear All
              </StyledOutlineButton>
              {/* TODO: disable if nothing selected ("if nothing, do the same thing as clear all") */}
              <StyledPrimaryButton onClick={handleApplyClick}>
                Apply
              </StyledPrimaryButton>
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
