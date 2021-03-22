import { ADD_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

function alertReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
}

export default alertReducer;
