import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

// The "Backend" library can be given a "loadPath" to grab the translation files 
// if structured as "public/locales/{lng}.json"
i18next.use(initReactI18next).use(Backend).init({
  lng: "en", // define default language here
  fallbackLng: 'en',
  debug: false, // provides console debug messages if true
  backend: {
    // NOTE: This "loadPath" must be updated to target the location where locale files are located 
    loadPath: 'https://esrips.github.io/hhs-aspr-locator/pr-preview/pr-166/locales/{{lng}}.json', // Will target the ghpages preview used by the PR
  }
});