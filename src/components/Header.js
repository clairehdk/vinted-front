import logo from "../assets/img/logo.png";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Header = ({
  userToken,
  setUser,
  setModal,
  handleSearch,
  setTitle,
  title,
}) => {
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    setTitle("");
    console.log(location);
    console.log(title);
  }, [location]);

  return (
    <header>
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <input
          onChange={handleSearch}
          placeholder="Rechercher des articles"
          value={title}
        ></input>
        <div>
          <button className="hidden menu" onClick={setModal}>
            <i className="fas fa-bars fa-lg"></i>
          </button>
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
          {/* <Redirect to="/publish" />  */}
          <button
            onClick={() => {
              userToken ? history.push("/publish") : setModal();
            }}
            className="bleu"
          >
            Vends tes articles
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
