import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { v4 as uuidv4 } from "uuid";
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

  editEventTotal(total: string, totalFloat: number) {
    this.state.event.total = total;
    this.state.event.totalFloat = totalFloat;
  }

  recalculate() {
    // TODO
  }

  reset() {
    localStorage.removeItem(LOCAL_STORAGE_VAR);
    this.state = DEFAULT_STATE;
    this.state.event.id = uuidv4();
  }

  get eventTitle() {
    return this.state.event.name;
  }

  set eventTitle(value: string) {
    this.state.event.name = value;
  }
}
