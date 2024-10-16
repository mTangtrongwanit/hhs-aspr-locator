// #region ========================= IMPORTS ===================================
// #region --------------------------- React -----------------------------------
import { useEffect } from "react";
// #endregion ------------------------ React -----------------------------------
// #region ------------ 3rd-Party Components / Libraries -----------------------
/* Routing */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  }
);
// #endregion ===================== CONSTANTS ==================================
// #region =================== EXPORTED COMPONENT ==============================
function App() {
  // #region ------------------ Hooks (Resources) ------------------------------
  // #endregion --------------- Hooks (Resources) ------------------------------
  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------
  // #region -------------------- Hooks (Other) --------------------------------
  useEffect(() => {
    const login = async () => {
      if (!config) {
        return;
      }

      // Auth
      const info = new OAuthInfo({
        appId: config.portal.appId,
        flowType: "authorization-code",
      });

      esriId.registerOAuthInfos([info]);
      try {
        const portal = new Portal({
          url: config.portal.url,
          authMode: "immediate",
        });
        await esriId.checkSignInStatus(info.portalUrl);
        const account = await portal.load();

        if (account.urlKey) {
          console.log("account", account);
        } else {
          const error = new Error(
            `Invalid account, please log in to an account associated with the lahsa.maps.arcgis.com organization`
          );
          alert(error.message);
          esriId.destroyCredentials();
          throw error;
        }
      } catch (error) {
        const message = new Error(
          `Invalid organization, please log in to an account associated with the https://dhhs.maps.arcgis.com/ organization`
        );
        alert(message.message);
        esriId.destroyCredentials();
        throw error;
      }
    };

    login();
  }, [config]);
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