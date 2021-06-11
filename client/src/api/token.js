import api from "./index";

const setToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

const getToken = () => {
  return localStorage.getItem("token");
};

export { setToken, getToken };
