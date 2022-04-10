export type CalculationEvent = {
  id: string;
  name: string;
  total: string;
  totalFloat: number;
  tipTaxTotal: string;
  tipTaxTotalFloat: number;
  subtotalFloat: number;
  errors: {
    name: boolean;
    total: boolean;
  };
};
