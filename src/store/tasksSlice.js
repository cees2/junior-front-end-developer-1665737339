import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    activeTaskIndex: 0,
  },
  reducers: {
    resetIndex(state) {
      state.activeTaskIndex = -1;
    },
    setIndex(state, action) {
      state.activeTaskIndex = action.payload;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
