import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  LOG_OUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: true,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return state;
    case REGISTER_FAILED:
      return state;
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
        loading: false,
      };
    case LOAD_USER_FAILED:
      return state;
    case LOG_OUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
}

export default authReducer;
