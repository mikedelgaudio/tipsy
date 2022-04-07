import { makeAutoObservable } from "mobx";
import { CalculationStateMobx } from "../models/calculation-state.mobx.model";
import { DEFAULT_STATE } from "./defaults/initial.calculation.default";

export class CalculationStore {
  private state: CalculationStateMobx = DEFAULT_STATE;

  constructor() {
    makeAutoObservable(this);
  }

  // get event() {
  //   return this.state.event;
  // }

  // get items() {
  //   return this.state.items;
  // }

  // get persons() {
  //   return this.state.persons;
  // }
}
