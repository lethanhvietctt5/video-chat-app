import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  LOG_OUT,
} from "../actions/types";
import api from "../api/index";
import { addAlert } from "./alert";
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post("/login", body);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(addAlert("Login successful!"));
  } catch (err) {
    dispatch({ type: LOGIN_FAILED });
    dispatch(addAlert("Login failed!"));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({ type: LOAD_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOAD_USER_FAILED });
  }
};

export const register = ({name, email, password}) => async (dispatch) => {
  try {
    const body = { name, email, password };
    const res = await api.post("/register", body);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(addAlert("Register successful!"));
  } catch (err) {
    dispatch({ type: REGISTER_FAILED });
    dispatch(addAlert("Register failed!"));
  }
};

export const logout = () => ({
  type: LOG_OUT,
});
