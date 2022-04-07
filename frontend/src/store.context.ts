import { createContext } from "react";
import { CalculationStore } from "./stores/calculation.store";

interface IStoreContext {
  calculationStore: CalculationStore;
}

const calculationStore = new CalculationStore();

export const StoreContext = createContext<IStoreContext>({
  calculationStore,
});
