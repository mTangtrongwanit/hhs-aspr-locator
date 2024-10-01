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
import { Breakpoints } from "@/utils/style-utils";
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
// #endregion ----------------------- Atoms ------------------------------------

// #region -------------- Molecules (Internal Layouts) -------------------------
// #endregion ----------- Molecules (Internal Layouts) -------------------------

// #region --------------- Parent Component + Variants -------------------------
export const StyledFooterContainer = styled.div`
    display: flex;
    background: var(--brand);
    justify-content: center;
    gap: 8px;
`;

export const StyledFooter = styled.footer`
    display: flex;
    max-width: 1440px;
    padding: 24px;
    gap: 32px;

    @media ${Breakpoints.md} {
        flex-direction: column;
        justify-content: center;
    }   
`;

export const StyledFooterFirstColumn = styled.div`
    flex: 1 1 62%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media ${Breakpoints.md} {
        justify-content: center;
    } 
`;

export const StyledFooterSecondColumn = styled.div`
    flex: 1 1 38%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media ${Breakpoints.md} {
        justify-content: center;
    } 
`;

export const StyledFooterLinksContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 8px;
    align-items: center;
    list-style: none;
    
    @media ${Breakpoints.md} {
        justify-content: center;
    }  
`;

export const StyledFooterLink = styled.li`
    font-size: var(--text--2);
    font-style: normal;
    line-height: 125%;
    color: var(--light);

    & a {   
            font-size: var(--text--1);
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            color: var(--light);
            text-decoration: none;
        }
    
    & a:hover {
        text-decoration: underline;
    }

    @media ${Breakpoints.md} {
        text-align: center;
    }  
`;

export const StyledFooterAddressContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const StyledFooterAddressImageContainer = styled.div`
    flex: 0 0 103px;
    display: flex;   
`;

export const StyledFooterAddressImage = styled.img`
    height: 102px;
    width: auto;
`;

export const StyledFooterAddress = styled.p`
    font-size: var(--text--1);
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    color: var(--light);

    @media ${Breakpoints.md} {
        text-align: center;
    }  
`;

export const StyledFooterImageContainer = styled.div`
    display: flex;
    @media ${Breakpoints.md} {
        justify-content: center;
    }
`;

export const StyledFooterImage = styled.img`
    height: 50px;
    width: auto;
`;

export const StyledFooterMediaLinksContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 8px;
    align-items: center;
    list-style: none;

    @media ${Breakpoints.md} {
        justify-content: center;
    }
`;

export const StyledFooterMediaLink = styled.a`
    text-decoration: none;
    
    &:hover {
        text-decoration: none;
    }

    & img  {
        height: auto;
        width: 32px;
    }
`;
// #endregion ------------ Parent Component + Variants -------------------------
// #endregion ================ EXPORTED COMPONENTS =============================
