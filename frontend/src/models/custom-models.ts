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

export interface UIState {
  uiEditEventTitle: boolean;
  uiEditPersonId: string;
  uiEditEventTotal: boolean;
}

export interface AppStore {
  calculation: CalculationState;
  ui: UIState;
}

export interface SanitizedCurrency {
  parsed: number;
  error: boolean;
}
