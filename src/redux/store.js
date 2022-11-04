import { createStore, combineReducers } from "redux";
import CalendarReducer from "./reducer/CalendarReducer";
import ModalCalendarReducer from "./reducer/ModalCalendarReducer";
const rootReducer = combineReducers({
  Calendar: CalendarReducer,
  ModalCalendar: ModalCalendarReducer,
});
const store = createStore(rootReducer);

export default store;
