import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { INITIAL_STATE } from "./calculation/initial";
import { loadState } from "./localStorage";
import rootReducer from "./rootReducer";

const persistedState = loadState();

const CURRENT_STATE = persistedState ? persistedState : INITIAL_STATE;

const STATE = {
  calculation: {
    ...CURRENT_STATE,
  },
};

const store = createStore(rootReducer, STATE, composeWithDevTools());

export default store;
