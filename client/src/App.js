import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Room from "./components/Room/Room";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import setToken from "./api/setToken";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App h-full font-mono">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <PrivateRoute path="/rooms/:id" component={Room} />
          <PrivateRoute path="/" exact component={Home} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
