import { UIState } from "../../models/custom-models";
import * as actionTypes from "./ui-types";

const INITIAL_STATE: UIState = {
  uiEditEventTitle: false,
  uiEditPersonId: "",
  uiEditEventTotal: false,
};

const uiReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.UI_EDIT_PERSON:
      return {
        ...state,
        uiEditPersonId: action.payload.id,
      };
    default:
      return state;
  }
};

export default uiReducer;
