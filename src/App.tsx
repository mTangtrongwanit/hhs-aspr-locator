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
import Footer from "@/components/Footer";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================
// #region ======================== CONSTANTS ==================================
const StyledAppLayout = styled.section`
  // --- Sizing / Box-Model ---
  width: inherit;
  height: inherit;
  overflow-y: hidden;
  /* padding: 1rem; */
  // --- Layout ---
  display: grid;

  grid-template-rows: min-content min-content minmax(0, 1fr) auto;

  // --- Decorative ---
  background-color: var(--app-bg);
`;

const StyledLocsLayout = styled(StyledAppLayout)`
  /* height: fit-content; */
  height: inherit;
  overflow-y: auto;
  grid-template-rows: min-content min-content;
`;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <StyledAppLayout>
          <Header></Header>
          <Landing></Landing>
          <Footer></Footer>
        </StyledAppLayout>
      ),
    },
    {
      path: "/locations",
      element: (
        <StyledLocsLayout>
          <Header />
          <Locations />
          <Footer />
        </StyledLocsLayout>
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
