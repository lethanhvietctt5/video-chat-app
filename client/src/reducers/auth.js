import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case LOAD_USER_FAILED:
    default:
      return state;
  }
}

export default authReducer;
