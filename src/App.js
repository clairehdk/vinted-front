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
  const [errorMessage, setErrorMessage] = useState("");
  const [viewPass, setViewPass] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  const arrayFilter = (event) => {
    const value = event.target.value;
    setInput(value);
    if (input) {
      setData(
        data.results.filter((offers) => offers.product_name.includes(input))
      );
    } else {
      setData(data);
    }
  };

  const handleViewPass = () => {
    setViewPass(!viewPass);
  };

  const setModal = () => {
    setOpening(!isOpened);
    setErrorMessage("");
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

  const setError = (e) => {
    setErrorMessage(e);
  };

  return (
    <Router>
      <Modal isOpened={isOpened} setModal={setModal} />
      <Header
        userToken={userToken}
        setUser={setUser}
        setModal={setModal}
        setOpening={setOpening}
        arrayFilter={arrayFilter}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <SignUp
            setUser={setUser}
            setError={setError}
            errorMessage={errorMessage}
            viewPass={handleViewPass}
            view={viewPass}
          />
        </Route>
        <Route path="/login">
          <Login
            setUser={setUser}
            setError={setError}
            setErrorMessage={setErrorMessage}
            errorMessage={errorMessage}
            viewPass={handleViewPass}
            view={viewPass}
          />
        </Route>
        <Route path="/">
          <Home input={input} data={data} setData={setData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
