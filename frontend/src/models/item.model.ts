export type Item = {
  id: string;
  personId: string;
  name: string;
  qty?: number;
  price: string;
  priceFloat: number;
  errors?: {
    name: boolean;
    price: boolean;
  };
};
