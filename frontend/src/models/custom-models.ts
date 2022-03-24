export interface Person {
  id: string;
  name: string;
  subtotal: string;
  subtotalFloat: number;
  tipAndTax: string;
  tipAndTaxFloat: number;
  totalDue: string;
  totalDueFloat: number;
}

export interface Item {
  id: string;
  personId: string;
  name: string;
  qty: number;
  price: string;
  priceFloat: number;
}

export interface CalculationState {
  persons: Person[];
  items: Item[];
  eventTitle: string;
  eventTotal: string;
  eventTotalFloat: number;
  eventTipTaxTotal: string;
  eventTipTaxTotalFloat: number;
  eventSubtotalFloat: number;
  eventId: string;
}

export interface AppStore {
  calculation: CalculationState;
}

export interface SanitizedCurrency {
  parsed: number;
  error: boolean;
}
