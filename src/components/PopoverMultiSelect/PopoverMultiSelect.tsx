/**
 * _TemplateComponent_
 *
 * _TemplateComponent_ component implementation.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------import { useState } from 'react';
// import { useState } from "react";
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import * as PopoverMenu from "@radix-ui/react-popover";
import * as Checkbox from '@radix-ui/react-checkbox';
import { ChevronDownIcon, Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
// import { useTranslation } from "react-i18next";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { StyledPopoverMultiSelect, PopoverMenuTitle, PopoverCheckBoxContainer, PopoverCheckBoxRow, StyledCheckboxLabel, StyledFilterButtonContainer, StyledOutlineButton, StyledPrimaryButton} from "./PopoverMultiSelect.styles";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ======================== CONSTANTS ==================================
// #endregion ===================== CONSTANTS ==================================

// #region =================== EXPORTED COMPONENT ==============================
const PopoverMultiSelect = () => {

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

  // #region ----------------------- Render ------------------------------------
  return (
    <StyledPopoverMultiSelect>
      <PopoverMenu.Root>
        <PopoverMenu.Trigger className="PopoverMenuButton">
          Medications <ChevronDownIcon />
          <span className="PopOverFilterCount">4</span>
        </PopoverMenu.Trigger>
        <PopoverMenu.Portal>
        <PopoverMenu.Content className="PopoverMenuContent" sideOffset={5}>
            <PopoverMenuTitle>
                Medications
            </PopoverMenuTitle>
            <PopoverCheckBoxContainer>
              <PopoverCheckBoxRow>
                <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
                  <Checkbox.Indicator className="CheckboxIndicator">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <StyledCheckboxLabel htmlFor="c1">
                  Oseltamivir
                </StyledCheckboxLabel>
              </PopoverCheckBoxRow>
              <PopoverCheckBoxRow>
                <Checkbox.Root className="CheckboxRoot" defaultChecked id="c2">
                  <Checkbox.Indicator className="CheckboxIndicator">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <StyledCheckboxLabel htmlFor="c2">
                  Baloxavir
                </StyledCheckboxLabel>
              </PopoverCheckBoxRow>
            </PopoverCheckBoxContainer>
            <StyledFilterButtonContainer>
              <StyledOutlineButton>
                Clear All
              </StyledOutlineButton>
              <StyledPrimaryButton>
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
  // #endregion -------------------- Render ------------------------------------
};
export default PopoverMultiSelect;
// #endregion ================ EXPORTED COMPONENT ==============================
