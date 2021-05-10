import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Error from "../components/Error";

const Login = ({ setUser, setError, errorMessage, viewPass, view }) => {
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
      const response = await axios.post(
        "https://my-vinted-project.herokuapp.com/user/login",
        data
      );
      const token = response.data.token;
      setUser(token);
      history.push("/");
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };
  return (
    <div className="form">
      <h2>Se connecter</h2>
      {errorMessage && <Error errorMessage={errorMessage} />}
      <form>
        <input
          type="text"
          placeholder="Identifiant ou email"
          onChange={handleEmail}
        />
        <div>
          <input
            className="pass"
            type={view ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={handlePass}
          ></input>
          <i onClick={viewPass} class="fas fa-eye"></i>
        </div>
        <input
          className="bleu"
          type="submit"
          value="Se connecter"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
