import axios from "axios";

const api = axios.create({
  baseURL: "https://room-call-chat-app.herokuapp.com/",
  //baseURL: "http://localhost:5000",
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
