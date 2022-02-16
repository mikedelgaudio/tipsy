import { CalculationState } from "../../models/custom-models";

const validInput = (userInput: any) => {
  if (!userInput || !userInput?.persons || !userInput?.totals) return false;

  const overall = userInput?.totals?.overall;
  if (!overall || typeof overall !== "number") return false;

  const id = userInput?.persons[0]?.id;
  if (!id) return false;

  return true;
};

const dispatchError = (message: string) => {};

/**
 * This may become a costly operation
 * look forward to breaking it down / memoize
 * @param data
 * @returns
 */
export const calculate = (data: CalculationState) => {
  // Relying upon error checking as the user
  // exits UI edit mode. Catch the error
  // early on rather than waiting for this
  // expensive call to finish.

  return data;
};
