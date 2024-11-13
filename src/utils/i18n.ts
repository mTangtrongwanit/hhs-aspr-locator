import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';


// defining path to translation files
//import en_translation from "./locales/en.json";
//import es_translation from "./locales/es.json";
//import zh_translation from "./locales/zh.json";

// The "Backend" library appears to be smart enough to grab the translation files 
// if structured as "public/locales/lng/translation.json"
i18next.use(initReactI18next).use(Backend).init({
  lng: "en", // define default language here
  fallbackLng: 'en',
  preload: ['en', 'es', 'zh'], // array of lng folders to target for preload from "public/locales"
  defaultNS: 'translation', //  specify grabbing "translation" json files from inside the "lng" folders
  debug: true, // provides console debug messages if true
});
