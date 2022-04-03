import { CalculationState } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_STATE: CalculationState = {
  persons: [
    {
      id: "1",
      name: "Person 1",
      subtotal: "0.00",
      subtotalFloat: 0.0,
      tipAndTax: "0.00",
      tipAndTaxFloat: 0.0,
      totalDue: "0.00",
      totalDueFloat: 0.0,
    },
  ],
  items: [
    {
      id: "1a",
      personId: "1", // to split an item, modify the current to half then add to each person
      name: "Food Item 1",
      qty: 1,
      price: "0.00",
      priceFloat: 0.0,
    },
    {
      id: "2a",
      personId: "1",
      name: "Food Item 2",
      qty: 1,
      price: "0.00",
      priceFloat: 0.0,
    },
  ],
  eventTitle: "Event Title",
  eventTotal: "0.00",
  eventTotalFloat: 0.0,
  eventTipTaxTotal: "0.00",
  eventTipTaxTotalFloat: 0.0,
  eventSubtotalFloat: 0.0,
  eventId: uuidv4(),
};
