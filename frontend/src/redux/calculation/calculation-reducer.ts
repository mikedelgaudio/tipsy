import { Item, Person } from "../../models/custom-models";
import * as actionTypes from "./calculation-types";
import { v4 as uuidv4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  persons: [
    {
      id: uuidv4(),
      name: "Your Name",
      items: [
        {
          id: uuidv4(),
          name: "First Food Item Name",
          qty: 1,
          price: 0.0,
        },
      ],
      subtotal: 0.0,
      totalDue: 0.0,
    },
  ],
  eventTitle: "Default Event",
  eventTotal: 0.0,
  eventTipTotal: 0.0,
};

const calculationReducer = (state = INITIAL_STATE, action: PayloadAction) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {};
    case actionTypes.REMOVE_PERSON:
      return {};
    case actionTypes.EDIT_PERSON_NAME:
      return {};
    case actionTypes.ADD_ITEM:
      return {};
    case actionTypes.REMOVE_ITEM:
      return {};
    case actionTypes.EDIT_ITEM_NAME:
      return {};
    case actionTypes.EDIT_ITEM_QTY:
      return {};
    case actionTypes.EDIT_ITEM_PRICE:
      return {};
    case actionTypes.EDIT_EVENT_TITLE:
      return {};
    case actionTypes.EDIT_EVENT_TOTAL:
      return {};
    default:
      return state;
  }
};

export default calculationReducer;