// import { configureStore } from "@reduxjs/toolkit";
// import viewReducer from "./viewSlice";

// export default configureStore({
//   reducer: {
//     view: viewReducer,
//   },
// });
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
