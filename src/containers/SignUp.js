import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "../components/Error";

const SignUp = ({ setUser, setError, errorMessage, viewPass, view }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const history = useHistory();

  const handlePass = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleUserName = (event) => {
    const value = event.target.value;
    setUserName(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        username: username,
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:3001/user/signup",
        data
      );
      console.log(response.data);
      const token = response.data.token;
      setUser(token);
      history.push("/");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="form">
      <h2>S'inscrire</h2>
      {errorMessage && <Error errorMessage={errorMessage} />}
      <form>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
        />
        <input type="text" placeholder="Email" onChange={handleEmail} />
        <div>
          <input
            className="pass"
            type={view ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={handlePass}
          />
          <i onClick={viewPass} class="fas fa-eye"></i>
        </div>
        <input
          className="bleu"
          type="submit"
          value="S'inscrire"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default SignUp;
