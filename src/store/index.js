import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./messageSlice";

const store = configureStore({
  reducer: { tasks: tasksSlice },
});

export default store;
