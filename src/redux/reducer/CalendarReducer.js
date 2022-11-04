import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  listData: [
    {
      id: uuidv4(),
      type: "processing",
      content: "Interview abcxyz",
    },

    {
      id: uuidv4(),
      type: "success",
      content: "Done project Calendar",
    },
  ],
};

const CalendarReducer = createSlice({
  name: "CalendarReducer",
  initialState,
  reducers: {},
});

export const {} = CalendarReducer.actions;

export default CalendarReducer.reducer;
