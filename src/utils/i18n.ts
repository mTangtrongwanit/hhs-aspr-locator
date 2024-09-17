import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// defining path to translation files
import en_translation from "./locales/en.json";
import es_translation from "./locales/es.json";
import zh_translation from "./locales/zh.json";

i18next.use(initReactI18next).init({
  lng: "en", // define default language here
  debug: false, // provides console debug messages if true
  resources: {
    en: {
      translation: en_translation,
    },
    es: {
      translation: es_translation,
    },
    zh: {
      translation: zh_translation,
    },
  },
});
