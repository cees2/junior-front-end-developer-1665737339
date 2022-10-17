import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    currentMessageIndex: -1,
  },
  reducers: {
    resetIndex(state) {
      state.currentMessageIndex = -1;
    },
    setIndex(state, action) {
      state.currentMessageIndex = action.payload;
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
