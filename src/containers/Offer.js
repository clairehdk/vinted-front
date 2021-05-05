// Import des HOOKS
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// Import des PACKAGES
import axios from "axios";
// Import des COMPOSANTS
import Header from "../components/Header";

const Product = () => {
  const { id } = useParams();
  return (
    <main>
      <Header />
      Page d'offre
      <p>J'ai cliqué sur l'id : {id}</p>
      <Link to="/">Retour à la homepage</Link>
    </main>
  );
};

export default Product;
