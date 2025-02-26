/**
 * Checks if a value is "true" or true.
 * @param value Value to check for limited truthiness.
 * @returns Boolean true/false
 */
export const isTrue = (value?: string | boolean) =>
  !!(typeof value === "string" ? value.toLowerCase() === "true" : value);


export const fetchEnTranslation = async () => {
  // Need to put this in an async function that import
  // await the files via fetch
  const enFetch = await fetch(`/locales/en.json`);
  // process the retrieved files as JSON.
  // The await is used as a promise to wait upon before intializing i18next 
  const enResult = await enFetch.json();

  return enResult;
};
