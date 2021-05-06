import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <header>
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <input placeholder="Rechercher des articles"></input>
        <div>
          {userToken ? (
            <button className="blanc" onClick={() => setUser(null)}>
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="blanc">S'inscire</button>
              </Link>
              <Link to="/login">
                <button className="blanc">Se connecter</button>
              </Link>
            </>
          )}
          <button className="bleu">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
