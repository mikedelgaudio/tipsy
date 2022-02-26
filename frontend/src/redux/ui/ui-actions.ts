import * as actionTypes from "./ui-types";

export const uiEditPerson = (personId: string) => {
  return {
    type: actionTypes.UI_EDIT_PERSON,
    payload: {
      id: personId,
    },
  };
};
