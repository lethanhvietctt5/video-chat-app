import { Route, Switch } from "react-router-dom";
import LoginContext from "../src/context/login";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Message from "./components/Message/Message";
import { useState } from "react";

function App() {
  const [userID, setUserID] = useState(null);
  return (
    <LoginContext.Provider value={{ userID, setUserID }}>
      <div className="App h-full">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/room"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
