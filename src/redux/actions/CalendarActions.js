import React from "react";
import {
  OPEN_FORM_EDIT_EVENT,
  OPEN_FORM_ADD_EVENT,
  ADD_EVENT
} from "../constants/FormCalendarConstants";
import FormCalendar from "../../Components/FormCalendar/FormCalendar";
import FormEditEventCalendar from "../../Components/FormCalendar/FormEditEventCalendar";

export const openFormAddEventAction = () => ({
  type: OPEN_FORM_ADD_EVENT,
  Component: <FormCalendar />,
});

export const openFormEditEventAction = () => ({
  type: OPEN_FORM_EDIT_EVENT,
  Component: <FormEditEventCalendar />,
});


export const addEventAction = (data) => ({
  type:ADD_EVENT,
  payload: data,
})