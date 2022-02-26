import { combineReducers } from "redux";
import calculationReducer from "./calculation/calculation-reducer";

const rootReducer = combineReducers({
  calculation: calculationReducer,
});

export default rootReducer;
