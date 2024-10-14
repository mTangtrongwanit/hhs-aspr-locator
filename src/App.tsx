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
  overflow-y: hidden;
  overflow-x: hidden;
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
    async unstable_dataStrategy({ request, matches }) {
      console.log("unstable_dataStrategy", request, matches);
      // Grab only the matches we need to run handlers for
      const matchesToLoad = matches.filter((m) => m.shouldLoad);
      // Run the handlers in parallel, logging before and after
      const results = await Promise.all(
        matchesToLoad.map(async (match) => {
          console.log(`Processing ${match.route.id}`);
          // Don't override anything - just resolve route.lazy + call loader
          const result = await match.resolve();
          return result;
        })
      );

      // Aggregate the results into a bn object of `routeId -> DataStrategyResult`
      return results.reduce(
        (acc, result, i) =>
          Object.assign(acc, {
            [matchesToLoad[i].route.id]: result,
          }),
        {}
      );
    },
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
      <RouterProvider router={router} />
    </AppContextProvider>
  );
  // #endregion -------------------- Render ------------------------------------
}

export default App;
// #endregion ================ EXPORTED COMPONENT ==============================
