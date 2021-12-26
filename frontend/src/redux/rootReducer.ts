import { combineReducers } from "redux";
import calculationReducer from "./calculation/calculation-reducer";
// we can have different reducers in our app
// this combine allows us to combine them

const rootReducer = combineReducers({
  calculation: calculationReducer,
});

export default rootReducer;
