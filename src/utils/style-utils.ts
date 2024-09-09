// #region =================== EXPORTED CONSTANTS ==============================
/**
 * Use in styled-components to standardize media queries.
 * Example: @media ${Breakpoints.md} {}
 */
export const Breakpoints = {
  xs: `screen and (max-width: 475px)`,
  sm: `screen and (max-width: 600px)`,
  md: `screen and (max-width: 850px)`,
  lg: `screen and (max-width: 1100px)`,
  xl: `screen and (max-width: 1200px)`,
};
// #endregion ================ EXPORTED CONSTANTS ==============================
// #region =================== EXPORTED FUNCTIONS ==============================
/**
 * Ensures compatibility for any browser where window.innerHeight != 100vh.
 */
export const setVH = () => {
  try {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      const newvh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${newvh}px`);
    });
  } catch {
    console.log("Error assigning --vh");
  }
};
// #endregion ================ EXPORTED FUNCTIONS ==============================
