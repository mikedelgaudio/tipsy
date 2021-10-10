import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  init: true,
  selected: localStorage?.theme || "lightmode",
  list: [
    { id: 0, name: "lightmode", title: "Light Mode" },
    { id: 1, name: "darkmode", title: "Dark Mode" },
  ],
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeView: (state, action) => {
      state.init = action.payload;
    },
    changeTheme: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { changeView, changeTheme } = viewSlice.actions;
export default viewSlice.reducer;
