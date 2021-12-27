import * as actionTypes from "./ui-types";

const INITIAL_STATE = {
  uiEditEventTitle: false,
};

const uiReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.UI_EDIT_EVENT_TITLE:
      return {
        ...state,
        uiEditEventTitle: action.payload.editing,
      };
    default:
      return state;
  }
};

export default uiReducer;
