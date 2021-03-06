// Import des HOOKS
import { useEffect, useState } from "react";
// Import des images
import banner from "../assets/img/banner.jpeg";
// Import des PACKAGES
import axios from "axios";
// Import des compansants
import Item from "../components/Item";
import Loading from "../components/Loading";
import Range from "../components/Range";
import { Link } from "react-router-dom";

const Home = ({
  title,
  page,
  setPage,
  setSkip,
  skip,
  limit,
  setPriceMin,
  setPriceMax,
  priceMax,
  priceMin,
  value,
  setValue,
  handleSort,
  sort,
  token,
}) => {
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    setPriceMin(newValue[0]);
    setPriceMax(newValue[1]);
  };

  const nextPage = () => {
    setPage(page + 1);
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setPage(page - 1);
    setSkip(skip - limit);
  };

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://my-vinted-project.herokuapp.com/offers?page=${page}&limit=${limit}&title=${title}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}`
          );
          setData(response.data);
          setLoader(false);
          // setTitle(input);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    },
    [page, limit, title, priceMin, priceMax, sort],
    priceMin
  );

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <div className="filters container">
            <p>Trier par prix</p>
            <div className="sort">
              <button
                className={sort === "price_asc" && "visibility_hidden"}
                onClick={handleSort}
                type="checkox"
              >
                <i class="fas fa-arrow-up fa-lg"></i>
              </button>
              <button
                className={sort === "price_desc" && "visibility_hidden"}
                onClick={handleSort}
                type="checkox"
              >
                <i class="fas fa-arrow-down fa-lg"></i>
              </button>
            </div>
            <Range value={value} rangeSelector={rangeSelector} />
          </div>
          <div className="after-header">
            <div>
              <h1>Pr??ts ?? faire du tri dans votre placard ?</h1>
              <Link to="/publish">
                <button className="bleu">Commencez ?? vendre</button>
              </Link>
              <a target="_blank" href="https://www.vinted.fr/how_it_works">
                D??couvrir comment ??a marche
              </a>
            </div>
            <img className="banner" src={banner} alt="Banni??re" />
            <div className="tear"></div>
          </div>

          <div className="container home">
            {data.results.map((offers) => {
              return <Item key={offers._id} offers={offers} />;
            })}
          </div>
          <div className="container pagination">
            <button
              className={page > 1 ? "" : "visibility_hidden"}
              onClick={previousPage}
            >
              ...Previous Page
            </button>

            <button
              className={
                page === 1 && data.count > limit ? "" : "visibility_hidden"
              }
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
