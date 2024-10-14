// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useEffect } from "react";
// #endregion ------------------------ React -----------------------------------
// #region ------------ 3rd-Party Components / Libraries -----------------------
/* Routing */
import { HashRouter as Router, Route, Routes } from "react-router-dom";
/* Styling */
import { setAssetPath } from "@esri/calcite-components/dist/components";
/* Auth */
import esriId from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import Portal from "@arcgis/core/portal/Portal";

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
import config from "@/config";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================
// #region ======================== CONSTANTS ==================================
const StyledAppLayout = styled.div`
  // --- Sizing / Box-Model ---
  width: inherit;
  height: inherit;
  overflow-x: hidden;
  overflow-y: auto;
  /* padding: 1rem; */
  // --- Layout ---
  display: grid;
  grid-template-rows: min-content min-content;
  // --- Decorative ---
  background-color: var(--app-bg);
`;

// #endregion ===================== CONSTANTS ==================================
// #region =================== EXPORTED COMPONENT ==============================
function App() {
  // #region ------------------ Hooks (Resources) ------------------------------
  // #endregion --------------- Hooks (Resources) ------------------------------
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------
  // #region -------------------- Hooks (Other) --------------------------------
  useEffect(() => {
    // todo: this is temporary until we ditch auth
    // this handles coming back from authentication
    // check session storage for hash and search params and if they're AND there are none in the current url there add them to the url
    if (!window.location.hash && sessionStorage.getItem("hash")) {
      window.location.hash = sessionStorage.getItem("hash") as string;
    }

    // check for url hash and if they're there save them to session storage
    if (window.location.hash) {
      const hash = window.location.hash;
      sessionStorage.setItem("hash", hash);
    }

    // check for search params and if they're there save them to session storage
    if (window.location.search) {
      const search = window.location.search;
      sessionStorage.setItem("search", search);
    }

    // Auth
    const info = new OAuthInfo({
      appId: config.portal.appId,
      flowType: "authorization-code",
    });

    esriId.registerOAuthInfos([info]);
    const portal = new Portal({
      url: config.portal.url,
      authMode: "immediate",
    });

    portal.load().catch((error) => {
      console.error("Portal failed to load", error);
    });
  }, []);
  // #endregion ----------------- Hooks (Other) --------------------------------
  // #region ---------------- Supporting Functions -----------------------------
  // Styles
  setVH();
  setAssetPath("https://js.arcgis.com/calcite-components/2.11.1/assets");

  // #endregion ------------- Supporting Functions -----------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <StyledAppLayout>
                <Header />
                <Landing />
                <Footer />
              </StyledAppLayout>
            }
          />
          <Route
            path="/locations"
            element={
              <StyledAppLayout>
                <Header />
                <Locations />
                <Footer />
              </StyledAppLayout>
            }
          />
        </Routes>
      </Router>
    </AppContextProvider>
  );
  // #endregion -------------------- Render ------------------------------------
}

export default App;
// #endregion ================ EXPORTED COMPONENT ==============================
