import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser, setModal }) => {
  return (
    <header>
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <input placeholder="Rechercher des articles"></input>
        <div>
          <i className="fas fa-bars fa-lg hidden"></i>
          {userToken ? (
            <button className="blanc" onClick={() => setUser(null)}>
              Se déconnecter
            </button>
          ) : (
            <>
              <button onClick={setModal} className="blanc">
                S'inscire | Se connecter
              </button>
            </>
          )}
          <button className="bleu">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
