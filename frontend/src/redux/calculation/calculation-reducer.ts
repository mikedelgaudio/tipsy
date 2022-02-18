import * as actionTypes from "./calculation-types";
import { v4 as uuidv4 } from "uuid";
import { calculate } from "./math";
import { errorToast5ms } from "../../components/shared/toasts/toast";
import { CalculationState } from "../../models/custom-models";
import { sanitizeCurrency } from "../../utilities/sanitize";

const INITIAL_STATE: CalculationState = {
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
      name: "First Food Item Name",
      qty: 1,
      price: "0.00",
      priceFloat: 0.0,
    },
    {
      id: "2a",
      personId: "1",
      name: "Second Food Item Name",
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

const calculationReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const seededPersonId = uuidv4();
      return {
        ...state,
        persons: [
          ...state.persons,
          {
            id: seededPersonId,
            name: `Person ${state.persons.length + 1}`,
            subtotal: "0.00",
            subtotalFloat: 0.0,
            tipAndTax: "0.00",
            tipAndTaxFloat: 0.0,
            totalDue: "0.00",
            totalDueFloat: 0.0,
          },
        ],
        items: [
          ...state.items,
          {
            id: uuidv4(),
            personId: seededPersonId,
            name: `Person ${state.persons.length + 1}'s Item`,
            qty: 1,
            price: "0.00",
            priceFloat: 0.0,
          },
        ],
      };
    case actionTypes.REMOVE_PERSON:
      if (state.persons.length < 2) {
        errorToast5ms("You cannot remove the last person!");
        return state;
      } else
        return {
          ...state,
          persons: state.persons.filter(
            (person) => person.id !== action.payload.id
          ),
          items: state.items.filter(
            (item) => item.personId !== action.payload.id
          ),
        };
    case actionTypes.EDIT_PERSON_NAME:
      return {
        ...state,
        persons: state.persons.map((person) => {
          if (person.id === action.payload.id) {
            return {
              ...person,
              name: action.payload.name,
            };
          } else return person;
        }),
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuidv4(),
            personId: action.payload.personId,
            name: `Item ${state.items.length + 1}`,
            qty: 1,
            price: "0.00",
            priceFloat: 0.0,
          },
        ],
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.EDIT_ITEM_NAME:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              name: action.payload.name,
            };
          } else return item;
        }),
      };
    case actionTypes.EDIT_ITEM_QTY:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: +action.payload.qty };
          } else return item;
        }),
      };
    case actionTypes.EDIT_ITEM_PRICE:
      // TODO
      // Rather than doing error checking in the calculation each time
      // Perform it here in each edit scenario
      // Alternatively dont trigger the parsing till the user exits the UI edit mode
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              price: action.payload.price,
              priceFloat: sanitizeCurrency(action.payload.price),
            };
          } else return item;
        }),
      };
    case actionTypes.EDIT_EVENT_TITLE:
      return {
        ...state,
        eventTitle: action.payload.title,
      };
    case actionTypes.EDIT_EVENT_TOTAL:
      return {
        ...state,
        eventTotal: action.payload.total,
        eventTotalFloat: sanitizeCurrency(action.payload.total),
      };
    case actionTypes.RESTART_EVENT:
      return INITIAL_STATE;
    case actionTypes.RECALCULATE_EVENT:
      // Dispatch whenever items or the length of people arr is modified
      // Preferably only when item numbers are modified
      return calculate(state);
    default:
      return state;
  }
};

export default calculationReducer;
