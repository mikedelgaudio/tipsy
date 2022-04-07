import { CalculationEvent } from "./calculation-event.model";
import { Item } from "./item.model";
import { Person } from "./person.model";

export type CalculationStateMobx = {
  persons: Person[];
  items: Item[];
  event: CalculationEvent;
};
