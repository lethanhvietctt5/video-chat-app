import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_URL,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      // store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
