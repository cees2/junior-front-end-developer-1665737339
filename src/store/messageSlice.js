import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
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

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
