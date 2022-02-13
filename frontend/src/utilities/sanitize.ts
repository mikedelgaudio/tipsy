const sanitizeStr = (input: string): string => {
  if (!input) return "";

  return input.trim();
};

const validCurrency = (input: string): boolean => {
  if (!input) return false;
  const REGEX = /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
  return REGEX.test(input);
};

const currencyRegex = /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;

export { sanitizeStr, validCurrency, currencyRegex };
