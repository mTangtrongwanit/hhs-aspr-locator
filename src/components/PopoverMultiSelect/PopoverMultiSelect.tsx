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
    setLocations,
    locationsTotals,
    treatmentIllnessData,
    selectedIllness,
    selectedMedications,
    setSelectedMedications,
    selectedFilters,
    setSelectedFilters,
    sortedSites
  } = useAppContext();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
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




  const checkFilter = (loc: __esri.Graphic, selectedFilters: any) => {
      if (selectedFilters.length === 0) {
        return true;
      }
      let match = true
      selectedFilters.forEach((filter: any) => {

        // attribute registering whether or not this location has the service you are filtering for
        // returns true or false
        const attributeValue =
        loc.attributes[
          config.treatmentData.fields[
            filter.name as keyof typeof config.treatmentData.fields
          ].name
        ]?.toUpperCase() || 'FALSE'

        console.log('attributeValue',attributeValue)

        if (attributeValue == undefined) {
          debugger
        }

        if (attributeValue !== "TRUE") {
          // if the attribute value is not true, set match to false
          match = false;
        }
      });
      return match;
  }

  const checkMedication = (loc: __esri.Graphic, selectedMedications: any, treatmentIllnessData: any) => {
    let match = true
    if (selectedMedications.length > 0) {
      // if this location does not provide the selected medications
      selectedMedications.forEach((medication: __esri.Graphic) => {

             
        // find the treatment object for the medication
        const treatment = treatmentIllnessData?.find(
          (treatment: __esri.Graphic) => treatment.attributes.display_name === medication,
        );


        // if there is no treatment object, return false
        if (!treatment) return false;

        // attribute registering whether or not this location has the treatment you are filtering for
        // this will be true or false
        const medicationAttribute =
          loc.attributes[treatment.attributes.field_name]?.toUpperCase();

        if (medicationAttribute !== "TRUE") {
          // if the attribute value is not true, set match to false
          match = false;
        }

          

        
        if (treatment.attributes.display_name === "Oseltamivir") {


          const has_generic = loc.attributes[
            config.treatmentData.fields.has_oseltamivir_generic.name
          ]?.toUpperCase() === "TRUE" ? true : false;

          const has_tamiflu = loc.attributes[
            config.treatmentData.fields.has_oseltamivir_tamiflu.name
          ]?.toUpperCase() === "TRUE" ? true : false;

          const has_suspension = loc.attributes[
            config.treatmentData.fields.has_oseltamivir_suspension.name
          ]?.toUpperCase() === "TRUE" ? true : false;
          

          
          if (
            has_suspension || has_generic ||  has_tamiflu
          ) {
            console.log('oseltamivir match', {
              has_suspension,
              has_generic,
              has_tamiflu
            })
            match = true;
          }
          else {
            match = false;
          }
        }
      return match;
      });
    }
    return match;
  }

  
  
  
  /** Handle the apply click */
  const handleApplyClick = () => {
    // if there are medications or filters, do some stuff, else set locations to all locations
    if (
      (selectedMedications.length > 0 && treatmentIllnessData) ||
      (selectedFilters.length > 0 && treatmentIllnessData)
    ) {
      // filter the locations for any that have 
      const filteredLocations = locationsTotals?.filter((loc) => {

        const filterMatch = checkFilter(loc, selectedFilters);
        
        const medicationMatch = checkMedication(loc, selectedMedications, treatmentIllnessData);

        return filterMatch && medicationMatch;
      });

      setLocations(filteredLocations || null);
    } else {
      setLocations(locationsTotals);
    }
  };

  /** Handle the clear filters click */
  const handleClearFilters = (type: "medications" | "filter") => {
    if (type === "medications") {
      setSelectedMedications([]);
    } else {
      setSelectedFilters([]);
    }
    setLocations(locationsTotals);
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
      checker: (loc: __esri.Graphic) =>
        selectedIllness.value === "COVID" &&
        [
          loc.attributes[config.treatmentData.fields.is_pap.name]?.toUpperCase(), 
          loc.attributes[config.treatmentData.fields.has_USG_product.name
        ]?.toUpperCase()].includes("TRUE"),
      field: config.treatmentData.fields.is_pap,
    },
    is_icatt_site: {
      checker: (loc: __esri.Graphic) =>
        selectedIllness.value === "COVID" &&
        loc.attributes[config.treatmentData.fields.is_icatt_site.name]?.toUpperCase() === "TRUE",
      field: config.treatmentData.fields.is_icatt_site,
    },
    home_delivery: {
      checker: (loc: __esri.Graphic) =>
        [ "COVID", "Flu"].includes(selectedIllness.value) &&
        loc.attributes[config.treatmentData.fields.home_delivery.name]?.toUpperCase() === "TRUE",
      field: config.treatmentData.fields.home_delivery,
    },
    has_oseltamivir_suspension: {
      checker: (loc: __esri.Graphic) =>
        selectedIllness.value === "Flu" &&
        loc.attributes[config.treatmentData.fields.has_oseltamivir_suspension.name]?.toUpperCase() === "TRUE",
      field: config.treatmentData.fields.has_oseltamivir_suspension,
    },

    is_prescribing_svcs_available: {
      checker: (loc: __esri.Graphic) =>
        [ "COVID", "Flu"].includes(selectedIllness.value) &&
        loc.attributes[config.treatmentData.fields.is_prescribing_svcs_available.name]?.toUpperCase() === "TRUE",
      field: config.treatmentData.fields.is_prescribing_svcs_available,
    },
  };

  // Get the filtered locations from the locations based on filters
  const services = Array.from(
    new Set(
      sortedSites?.flatMap((loc) => {
        const serviceList: Filter[] = [];
        // Iterate over the lookup object
        for (const [key, field] of Object.entries(filterLookup)) {
          // handle type check for key
          key 
          // handle type check for key
          if (field.checker(loc)) {
              serviceList.push(field.field);
          }
        }
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
        {/* button to log locations */}
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
        <PopoverMenu.Trigger className="hhs-primary-button">
          {type === "medications" ? "Medications" : "Filters"}{" "}
          <ChevronDownIcon />
          <span className="PopOverFilterCount">
            &#40;
            {type === "medications"
              ? selectedMedications.length
              : selectedFilters.length}
            &#41;
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
