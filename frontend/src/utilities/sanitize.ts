const sanitizeStr = (input: string): string => {
  if (!input) return "";

  return input.trim();
};

export { sanitizeStr };
