import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
} from "../actions/types";
import api from "../api/index";

export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post("/login", body);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAILED });
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
