export type Person = {
  id: string;
  name: string;
  subtotal: string;
  subtotalFloat: number;
  tipAndTax: string;
  tipAndTaxFloat: number;
  totalDue: string;
  totalDueFloat: number;
};

export type PersonMobx = {
  id: string;
  name: string;
  subtotal: string;
  subtotalFloat: number;
  tipAndTax: string;
  tipAndTaxFloat: number;
  totalDue: string;
  totalDueFloat: number;
  errors: {
    name: boolean;
  };
};
