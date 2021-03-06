import { configure, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { v4 as uuidv4 } from "uuid";
import { CalculationStateMobx } from "../models/calculation-state.mobx.model";
import { Item } from "../models/item.model";
import { Person } from "../models/person.model";
import { ToastService } from "../services/toast.service";
import {
  currencyToStr,
  sanitizeCurrency,
  validString,
} from "../utilities/sanitize";
import {
  ERROR_INPUT_EVENT,
  ERROR_INPUT_NAME,
  ERROR_INPUT_PRICE,
  LOCAL_STORAGE_VAR,
} from "../utilities/variables";
import { DEFAULT_STATE } from "./defaults/initial.calculation.default";

configure({ enforceActions: "observed" });
export class CalculationStore {
  state: CalculationStateMobx = DEFAULT_STATE;

  constructor(private readonly toastService: ToastService) {
    makeAutoObservable(this);
    makePersistable(this, {
      name: LOCAL_STORAGE_VAR,
      properties: ["state"],
      storage: window.localStorage,
      debugMode: false,
    }).then(() => {
      const checkForErrors = () => {
        if (this.event.errorName)
          this.toastService.error(
            this.event.id,
            ERROR_INPUT_NAME("event name"),
          );
        if (this.event.errorPrice)
          this.toastService.error(
            this.event.id,
            ERROR_INPUT_PRICE("event price"),
          );

        this.persons.forEach(p => {
          if (p.errorName)
            this.toastService.error(this.event.id, ERROR_INPUT_NAME(p.name));
        });

        this.items.forEach(i => {
          if (i.errorName)
            this.toastService.error(this.event.id, ERROR_INPUT_NAME(i.name));
          if (i.errorPrice)
            this.toastService.error(this.event.id, ERROR_INPUT_PRICE(i.name));
        });
      };
      checkForErrors();
    });
  }

  addPerson() {
    const seededId = uuidv4();

    const person: Person = {
      id: seededId,
      name: `Person ${this.state.persons.length + 1}`,
      subtotal: "0.00",
      subtotalFloat: 0.0,
      tipAndTax: "0.00",
      tipAndTaxFloat: 0.0,
      totalDue: "0.00",
      totalDueFloat: 0.0,
      errorName: false,
    };

    const item: Item = {
      id: uuidv4(),
      personId: seededId,
      name: `Person ${this.state.persons.length + 1}'s Item`,
      price: "0.00",
      priceFloat: 0.0,
      errorName: false,
      errorPrice: false,
    };

    this.state.persons.push(person);
    this.state.items.push(item);
  }

  deletePerson(personId: string) {
    this.state.persons = this.state.persons.filter(
      person => person.id !== personId,
    );

    const itemIds = this.state.items.map((item: Item) => {
      if (item.personId === personId) return item.id;
    });

    this.state.items = this.state.items.filter(
      item => item.personId !== personId,
    );

    this.recalculate();

    const TOAST_ID_NAME = `PERSON_NAME_${personId}`;
    this.toastService.clear(TOAST_ID_NAME);

    itemIds.forEach((id?: string) => {
      const TOAST_ID_ITEM_NAME = `ITEM_NAME_${id}`;
      const TOAST_ID_ITEM_PRICE = `ITEM_PRICE_${id}`;
      this.toastService.clear(TOAST_ID_ITEM_NAME);
      this.toastService.clear(TOAST_ID_ITEM_PRICE);
    });
  }

  editPersonName(personId: string, name: string) {
    const person = this.getPerson(personId);
    if (!person) return;

    const TOAST_ID = `PERSON_NAME_${person.id}`;

    if (!validString(name)) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_NAME(person.name));
      person.errorName = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    person.errorName = false;
    person.name = name.trim();
  }

  addItem(personId: string, data?: Item) {
    if (data) {
      this.state.items.push(data);
      return;
    }

    const item: Item = {
      id: uuidv4(),
      personId,
      name: `Item ${this.state.items.length + 1}`,
      price: "0.00",
      priceFloat: 0.0,
      errorName: false,
      errorPrice: false,
    };

    this.state.items.push(item);
  }

  deleteItem(itemId: string) {
    this.state.items = this.state.items.filter(item => item.id !== itemId);
    const TOAST_ID = `ITEM_PRICE_${itemId}`;
    this.toastService.clear(TOAST_ID);
    this.recalculate();
  }

  editItemName(itemId: string, name: string) {
    const item = this.getItem(itemId);
    if (!item) return;

    const TOAST_ID = `ITEM_NAME_${item.id}`;

    if (!validString(name)) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_NAME(item.name));
      item.errorName = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    item.errorName = false;
    item.name = name.trim();
  }

  editItemPrice(itemId: string, price: string) {
    const item = this.getItem(itemId);
    if (!item) return;

    const { error, parsedFloat, parsedString } = sanitizeCurrency(price);
    const TOAST_ID = `ITEM_PRICE_${item.id}`;

    if (error) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_PRICE(item.name));
      item.errorPrice = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    item.errorPrice = false;
    item.price = parsedString;
    item.priceFloat = parsedFloat;
    this.recalculate();
  }

  // TODO:
  // Watch out when editing items - must update both instances
  // Watch out when deleting items - must either update both or resolve to full amount for other person
  // Watch out when deleting person - must delete item or update to full amount for other person
  splitItem(itemId: string, desiredPersonId: string) {
    // Add item to desired person
    const item = this.getItem(itemId);
    if (!item) return;

    const splitPriceFloat = Math.ceil(item.priceFloat / 2);
    const splitPrice = currencyToStr(splitPriceFloat);
    const splitItem: Item = {
      id: uuidv4(), // ! Should this be the same as the original id or new id for tracking?
      personId: desiredPersonId,
      name: item.name,
      price: splitPrice,
      priceFloat: splitPriceFloat,
      errorName: item.errorName,
      errorPrice: item.errorPrice,
    };
    this.addItem(desiredPersonId, splitItem);

    // Edit item from original person
    this.editItemPrice(item.id, splitPrice);

    // Recalculate
    this.recalculate();
  }

  getItem(itemId: string) {
    const item = this.state.items.find(item => item.id === itemId);
    if (!item) return null;
    return item;
  }

  getPerson(personId: string) {
    const person = this.state.persons.find(person => person.id === personId);
    if (!person) return null;
    return person;
  }

  getPersonItems(personId: string): Item[] {
    return this.items.filter((item: Item) => {
      if (item.personId === personId) return item;
    });
  }

  get eventName() {
    return this.state.event.name;
  }

  set eventName(name: string) {
    const TOAST_ID = "EVENT_NAME";

    if (!validString(name)) {
      this.toastService.error(TOAST_ID, ERROR_INPUT_EVENT());
      this.state.event.errorName = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    this.state.event.errorName = false;
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
      this.state.event.errorPrice = true;
      return;
    }

    this.toastService.clear(TOAST_ID);
    this.state.event.errorPrice = false;
    this.state.event.total = parsedString;
    this.state.event.totalFloat = parsedFloat;
    this.recalculate();
  }

  get eventTipTaxTotal() {
    return this.state.event.tipTaxTotal;
  }

  get persons() {
    return this.state.persons;
  }

  get items() {
    return this.state.items;
  }

  get event() {
    return this.state.event;
  }

  recalculate() {
    const TOAST_ID = "RECALC_WRONG";
    this.event.subtotalFloat = 0;

    this.persons.forEach((person: Person) => {
      let subtotalBeforeTip = 0;

      // Find items
      const items = this.getPersonItems(person.id);

      items.forEach((item: Item) => {
        subtotalBeforeTip += item.priceFloat;
        item.price = currencyToStr(item.priceFloat);
      });

      person.subtotalFloat = subtotalBeforeTip;
      this.event.subtotalFloat += subtotalBeforeTip;

      // Reset
      person.totalDueFloat = 0.0;
      person.tipAndTaxFloat = 0.0;
    });

    if (this.event.subtotalFloat === 0) {
      this.event.tipTaxTotalFloat = 0;
      this.event.tipTaxTotal = currencyToStr(this.event.tipTaxTotalFloat);
      return;
    }

    this.event.tipTaxTotalFloat =
      this.event.totalFloat - this.event.subtotalFloat;

    this.event.tipTaxTotal = currencyToStr(this.event.tipTaxTotalFloat);

    this.event.total = currencyToStr(this.event.totalFloat);

    if (
      this.event.tipTaxTotalFloat < 0 ||
      this.event.subtotalFloat + this.event.tipTaxTotalFloat !==
        this.event.totalFloat
    ) {
      // Throw
      this.toastService.warn(
        TOAST_ID,
        "Check your price values. The total does not add up correctly.",
      );
      return;
    }

    this.toastService.clear(TOAST_ID);
    // TODO: If the state is the same, break early?

    this.persons.forEach((person: Person) => {
      const tipDollars =
        (person.subtotalFloat / this.event.subtotalFloat) *
        this.event.tipTaxTotalFloat;

      person.totalDueFloat = person.subtotalFloat + tipDollars || 0.0;

      person.tipAndTaxFloat = tipDollars || 0.0;

      person.subtotal = currencyToStr(person.subtotalFloat);
      person.tipAndTax = currencyToStr(person.tipAndTaxFloat);
      person.totalDue = currencyToStr(person.totalDueFloat);
    });
  }

  reset() {
    this.toastService.clear();
    localStorage.removeItem(LOCAL_STORAGE_VAR);
    this.state = DEFAULT_STATE;
    this.state.event.id = uuidv4();
  }
}
