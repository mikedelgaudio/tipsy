const checkStr = (string: string) => {
  if (!string)
    throw new Error("Input string is undefined or null, please provide input.");
  if (typeof string !== "string")
    throw new Error(" Input must be of type string.");
  if (string.length === 0)
    throw new Error("Input string must be greater than 0 in length.");
  if (!string.trim().length)
    throw new Error(" Input string contained only whitespace.");
};

export { checkStr };
