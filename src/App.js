import "./App.css";
import Cookies from "js-cookie";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Modal from "./components/Modal";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [isOpened, setOpening] = useState(false);

  const setModal = () => {
    setOpening(!isOpened);
  };

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Modal isOpened={isOpened} setModal={setModal} />
      <Header
        userToken={userToken}
        setUser={setUser}
        setModal={setModal}
        setOpening={setOpening}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
