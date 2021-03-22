import { ADD_ALERT, REMOVE_ALERT } from "../actions/types";
import { v4 as uuidv4 } from "uuid";

export const addAlert = (msg, timeOut = 1000) => dispatch => {
  const id = uuidv4();
  dispatch({ type: ADD_ALERT, payload: { id, msg } });
  setTimeout(
    () => dispatch({ type: REMOVE_ALERT, payload: { id, msg } }),
    timeOut
  );
};
