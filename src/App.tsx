// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
// #endregion ------------------------ React -----------------------------------
// #region ------------ 3rd-Party Components / Libraries -----------------------
/* Routing */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* Styling */
import { setAssetPath } from "@esri/calcite-components/dist/components";

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { setVH } from "./utils";
import { AppContextProvider } from "./contexts/AppContext";
import styled from "styled-components";

/*Routes*/
import Landing from "@/routes/Landing";
import Locations from "@/routes/Locations";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Header";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================
// #region ======================== CONSTANTS ==================================
const StyledAppLayout = styled.section`
  // --- Sizing / Box-Model ---
  width: inherit;
  height: inherit;
  /* padding: 1rem; */
  // --- Layout ---
  display: grid;
  gap: 1rem;
  /* grid-template-areas:
    "header"
    "content"
    "footer"; */
  grid-template-rows: auto minmax(0px, 1fr) auto;
  // --- Decorative ---
  /* background-color: var(--app-green); */
  background-color: var(--app-bg);
`;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <StyledAppLayout>
          <Header />
          <Landing />
          <Footer />
        </StyledAppLayout>
      ),
    },
    {
      path: "/locations",
      element: (
        <StyledAppLayout>
          <Header />
          <Locations />
          <Footer />
        </StyledAppLayout>
      ),
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
// #endregion ===================== CONSTANTS ==================================
// #region =================== EXPORTED COMPONENT ==============================
function App() {
  // #region ------------------ Hooks (Resources) ------------------------------
  // #endregion --------------- Hooks (Resources) ------------------------------
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------
  // #region -------------------- Hooks (Other) --------------------------------
  // #endregion ----------------- Hooks (Other) --------------------------------
  // #region ---------------- Supporting Functions -----------------------------
  // Styles
  setVH();
  setAssetPath("https://js.arcgis.com/calcite-components/2.11.1/assets");

  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
  // #endregion -------------------- Render ------------------------------------
}

export default App;
// #endregion ================ EXPORTED COMPONENT ==============================
