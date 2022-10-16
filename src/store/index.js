import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";
import tasksSlice from "./tasksSlice";

const store = configureStore({
  reducer: { messages: messageSlice, tasks: tasksSlice },
});

export default store;
