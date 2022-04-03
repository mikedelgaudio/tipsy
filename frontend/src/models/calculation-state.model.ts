import { Item } from "./item.model";
import { Person } from "./person.model";

export type CalculationState = {
  persons: Person[];
  items: Item[];
  eventTitle: string;
  eventTotal: string;
  eventTotalFloat: number;
  eventTipTaxTotal: string;
  eventTipTaxTotalFloat: number;
  eventSubtotalFloat: number;
  eventId: string;
};
