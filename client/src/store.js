import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import setToken from "./api/setToken";
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

let currentState = store.getState();

store.subscribe(() => {
  let preState = currentState;
  currentState = store.getState();
  if (preState.auth.token !== currentState.auth.token) {
    setToken(currentState.auth.token);
  }
});

export default store;
