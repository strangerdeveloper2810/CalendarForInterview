import { OPEN_MODAL, HIDE_MODAL } from "../constants/ModalCalendarConstants";
import { OPEN_FORM_EDIT_EVENT } from "../constants/FormCalendarConstants";
const initialState = {
  visible: false,
  ComponentModal: <p>Default content</p>,

  callBackSubmit: (propsValue) => {
    alert("abc ");
  },
};

const ModalCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { ...state, visible: true };
    }
    case HIDE_MODAL: {
      return { ...state, visible: false };
    }
    case OPEN_FORM_EDIT_EVENT: {
      return { ...state, visible: true, ComponentModal: action.Component };
    }
    default:
      return state;
  }
};

export default ModalCalendarReducer;
