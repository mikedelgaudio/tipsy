import { combineReducers } from "redux";
import calculationReducer from "./calculation/calculation-reducer";
import uiReducer from "./ui/ui-reducer";
// we can have different reducers in our app
// this combine allows us to combine them

const rootReducer = combineReducers({
  calculation: calculationReducer,
  ui: uiReducer,
});

export default rootReducer;
