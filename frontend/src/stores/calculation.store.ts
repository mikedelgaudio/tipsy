import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { CalculationStateMobx } from "../models/calculation-state.mobx.model";
import { LOCAL_STORAGE_VAR } from "../utilities/variables";
import { DEFAULT_STATE } from "./defaults/initial.calculation.default";

export class CalculationStore {
  state: CalculationStateMobx = DEFAULT_STATE;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: LOCAL_STORAGE_VAR,
      properties: ["state"],
      storage: window.localStorage,
    });
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
