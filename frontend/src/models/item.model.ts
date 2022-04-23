export type Item = {
  id: string;
  personId: string;
  name: string;
  qty?: number;
  price: string;
  priceFloat: number;
};

export type ItemMobx = {
  id: string;
  personId: string;
  name: string;
  qty?: number;
  price: string;
  priceFloat: number;
  errorName: boolean;
  errorPrice: boolean;
};
