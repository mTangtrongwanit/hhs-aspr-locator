/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

import CheckboxElement from '../CheckboxElement';

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// import { StyledCheckboxContainer } from "./CheckboxGroup.styles";

// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// import { type Props } from "./Header.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================

// The Checkbox group should expect a "category" such as a Disease type (Flu, Covid) or
// something more general like "Medications"
// Will be populated with "CheckboxElement" components based on table returns

const CheckboxGroup = () => {
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

  // Make a function to dynamically create however many checkboxes needed for a category
  // in this table:
  // https://services2.arcgis.com/ZQ4jTQn6k7VPXEwO/ArcGIS/rest/services/Treatments_Locator_2_Test_Data/FeatureServer/2

  // Will eventually pull from the hosted table for data instead
  // this simulates the returned "features" array from the query
  // the "field_name" should be a property tracked in the app state to apply a "definitionExpression"
  // on the target feature layer
  const tableQueryResults = [
    {
      "attributes" : {
        "OBJECTID" : 1, 
        "field_name" : "has_paxlovid", 
        "display_name" : "Paxlovid", 
        "illness" : "COVID"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 2, 
        "field_name" : "has_baloxavir", 
        "display_name" : "Balaxovir", 
        "illness" : "Flu"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 3, 
        "field_name" : "has_lagevrio", 
        "display_name" : "Lagevrio", 
        "illness" : "COVID"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 4, 
        "field_name" : "has_veklury", 
        "display_name" : "Veklury", 
        "illness" : "COVID"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 5, 
        "field_name" : "has_zanamivir", 
        "display_name" : "Zanamivir", 
        "illness" : "Flu"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 6, 
        "field_name" : "has_peramivir", 
        "display_name" : "Peramivir", 
        "illness" : "Flu"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 7, 
        "field_name" : "has_oseltamivir_generic", 
        "display_name" : "Oseltamivir", 
        "illness" : "Flu"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 8, 
        "field_name" : "has_oseltamivir_suspension", 
        "display_name" : "Oseltamivir", 
        "illness" : "Flu"
      }
    }, 
    {
      "attributes" : {
        "OBJECTID" : 9, 
        "field_name" : "has_oseltamivir_tamiflu", 
        "display_name" : "Oseltamivir", 
        "illness" : "Flu"
      }
    }
  ]

  // #region ----------------------- Render ------------------------------------
  // <StyledCheckboxContainer className="checkboxGroup-placeholder">
  return <Popover.Root>
    <Popover.Trigger asChild>
      <button className="checkboxGroup-button" aria-label="Checkbox Group List">
        Medications
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="checkboxGroupContent-placeholder" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p className="Text" style={{ marginBottom: 10 }}>
            Insert Checkbox List Below:
          </p>
          {tableQueryResults.map(item => (
            <CheckboxElement
              id={item.attributes.field_name}
              name={item.attributes.display_name}
              value={item.attributes.field_name}
            />
          ))}
        </div>
        <button className="checkboxGroup-clearAll-button" aria-label="Clear All">
          Clear All
        </button>
        <button className="checkboxGroup-apply-button" aria-label="Apply">
          Apply
          </button>
        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>;
  // #endregion -------------------- Render ------------------------------------
};
export default CheckboxGroup;
// #endregion ================ EXPORTED COMPONENT ==============================
