import { SanitizedCurrency } from "../models";

const toFixed = (num: number, fixed: number): string => {
  // const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  // const match = num.toString().match(re);
  // if (!match || match[0] === "0") return "0.00";
  // return match[0];
  return num.toFixed(fixed);
};

const validCurrency = (input: string): boolean => {
  if (!input) return false;
  const REGEX = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;
  return REGEX.test(input);
};

const sanitizeCurrency = (input: string): SanitizedCurrency => {
  const symbolsRemoved = removeDollarOrComma(input);
  if (!validCurrency(symbolsRemoved)) {
    return { error: true, parsedFloat: 0.0, parsedString: symbolsRemoved };
  }
  try {
    const parsed = parseFloat(symbolsRemoved);
    if (!parsed && parsed !== 0) {
      return { error: true, parsedFloat: 0.0, parsedString: symbolsRemoved };
    }
    return { error: false, parsedFloat: parsed, parsedString: symbolsRemoved };
  } catch (e) {
    return { error: true, parsedFloat: 0.0, parsedString: symbolsRemoved };
  }
};

const removeDollarOrComma = (input: string): string => {
  return input.replace(/\$|,/g, "");
};

const currencyToStr = (input: number): string => {
  return toFixed(input, 2);
};

const validString = (string: string): boolean => {
  if (!string) return false;
  if (string.length === 0) return false;
  if (!string.trim().length) return false;

  return true;
};

export { sanitizeCurrency, currencyToStr, removeDollarOrComma, validString };
