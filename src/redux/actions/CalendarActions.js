import React from "react";
import { OPEN_FORM_EDIT_EVENT } from "../constants/FormCalendarConstants";
import FormCalendar from "../../Components/FormCalendar/FormCalendar";

export const openFormEditEventAction = () => ({
  type: OPEN_FORM_EDIT_EVENT,
  Component: <FormCalendar />,
});
