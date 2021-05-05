import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo" />
        <div>
          <button>S'inscire | Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
