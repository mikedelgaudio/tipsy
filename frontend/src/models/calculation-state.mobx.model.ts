import { CalculationEvent } from "./calculation-event.model";
import { ItemMobx } from "./item.model";
import { PersonMobx } from "./person.model";

export type CalculationStateMobx = {
  persons: PersonMobx[];
  items: ItemMobx[];
  event: CalculationEvent;
};
