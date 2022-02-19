import {
  dismissAllToast,
  warnToast,
} from "../../components/shared/toasts/toast";
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
  dismissAllToast(); // this needs to be fixed

  // Reset values
  tempState.eventSubtotalFloat = 0.0;
  tempState.eventTipTaxTotalFloat = 0.0;

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

    // Reset values
    person.totalDueFloat = 0.0;
    person.tipAndTaxFloat = 0.0;
  });

  // Calculate difference between total and subtotal
  tempState.eventTipTaxTotalFloat =
    tempState.eventTotalFloat - tempState.eventSubtotalFloat;

  tempState.eventTipTaxTotal = currencyToStr(tempState.eventTipTaxTotalFloat);

  // Validation if user types in wrong total overall
  if (
    tempState.eventTipTaxTotalFloat < 0 ||
    tempState.eventSubtotalFloat + tempState.eventTipTaxTotalFloat !==
      tempState.eventTotalFloat
  ) {
    warnToast("Check your values, the totals do not add up!");
    return data;
  }

  // TODO:
  // If the state is the same, maybe break out early to save time?
  tempState.persons.forEach((person) => {
    const tipDollars =
      (person.subtotalFloat / tempState.eventSubtotalFloat) *
      tempState.eventTipTaxTotalFloat;

    person.totalDueFloat = person.subtotalFloat + tipDollars || 0.0;
    person.tipAndTaxFloat = tipDollars || 0.0;

    person.subtotal = currencyToStr(person.subtotalFloat);
    person.tipAndTax = currencyToStr(person.tipAndTaxFloat);
    person.totalDue = currencyToStr(person.totalDueFloat);
  });

  return tempState;
};
