/**
 * _TemplateComponent_ Styles
 *
 * Styled components for the _TemplateComponent_ component.
 */

// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
import styled from "styled-components";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { Breakpoints } from "@/utils";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENTS =============================
/* Property Organization Guide */
// --- Local Variables ---
// --- Sizing / Box-Model ---
// --- Position ---
// --- Layout ---
// --- Decorative ---
// --- States ---
// --- Children ---

// #region -------------------------- Atoms ------------------------------------
export const StyledFAQTitle = styled.h4`
  color: var(--brand);
  font-weight: 700;
`;
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
export const StyledSearchContainer = styled.section`
  // --- Sizing / Box-Model ---
  padding: calc(var(--unit) * 2);
  padding-inline-start: var(--footer-offset);
  // --- Position ---
  grid-area: search-container;
  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  // --- Decorative ---
  color: #fff;
  background-color: var(--brand);
  // --- States ---

  // --- Children ---
  h2 {
    // --- Decorative ---
    font-size: var(--text-5);
    font-weight: 700;
  }

  p + div {
    display: flex;
    gap: inherit;

    @media ${Breakpoints.sm} {
      flex-direction: column;
    }
  }

  button {
    // --- Sizing / Box-Model ---
    width: min-content;
    padding: calc(var(--unit) / 2) calc(var(--unit)); //vert horz
    // --- Position ---
    // --- Layout ---
    // --- Decorative ---
    white-space: nowrap;
    background: var(--accent);
    color: #fff;
    border-radius: var(--radius);
    border: var(--border) solid #fff;
    font-weight: bold;
    // --- States ---

    &:hover {
      background: var(--brand);
    }
    // --- Children ---
  }
`;

export const StyledContextRow = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  width: 100%;
  padding: calc(var(--unit) * 2) var(--footer-offset);
  // --- Position ---
  grid-area: context-row;
  // --- Layout ---
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  // --- Decorative ---
  background-color: #fff;
  color: var(--text);
  // --- States ---
  // --- Children ---
  p a {
    color: var(--brand);
    font-weight: 700;
  }
`;
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledLandingContent = styled.section`
  // --- Local Variables ---
  // --- Sizing / Box-Model ---
  width: 100%;
  /* height: 100%; */
  // --- Position ---
  // --- Layout ---
  display: grid;
  grid-template-areas:
    "search-container image"
    "context-row context-row";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto minmax(0, 1fr);
  // --- Decorative ---
  // --- States ---

  @media ${Breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
  // --- Children ---

  .img {
    grid-area: image;
    // --- Decorative ---
    background-image: url("./src/assets/nurse.jpg");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: cover;

    @media ${Breakpoints.sm} {
      display: none;
    }
  }

  //Accordion
  .AccordionRoot {
    border-radius: 6px;
    width: 100%;
    background-color: var(--light);
  }

  .AccordionItem {
    overflow: hidden;
    margin-top: 1px;
  }

  .AccordionItem:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .AccordionItem:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .AccordionItem:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--action);
  }

  .AccordionHeader {
    display: flex;
  }

  .AccordionTrigger {
    font-family: inherit;
    background-color: transparent;
    height: 45px;
    font-weight: 700;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--text-0);
    color: var(--brand);
    box-shadow: 0 1px 0 var(--brand);
    background-color: white;
  }

  .AccordionTrigger:hover {
    background-color: var(--light);
  }

  .AccordionContent {
    font-size: var(--text-0);
    color: var(--text);
    background-color: #fff;

    a {
      font-weight: 400;
    }

    .ital,
    .ital a {
      font-style: italic;
    }
  }
  .AccordionContent[data-state="open"] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionContent[data-state="closed"] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  .AccordionContentText {
    padding: 15px 20px;

    display: flex;
    flex-direction: column;
    gap: var(--unit);
  }

  .AccordionChevron {
    color: var(--brand);
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionTrigger[data-state="open"] > .AccordionChevron {
    transform: rotate(180deg);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`;

// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
