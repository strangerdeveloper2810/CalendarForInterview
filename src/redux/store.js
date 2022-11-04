import { createStore, combineReducers } from "redux";
import CalendarReducer from "./reducer/CalendarReducer";
import ModalCalendarReducer from "./reducer/ModalCalendarReducer";
import FormCalendarReducer from "./reducer/FormCalendarReducer";
const rootReducer = combineReducers({
  Calendar: CalendarReducer,
  ModalCalendar: ModalCalendarReducer,
  FormCalenDar: FormCalendarReducer,
});
const store = createStore(rootReducer);

export default store;
