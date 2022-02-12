import * as actionTypes from "./calculation-types";

export const addPerson = () => {
  return {
    type: actionTypes.ADD_PERSON,
    payload: {},
  };
};

export const removePerson = (personId: string) => {
  return {
    type: actionTypes.REMOVE_PERSON,
    payload: {
      id: personId,
    },
  };
};

export const editPersonName = (personId: string, newName: string) => {
  return {
    type: actionTypes.EDIT_PERSON_NAME,
    payload: {
      id: personId,
      name: newName,
    },
  };
};

// Items

export const addItem = (personId: string) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      personId,
    },
  };
};

export const removeItem = (itemId: string) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: {
      id: itemId,
    },
  };
};

export const editItemName = (itemId: string, newName: string) => {
  return {
    type: actionTypes.EDIT_ITEM_NAME,
    payload: {
      id: itemId,
      name: newName,
    },
  };
};

export const editItemQty = (itemId: string, newQty: number) => {
  return {
    type: actionTypes.EDIT_ITEM_QTY,
    payload: {
      id: itemId,
      qty: newQty,
    },
  };
};

export const editItemPrice = (itemId: string, newPrice: number) => {
  return {
    type: actionTypes.EDIT_ITEM_PRICE,
    payload: {
      id: itemId,
      price: newPrice,
    },
  };
};

export const editEventTitle = (newTitle: string) => {
  return {
    type: actionTypes.EDIT_EVENT_TITLE,
    payload: {
      name: newTitle,
    },
  };
};

export const editEventTotal = (newTotal: number) => {
  return {
    type: actionTypes.EDIT_EVENT_TOTAL,
    payload: {
      total: newTotal,
    },
  };
};

export const restartEvent = () => {
  return {
    type: actionTypes.RESTART_EVENT,
    payload: {},
  };
};

export const recalculateEvent = () => {
  return {
    type: actionTypes.RECALCULATE_EVENT,
    payload: {},
  };
};
