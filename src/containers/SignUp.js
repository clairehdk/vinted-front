import axios from "axios";
import React from "react";
import { useState } from "react";

const SignUp = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  //   const history = useHistory();

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
    event.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
    };
    const response = await axios.post(
      "https://my-vinted-project.herokuapp.com/user/signup",
      data
    );
    // console.log(response.data);
    // const token = response.data.token;
    // setUser(token);
  };

  return (
    <div className="form">
      <h2>S'inscrire</h2>
      <form>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
        />
        <input type="text" placeholder="Email" onChange={handleEmail} />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePass}
        />
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
