// Import des HOOKS
import { useEffect, useState } from "react";
// Import des images
import banner from "../assets/img/banner.jpeg";
import tear from "../assets/img/tear.svg";
// Import des PACKAGES
import axios from "axios";
import Item from "../components/Item";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setPage(page - 1);
    setSkip(skip - limit);
  };

  useEffect(() => {
    const fetchData = async (limit, page) => {
      try {
        const response = await axios.get(
          `https://my-vinted-project.herokuapp.com/offers?page=${page}&limit=${limit}`
        );
        setData(response.data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, limit]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <div className="after-header">
            <div>
              <h1>Prêts à faire du tri dans votre placard ?</h1>
              <button className="bleu">Commencez à vendre</button>
              <a target="_blank" href="https://www.vinted.fr/how_it_works">
                Découvrir comment ça marche
              </a>
            </div>
            <img className="banner" src={banner} alt="Bannière" />
            <div className="tear"></div>
          </div>

          <div className="container home">
            {data.results.map((offers) => {
              return <Item key={offers._id} offers={offers} />;
            })}
          </div>
          <div>
            <button onClick={previousPage}> Previous Page </button>
            <button onClick={nextPage}> Next Page </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
