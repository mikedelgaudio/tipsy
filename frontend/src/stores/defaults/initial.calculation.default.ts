import { v4 as uuidv4 } from "uuid";
import { CalculationStateMobx } from "../../models/calculation-state.mobx.model";

export const DEFAULT_STATE: CalculationStateMobx = {
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
      errorName: false,
    },
  ],
  items: [
    {
      id: "1a",
      personId: "1", // to split an item, modify the current to half then add to each person
      name: "Food Item 1",
      price: "0.00",
      priceFloat: 0.0,
      errorName: false,
      errorPrice: false,
    },
    {
      id: "2a",
      personId: "1",
      name: "Food Item 2",
      price: "0.00",
      priceFloat: 0.0,
      errorName: false,
      errorPrice: false,
    },
  ],
  event: {
    id: uuidv4(),
    name: "Event Title",
    total: "0.00",
    totalFloat: 0.0,
    tipTaxTotal: "0.00",
    tipTaxTotalFloat: 0.0,
    subtotalFloat: 0.0,
    errorName: false,
    errorPrice: false,
  },
};
