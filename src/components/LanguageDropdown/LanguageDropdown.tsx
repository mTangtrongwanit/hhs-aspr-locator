/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useState } from 'react';
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  CheckIcon,
  ChevronDownIcon,
} from '@radix-ui/react-icons';

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledDropdownSelect } from './LanguageDropdown.styles';
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from "./LanguageDropdown.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const LanguageDropdown = (props: Props) => {

  // Could make this into a more generic component later
  const itemArray = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Spanish',
      value: 'es',
    },
    {
      label: 'Chinese (Simplified)',
      value: 'zh',
    }
  ]

  // #region ------------------ Hooks (Resources) ------------------------------

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [selectedLanguage, setSelectedLanguage] = useState('en');
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
  // Can be used to update the state with the user's selected language using the i18n
  // library
  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
  }
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return <StyledDropdownSelect>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="DropDownButton">
          Illness/Language: {props.label} <ChevronDownIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
        { itemArray.map((item) => (
          <DropdownMenu.Item className="DropDownItem" key={item.value} onClick={() => handleLanguageChange(item.value)}>
            {selectedLanguage === item.value && <CheckIcon /> }
            {item.label}
          </DropdownMenu.Item>
        ))}
        
        <DropdownMenu.Arrow className="DropdownMenuArrow" />
      </DropdownMenu.Content>
  </DropdownMenu.Root>;
  </StyledDropdownSelect>
  // #endregion -------------------- Render ------------------------------------
};
export default LanguageDropdown;
// #endregion ================ EXPORTED COMPONENT ==============================
