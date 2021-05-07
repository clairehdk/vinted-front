// Import des HOOKS
import { useEffect, useState } from "react";
// Import des images
import banner from "../assets/img/banner.jpeg";
import tear from "../assets/img/tear.svg";
// Import des PACKAGES
import axios from "axios";
import Item from "../components/Item";
import Loading from "../components/Loading";

const Home = ({ input, setInput, data, setData }) => {
  const [isLoading, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  // const [title, setTitle] = useState("");
  // const [priceMin, setPriceMin] = useState(0);
  // const [priceMax, setPriceMax] = useState(3000);
  // const [sort, setSort] = useState("")

  const nextPage = () => {
    setPage(page + 1);
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setPage(page - 1);
    setSkip(skip - limit);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://my-vinted-project.herokuapp.com/offers?page=${page}&limit=${limit}&title=${title}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}`
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
              return <Item key={offers._id} offers={offers} input={input} />;
            })}
          </div>
          <div className="container pagination">
            <button
              className={skip !== 0 ? "" : "visibility_hidden"}
              onClick={previousPage}
            >
              ...Previous Page
            </button>

            <button
              className={skip < data.count / 2 ? "" : "visibility_hidden"}
              onClick={nextPage}
            >
              Next Page...
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
