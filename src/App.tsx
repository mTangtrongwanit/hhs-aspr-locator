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

// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import "@/styles/index.css";

// import where needed to bring in i18n translation
import './utils/i18n';
import { useTranslation, Trans } from 'react-i18next';

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================
// #region ======================== CONSTANTS ==================================

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className="dev-placeholder" style={{ }}>App</div>
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

  // define and use the 't' function for translating content.
  // 'i18n' to get the i18n instance in order to change the language
  const { t, i18n } = useTranslation();

  // Can change language here
  // TODO: will need to tie this to a dropdown selector
  // const lng = 'es';
  // TODO: Need to tie this to a button, etc.  
  // i18n.changeLanguage(lng);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  const count = 3;

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
      <p>{t('title', { name: 'John' })}</p>
          <p>{t('description.part1')}</p>
          <p>{t('description.part2')}</p>
          <Trans i18nKey="userMessagesUnread" count={count}>
            You have {{ count }} unread message.
          </Trans>
          <div><button onClick={() => changeLanguage('en')}>English</button></div>
          <div><button onClick={() => changeLanguage('zh')}>Chinese (Simplified)</button></div>
    </AppContextProvider>
  );
  // #endregion -------------------- Render ------------------------------------
}

export default App;
// #endregion ================ EXPORTED COMPONENT ==============================
