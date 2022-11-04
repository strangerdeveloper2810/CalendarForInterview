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

const CalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return { ...state };

    default:
      return state;
  }
};

export default CalendarReducer;
