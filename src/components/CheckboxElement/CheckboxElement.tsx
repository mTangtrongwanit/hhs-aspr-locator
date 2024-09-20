/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// import { StyledCheckbox } from "./CheckboxElement.styles";

// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from "./CheckboxElement.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const CheckboxElement: React.FC<Props> = ({
  id,
  name,
  value,
  checked = false, // should be false by default unless overridden
}) => {
  // #region ------------------ Hooks (Resources) ------------------------------

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // Will track if individual checkbox is checked or not
  const [isChecked, setIsChecked] =  useState(checked);
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
  const handleCheckedToggle = () => {
    console.log('checkbox toggle triggered', isChecked)
    console.log('id: ', id)
    console.log('value: ', value)
    console.log('name: ', name)
    setIsChecked(!isChecked);
  }
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  // For the checkbox, the "id" can be used to target the element
  // "value" can be used to contain a generic value or something like the medication name for a disease
  return <Checkbox.Root className='tempCheckbox' id={id} value={value} checked={isChecked} onCheckedChange={handleCheckedToggle}>
    <Checkbox.Indicator>
      {isChecked === true && <CheckIcon />}
    </Checkbox.Indicator>
    <label className="checkboxLabel"> - Testing label: {name}</label>
   </Checkbox.Root>
  // #endregion -------------------- Render ------------------------------------
};
export default CheckboxElement;
// #endregion ================ EXPORTED COMPONENT ==============================
