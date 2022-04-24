import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "utils/Constants";
const themeSlice = createSlice({
  name: "theme",
  initialState: { type: THEMES.DARK },
  reducers: {
    toggleTheme: (state, { payload }) => {
      state.type = payload;
    },
  },
});
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
