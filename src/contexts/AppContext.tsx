// #region ========================= IMPORTS ===================================
// #region ---------------------- React ---------------------------------
import { createContext, useContext } from "react";
// #endregion ------------------- React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------

// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region ------------------------ Resources ----------------------------------
import { AppContextType, AppContextProps } from "./AppContext.types.tsx";

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProps) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    // the below text is for developers not for users. It does not need to be translated
    throw new Error(
      "Cannot use 'useAppContext' outside of a AppContextProvider",
    );
  }
  return appContext;
};
// #endregion =================== EXPORTED COMPONENT ==============================
