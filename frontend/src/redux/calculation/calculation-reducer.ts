import * as actionTypes from "./calculation-types";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  persons: [
    {
      id: "1",
      name: "Your Name",
      subtotal: 0.0,
      tipAndTax: 0.0,
      totalDue: 0.0,
      uiEditPerson: false,
    },
  ],
  items: [
    {
      id: "1a",
      personId: "1",
      name: "First Food Item Name",
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
      return {
        ...state,
        persons: [
          ...state.persons,
          {
            id: uuidv4(),
            name: `Person ${state.persons.length + 1}`,
            subtotal: 0.0,
            tipAndTax: 0.0,
            totalDue: 0.0,
          },
        ],
      };
    case actionTypes.REMOVE_PERSON:
      if (state.persons.length < 2) return state;
      // display error?
      else
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
          person.id === action.payload.id
            ? { ...person, name: action.payload.name }
            : person;
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
          item.id === action.payload.id
            ? { ...item, name: action.payload.name }
            : item;
        }),
      };
    case actionTypes.EDIT_ITEM_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.EDIT_ITEM_PRICE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, price: +action.payload.price }
            : item
        ),
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
    default:
      return state;
  }
};

export default calculationReducer;
