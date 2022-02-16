const toFixed = (num: number, fixed: number): string => {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)![0];
};

const validCurrency = (input: string): boolean => {
  if (!input) return false;
  const REGEX = /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
  return REGEX.test(input);
};

const sanitizeCurrency = (input: string): number => {
  if (!validCurrency(input)) {
    // display error?
    return 0.0;
  }
  try {
    const parsed = parseFloat(input);
    if (!parsed) {
      // display error?
      return 0.0;
    }
    return parsed;
  } catch (e) {
    // display error?
    return 0.0;
  }
};

const currencyToStr = (input: number): string => {
  return toFixed(input, 2);
};

export { sanitizeCurrency, currencyToStr };
