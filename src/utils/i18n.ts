import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

// defining path to translation files
// import en_translation from "./locales/en.json";
//import es_translation from "./locales/es.json";
//import zh_translation from "./locales/zh.json";

// Need to put this in an async function that import
// await the files via fetch
// const enFetch = await fetch(`/locales/en.json`);
// process the retrieved files as JSON.
// The await is used as a promise to wait upon before intializing i18next 
//const enResult = await enFetch.json();


/* const esFetch = await fetch(`/locales/es.json`);

const esResult = await esFetch.json();

const zhFetch = await fetch(`/locales/zh.json`);

const zhResult = await zhFetch.json(); */

// Using a Promise.all to wait for potentially multiple language json files
//Promise.all([enResult, esResult, zhResult]).then((values) => {
/* Promise.all([enResult]).then((values) => {

  const en_translation = values[0];

  const es_translation = values[1];

  const zh_translation = values[2];

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

}); */

/* i18next.use(initReactI18next).init({
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
 */

// The "Backend" library appears to be smart enough to grab the translation files 
// if structured as "public/locales/lng/translation.json"
i18next.use(initReactI18next).use(Backend).init({
  lng: "en", // define default language here
  fallbackLng: 'en',
  // defaultNS: 'translation', //  specify grabbing "translation" json files from inside the "lng" folders
  debug: true, // provides console debug messages if true
  backend: {
    loadPath: 'https://esrips.github.io/hhs-aspr-locator/pr-preview/pr-166/locales/{{lng}}.json', // Will target the ghpages preview used by the PR
    // loadPath: '/locales/{{lng}}/{{ns}}.json', // should pull from the "locales" folder in the public folder (while developing) or at root of app when deployed.
  }
});