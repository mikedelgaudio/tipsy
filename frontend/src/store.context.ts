import { createContext } from "react";
import { ToastService } from "./services/toast.service";
import { CalculationStore } from "./stores/calculation.store";

interface IStoreContext {
  calculationStore: CalculationStore;
}

const toastService = new ToastService();
const calculationStore = new CalculationStore(toastService);

export const StoreContext = createContext<IStoreContext>({
  calculationStore,
});
