import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handlePass = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
      };
      await axios.post(
        "https://my-vinted-project.herokuapp.com/user/login",
        data
      );
      const token = data.token;
      console.log(token);
      //   history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h2>Se connecter</h2>
      <form>
        <input
          type="text"
          placeholder="Identifiant ou email"
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePass}
        />
        <input type="submit" value="Se connecter" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Login;
