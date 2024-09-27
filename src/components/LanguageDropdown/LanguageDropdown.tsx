/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------import { useState } from 'react';
import { useState } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledDropdownSelect } from "./LanguageDropdown.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const LanguageDropdown = () => {
  // TODO later: Move to config
  const itemArray = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "Spanish",
      value: "es",
    },
    {
      label: "Chinese (Simplified)",
      value: "zh",
    },
  ];

  // #region ------------------ Hooks (Resources) ------------------------------
  const { i18n } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [selectedLanguage, setSelectedLanguage] = useState("English");
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

  const handleLanguageChange = (lang: { label: string; value: string }) => {
    i18n.changeLanguage(lang.value);
    setSelectedLanguage(lang.label);
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledDropdownSelect>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="DropDownButton">
          {selectedLanguage} <ChevronDownIcon />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {itemArray.map((item) => (
            <DropdownMenu.Item
              style={
                {
                  "--selected": `${i18n.language === item.value ? "var(--brand)" : ""}`,
                } as React.CSSProperties
              }
              className="DropDownItem"
              key={item.value}
              onClick={() => handleLanguageChange(item)}
            >
              {i18n.language === item.value ? (
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
export default LanguageDropdown;
// #endregion ================ EXPORTED COMPONENT ==============================
