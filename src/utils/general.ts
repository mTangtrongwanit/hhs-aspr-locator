/**
 * Checks if a value is "true" or true.
 * @param value Value to check for limited truthiness.
 * @returns Boolean true/false
 */
export const isTrue = (value?: string | boolean) =>
  !!(typeof value === "string" ? value.toLowerCase() === "true" : value);