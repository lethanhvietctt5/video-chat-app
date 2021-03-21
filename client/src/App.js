import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Message from "./components/Message/Message";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [userID, setUserID] = useState(null);
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
