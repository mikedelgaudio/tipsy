import * as actionTypes from "./ui-types";

export const uiEditEventTitle = (enabled: boolean) => {
  return {
    type: actionTypes.UI_EDIT_EVENT_TITLE,
    payload: {
      editing: enabled,
    },
  };
};
