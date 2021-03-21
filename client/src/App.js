import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Message from "./components/Message/Message";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import setToken from "./api/setToken";
import { loadUser } from "./actions/auth";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App h-full">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/message" component={Message} />
          <Route path="/room"></Route>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
