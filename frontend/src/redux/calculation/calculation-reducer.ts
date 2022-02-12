import * as actionTypes from "./calculation-types";
import { v4 as uuidv4 } from "uuid";
import { calculate } from "./math";
import { notifyError } from "../../components/shared/toasts/toast";

const INITIAL_STATE = {
  persons: [
    {
      id: "1",
      name: "Your Name",
      subtotal: 0.0,
      tipAndTax: 0.0,
      totalDue: 0.0,
    },
  ],
  items: [
    {
      id: "1a",
      personId: "1", // splitting an item you would use an array
      name: "First Food Item Name",
      qty: 1,
      price: 0.0,
    },
    {
      id: "2a",
      personId: "1",
      name: "Second Food Item Name",
      qty: 1,
      price: 0.0,
    },
  ],
  eventTitle: "Event Title",
  eventTotal: 1,
  eventTipTaxTotal: 0.0,
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
            subtotal: 0.0,
            tipAndTax: 0.0,
            totalDue: 0.0,
          },
        ],
        items: [
          ...state.items,
          {
            id: uuidv4(),
            personId: seededPersonId,
            name: `Person ${state.persons.length + 1}'s Item`,
            qty: 1,
            price: 0,
          },
        ],
      };
    case actionTypes.REMOVE_PERSON:
      if (state.persons.length < 2) {
        notifyError("You cannot remove the last person!");
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
            id: action.payload.id,
            personId: action.payload.personId,
            name: action.payload.name,
            qty: action.payload.qty,
            price: action.payload.price,
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
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, price: +action.payload.price };
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
        eventTotal: +action.payload.total,
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
