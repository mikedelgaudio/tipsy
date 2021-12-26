export interface Person {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  personId: string;
  name: string;
  qty: number;
  price: number;
}
