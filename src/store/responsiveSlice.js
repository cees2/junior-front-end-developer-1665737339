import { createSlice } from "@reduxjs/toolkit";

const responsiveSlice = createSlice({
  name: "responsive",
  initialState: { isOpened: false },
  reducers: {
    toggleHamburgerMenu(state) {
      state.isOpened = !state.isOpened;
    },
  },
});

export const responsiveActions = responsiveSlice.actions;

export default responsiveSlice.reducer;
