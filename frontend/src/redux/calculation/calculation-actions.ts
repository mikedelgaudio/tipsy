import * as actionTypes from "./calculation-types";

export const addPerson = () => {
  return {
    type: actionTypes.ADD_PERSON,
    payload: {},
  };
};

export const deletePerson = (personId: string) => {
  return {
    type: actionTypes.DELETE_PERSON,
    payload: {
      id: personId,
    },
  };
};

export const editPersonName = (
  personId: string,
  newName: string | undefined,
) => {
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

export const deleteItem = (itemId: string) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: {
      id: itemId,
    },
  };
};

export const editItemName = (itemId: string, newName: string | undefined) => {
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

export const editItemPrice = (
  itemId: string,
  newPrice: string,
  newPriceFloat: number,
) => {
  return {
    type: actionTypes.EDIT_ITEM_PRICE,
    payload: {
      id: itemId,
      price: newPrice,
      priceFloat: newPriceFloat,
    },
  };
};

export const editEventTitle = (newTitle: string) => {
  return {
    type: actionTypes.EDIT_EVENT_TITLE,
    payload: {
      title: newTitle,
    },
  };
};

export const editEventTotal = (newTotal: string, newTotalFloat: number) => {
  return {
    type: actionTypes.EDIT_EVENT_TOTAL,
    payload: {
      total: newTotal,
      totalFloat: newTotalFloat,
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
