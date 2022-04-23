export type CalculationEvent = {
  id: string;
  name: string;
  total: string;
  totalFloat: number;
  tipTaxTotal: string;
  tipTaxTotalFloat: number;
  subtotalFloat: number;
  errorName: boolean;
  errorPrice: boolean;
};
