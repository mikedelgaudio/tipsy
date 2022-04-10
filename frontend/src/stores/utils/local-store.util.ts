import { CalculationStateMobx } from "../../models/calculation-state.mobx.model";

export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    // TODO: Provide warning to user?
    console.warn(err);
    return undefined;
  }
};

export const saveState = (state: CalculationStateMobx) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    // TODO: Provide warning to user?
    console.warn(err);
  }
};
