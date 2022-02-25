import { SanitizedCurrency } from "../models/custom-models";

const toFixed = (num: number, fixed: number): string => {
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  const match = num.toString().match(re);
  if (!match || match[0] === "0") return "0.00";
  return match[0];
};

const validCurrency = (input: string): boolean => {
  if (!input) return false;
  const REGEX = /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
  return REGEX.test(input);
};

const sanitizeCurrency = (input: string): SanitizedCurrency => {
  if (!validCurrency(input)) {
    return { error: true, parsed: 0.0 };
  }
  try {
    const parsed = parseFloat(input);
    if (!parsed) {
      return { error: true, parsed: 0.0 };
    }
    return { error: false, parsed };
  } catch (e) {
    return { error: true, parsed: 0.0 };
  }
};

const currencyToStr = (input: number): string => {
  return toFixed(input, 2);
};

export { sanitizeCurrency, currencyToStr };
