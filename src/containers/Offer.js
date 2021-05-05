import { useParams } from "react-router-dom";

const Product = () => {
  // récupérer l'id
  // faire une requête au serveur
  const { id } = useParams();

  return (
    <div>
      Page d'offre
      <p>J'ai cliqué sur l'id : {id}</p>
    </div>
  );
};

export default Product;
