import { makeAutoObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { v4 as uuidv4 } from "uuid";
import { CalculationStateMobx } from "../models/calculation-state.mobx.model";
import { ItemMobx } from "../models/item.model";
import { PersonMobx } from "../models/person.model";
import { ToastService } from "../services/toast.service";
import { sanitizeCurrency, validString } from "../utilities/sanitize";
import {
  ERROR_INPUT_EVENT,
  ERROR_INPUT_NAME,
  ERROR_INPUT_PRICE,
  LOCAL_STORAGE_VAR,
} from "../utilities/variables";
import { DEFAULT_STATE } from "./defaults/initial.calculation.default";

export class CalculationStore {
  state: CalculationStateMobx = DEFAULT_STATE;

  constructor(private readonly toastService: ToastService) {
    makeAutoObservable(this);
    makePersistable(this, {
      name: LOCAL_STORAGE_VAR,
      properties: ["state"],
      storage: window.localStorage,
      debugMode: true,
    });
  }

  addPerson() {
    const seededId = uuidv4();

    const person: PersonMobx = {
      id: seededId,
      name: `Person ${this.state.persons.length + 1}`,
      subtotal: "0.00",
      subtotalFloat: 0.0,
      tipAndTax: "0.00",
      tipAndTaxFloat: 0.0,
      totalDue: "0.00",
      totalDueFloat: 0.0,
      errors: {
        name: false,
      },
    };

    const item: ItemMobx = {
      id: uuidv4(),
      personId: seededId,
      name: `Person ${this.state.persons.length + 1}'s Item`,
      price: "0.00",
      priceFloat: 0.0,
      errors: {
        name: false,
        price: false,
      },
    };

    this.state.persons.push(person);
    this.state.items.push(item);
  }

  deletePerson(personId: string) {
    this.state.persons.filter(person => person.id !== personId);
    this.state.items.filter(item => item.personId !== personId);
  }

  editPersonName(personId: string, name: string) {
    const person = this.state.persons.find(person => person.id === personId);
    if (!person) return;

    const TOAST_ID = `PERSON_NAME_${person.id}`;

    if (!validString(name)) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_NAME(`${person.name}`));
      person.errors.name = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    person.errors.name = false;
    person.name = name.trim();
  }

  addItem(personId: string) {
    const item: ItemMobx = {
      id: uuidv4(),
      personId,
      name: `Item ${this.state.items.length + 1}`,
      price: "0.00",
      priceFloat: 0.0,
      errors: {
        name: false,
        price: false,
      },
    };

    this.state.items.push(item);
  }

  deleteItem(itemId: string) {
    this.state.items.filter(item => item.id !== itemId);
  }

  editItemName(itemId: string, name: string) {
    const item = this.state.items.find(item => item.id === itemId);
    if (!item) return;

    const TOAST_ID = `ITEM_NAME_${item.id}`;

    if (!validString(name)) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_NAME(`${item.name}`));
      item.errors.name = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    item.errors.name = false;
    item.name = name.trim();
  }

  editItemPrice(itemId: string, price: string) {
    const item = this.state.items.find(item => item.id === itemId);
    if (!item) return;

    const { error, parsedFloat, parsedString } = sanitizeCurrency(price);
    const TOAST_ID = `ITEM_PRICE_${item.id}`;

    if (error) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_PRICE("item"));
      item.errors.price = true;
    }

    this.toastService.clear(TOAST_ID);
    item.errors.price = false;
    item.price = parsedString;
    item.priceFloat = parsedFloat;
  }

  get eventName() {
    return this.state.event.name;
  }

  set eventName(name: string) {
    const TOAST_ID = "EVENT_NAME";

    if (!validString(name)) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_EVENT());
      this.state.event.errors.name = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    this.state.event.errors.name = false;
    this.state.event.name = name.trim();
  }

  get eventTotal() {
    return this.state.event.total;
  }

  editEventTotal(total: string) {
    const { error, parsedFloat, parsedString } = sanitizeCurrency(total);

    const TOAST_ID = "EVENT_TOTAL";

    if (error) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_PRICE("event total price"));
      this.state.event.errors.total = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    const v = observable.map(this.state.event.errors);
    // need to turn into observables and it seems state does not save nested obj
    v.set("total", false);
    this.state.event.total = parsedString;
    this.state.event.totalFloat = parsedFloat;
  }

  get eventTipTaxTotal() {
    return this.state.event.tipTaxTotal;
  }

  recalculate() {
    // TODO
  }

  reset() {
    localStorage.removeItem(LOCAL_STORAGE_VAR);
    this.state = DEFAULT_STATE;
    this.state.event.id = uuidv4();
  }
}
