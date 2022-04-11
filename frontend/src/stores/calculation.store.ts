import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { v4 as uuidv4 } from "uuid";
import { CalculationStateMobx } from "../models/calculation-state.mobx.model";
import { ToastService } from "../services/toast.service";
import { sanitizeCurrency } from "../utilities/sanitize";
import { LOCAL_STORAGE_VAR } from "../utilities/variables";
import { DEFAULT_STATE } from "./defaults/initial.calculation.default";

export class CalculationStore {
  state: CalculationStateMobx = DEFAULT_STATE;

  constructor(private readonly toastService: ToastService) {
    makeAutoObservable(this);
    makePersistable(this, {
      name: LOCAL_STORAGE_VAR,
      properties: ["state"],
      storage: window.localStorage,
    });
  }

  editEventTotal(total: string) {
    const { error, parsedFloat, parsedString } = sanitizeCurrency(total);

    const TOAST_ID = "EVENT_TOTAL";

    if (error) {
      this.toastService.error(
        TOAST_ID,
        "Error formatting event total price. Please verify your input.",
      );
      this.state.event.errors.total = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    this.state.event.errors.total = false;
    this.state.event.total = parsedString;
    this.state.event.totalFloat = parsedFloat;
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
