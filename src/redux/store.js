import { configureStore } from "@reduxjs/toolkit";
import CalendarReducer from "./reducer/CalendarReducer";
const store = configureStore({
  reducer: {
    Calendar: CalendarReducer,
  },
});

export default store;
