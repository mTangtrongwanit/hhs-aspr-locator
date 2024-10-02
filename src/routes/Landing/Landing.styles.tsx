/**
 * Landing Styles
 *
 * Styled components for the Landing component.
 */

// #region ========================= IMPORTS ===================================

// #region ------------ 3rd-Party Components / Libraries -----------------------
import styled from "styled-components";
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { Breakpoints } from "@/utils";
// #endregion ----------- Custom Components / Utilities ------------------------

// #endregion ====================== IMPORTS ===================================

const imgUrl = new URL("@/assets/nurse.jpg", import.meta.url).href


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
  // --- Decorative ---
  color: var(--brand);
  font-weight: 700;
`;

export const StyledRow = styled.div`
  // --- Layout ---

  display: flex;
  gap: inherit;
  // --- States ---

  @media ${Breakpoints.sm} {
    flex-direction: column;
  }
`;

export const StyledViewLocsButton = styled.button`
  // --- Sizing / Box-Model ---
  width: min-content;
  padding: calc(var(--unit) / 2) calc(var(--unit)); //vert horz
  // --- Decorative ---
  white-space: nowrap;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius);
  border: var(--border) solid #fff;
  font-weight: bold;
  // --- States ---

  &:hover,
  &:focus {
    background: var(--brand);
    cursor: pointer;
  }
`;

export const StyledDecorativeImage = styled.div`
  grid-area: image;
  // --- Decorative ---
  background-image: ${`url(${imgUrl})`};
  background-repeat: no-repeat;
  background-position: top right;
  background-size: cover;

  @media ${Breakpoints.sm} {
    display: none;
  }
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

  // --- Children ---
  h2 {
    // --- Decorative ---
    font-size: var(--text-5);
    font-weight: 700;
  }
`;

export const StyledContextRow = styled.section`
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
export const StyledLandingContent = styled.main`
  // --- Sizing / Box-Model ---
  width: 100%;
  overflow-y: auto; //prevent accordion and footer from overlapping
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

  /**
  * Note: Classes copied from Radix UI example and slightly adapted.
  * https://www.radix-ui.com/primitives/docs/components/accordion
  */

  .AccordionRoot {
    border-radius: 6px;
    width: 100%;
  }

  .AccordionItem {
    // --- Sizing / Box-Model ---
    margin-top: 1px;
    // --- Position ---
    // --- Layout ---
    // --- Decorative ---
    overflow: hidden; //Necessary for animation to look smooth

    // --- States ---
    &:first-child {
      margin-top: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:focus-within {
      position: relative;
      z-index: 1;
      box-shadow: 0 0 0 2px var(--action);
    }
  }

  .AccordionHeader {
    display: flex;
  }

  .AccordionTrigger {
    // --- Sizing / Box-Model ---
    border-bottom: 1px solid var(--brand);
    margin: 0.25rem;
    height: 45px;
    // --- Position ---
    // --- Layout ---
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // --- Decorative ---
    font-family: inherit;
    background-color: transparent;
    font-weight: 700;
    font-size: var(--text-0);
    color: var(--brand);
    background-color: white;
    // --- States ---
    &:hover {
      background-color: var(--light);
    }
  }

  .AccordionContent {
    // --- Decorative ---
    font-size: var(--text-0);
    color: var(--text);
    background-color: #fff;
    // --- States ---

    &[data-state="open"] {
      animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }

    &[data-state="closed"] {
      animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    // --- Children ---

    a {
      font-weight: 400;
    }

    .ital,
    .ital a {
      font-style: italic;
    }
  }

  .AccordionContentText {
    //--- Sizing ---
    padding: 15px 20px;

    //--- Layout ---
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

  //--- Animations ---

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
