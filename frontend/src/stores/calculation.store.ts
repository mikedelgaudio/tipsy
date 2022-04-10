import { makeAutoObservable } from "mobx";
import { CalculationStateMobx } from "../models/calculation-state.mobx.model";
import { LOCAL_STORAGE_VAR } from "../utilities/variables";
import { DEFAULT_STATE } from "./defaults/initial.calculation.default";

export class CalculationStore {
  private state: CalculationStateMobx = DEFAULT_STATE;

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    localStorage.removeItem(LOCAL_STORAGE_VAR);
  }

  get eventTitle() {
    return this.state.event.title;
  }

  set eventTitle(value: string) {
    this.state.event.title = value;
  }
}
