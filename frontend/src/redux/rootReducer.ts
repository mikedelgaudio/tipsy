import { combineReducers } from "redux";
import calculationReducer from "./calculation/calculation-reducer";
import uiReducer from "./ui/ui-reducer";

const rootReducer = combineReducers({
  calculation: calculationReducer,
  ui: uiReducer,
});

export default rootReducer;
