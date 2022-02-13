import * as actionTypes from "./ui-types";

const INITIAL_STATE = {
  uiEditEventTitle: false,
  uiEditPersonId: "",
  uiEditEventTotal: false,
};

const uiReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.UI_EDIT_EVENT_TITLE:
      return {
        ...state,
        uiEditEventTitle: action.payload.editing,
      };
    case actionTypes.UI_EDIT_PERSON:
      return {
        ...state,
        uiEditPersonId: action.payload.id,
      };
    case actionTypes.UI_EDIT_EVENT_TOTAL:
      return {
        ...state,
        uiEditEventTotal: action.payload.editing,
      };
    default:
      return state;
  }
};

export default uiReducer;
