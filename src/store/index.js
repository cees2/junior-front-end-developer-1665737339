import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";
import tasksSlice from "./tasksSlice";
import responsiveSlice from "./responsiveSlice";

const store = configureStore({
  reducer: {
    messages: messageSlice,
    tasks: tasksSlice,
    responsive: responsiveSlice,
  },
});

export default store;
