import { ADD_ALERT, REMOVE_ALERT } from "../actions/types";
import { v4 as uuidv4 } from "uuid";

export const addAlert = ({msg, type}, timeOut = 1000) => dispatch => {
  const id = uuidv4();
  dispatch({ type: ADD_ALERT, payload: { id, msg, type } });
  setTimeout(
    () => dispatch({ type: REMOVE_ALERT, payload: { id, msg } }),
    timeOut
  );
};
