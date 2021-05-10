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
import Publish from "./containers/Publish";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [isOpened, setOpening] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [viewPass, setViewPass] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [title, setTitle] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);
  const [value, setValue] = useState([0, 500]);
  const [sort, setSort] = useState("price_asc");

  const handleSearch = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleSort = () => {
    if (sort === "price_asc") {
      setSort("price_desc");
    } else if (sort === "price_desc") {
      setSort("price_asc");
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
        handleSearch={handleSearch}
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
        <Route path="/publish">
          <Publish token={userToken} />
        </Route>
        <Route path="/">
          <Home
            title={title}
            page={page}
            setPage={setPage}
            limit={limit}
            setSkip={setSkip}
            skip={skip}
            setPriceMin={setPriceMin}
            setPriceMax={setPriceMax}
            priceMax={priceMax}
            priceMin={priceMin}
            value={value}
            setValue={setValue}
            handleSort={handleSort}
            sort={sort}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
