// Import des HOOKS
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// Import des PACKAGES
import axios from "axios";
import Header from "../components/Header";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);
  const id = "132345554";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-vinted-project.herokuapp.com/offers"
        );
        console.log(response.data.results);
        setData(response.data.results);
        console.log(data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <span>Loading en cours</span>
      ) : (
        <main>
          <Header />
          <span>Home</span>
          <Link to={`/offer/${id}`}>Voir l'annonce</Link>
          {data.map((offers) => {
            <span>{offers.name}</span>;
          })}
        </main>
      )}
    </div>
  );
};

export default Home;
