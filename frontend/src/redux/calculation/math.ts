import { CalculationState, Item } from "../../models/custom-models";
import { currencyToStr } from "../../utilities/sanitize";

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
  const tempState = { ...data };

  tempState.persons.forEach((person) => {
    let subtotalBeforeTip = 0;

    // find items
    const personItems = tempState.items.filter(
      (item: Item) => person.id === item.personId
    );

    personItems.forEach((item) => {
      subtotalBeforeTip += item.priceFloat;
      item.price = currencyToStr(item.priceFloat);
    });
    person.subtotalFloat = subtotalBeforeTip;
    tempState.eventSubtotalFloat += subtotalBeforeTip;
  });

  // Calculate difference between total and subtotal
  tempState.eventTipTaxTotalFloat =
    data.eventTotalFloat - tempState.eventSubtotalFloat;

  tempState.eventTipTaxTotal = currencyToStr(tempState.eventTipTaxTotalFloat);

  // Validation if user types in wrong total overall
  if (
    tempState.eventTipTaxTotalFloat < 0 ||
    tempState.eventSubtotalFloat + tempState.eventTipTaxTotalFloat !==
      data.eventTotalFloat
  ) {
    console.error("TOTALS DO NOT ADD TOGETHER");
    // throw new Error("Display values do not compute together");
  }

  tempState.persons.forEach((person) => {
    const tipDollars =
      (person.subtotalFloat / tempState.eventSubtotalFloat) *
      tempState.eventTipTaxTotalFloat;

    person.totalDueFloat = person.subtotalFloat + tipDollars;

    person.tipAndTaxFloat = tipDollars / tempState.eventTipTaxTotalFloat;

    person.subtotal = currencyToStr(person.subtotalFloat);
    person.tipAndTax = currencyToStr(person.tipAndTaxFloat);
    person.totalDue = currencyToStr(person.totalDueFloat);
  });

  console.log(tempState);
  return tempState;
};
