// Import des HOOKS
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import des PACKAGES
import axios from "axios";
// Import des COMPOSANTS
import Price from "../components/Price";
import Loading from "../components/Loading";
import Line from "../components/Line";
import Checkout from "../components/Checkout";

const Product = ({ token }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);
  const [checkOut, setCheckOut] = useState(false);

  const handleCheckOut = () => {
    setCheckOut(!checkOut);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://my-vinted-project.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : !checkOut ? (
        <main>
          <div className="main_offer">
            <div className="container">
              <div className="item_pictures">
                <img
                  src={data.product_image.secure_url}
                  alt={data.product_name}
                />
              </div>
              <div className="infos_offer">
                <Price price={data.product_price} />
                <Line />
                {data.product_details.map((elem, index) => {
                  return (
                    <div className="product_details" key={index}>
                      <span>{Object.keys(elem)}</span>
                      <span>{Object.values(elem)}</span>
                    </div>
                  );
                })}
                <Line />
                <span>{data.product_name}</span>
                <span className="description">{data.product_description}</span>
                <Line />
                <div className="infos_owner">
                  <img
                    src={data.owner.account.avatar}
                    alt={data.owner.account.username}
                  />
                  <span>{data.owner.account.username}</span>
                </div>
                <div>
                  <button onClick={handleCheckOut} className="bleu buy">
                    Acheter
                  </button>
                  {/* <Link to="/checkout">
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Checkout
          token={token}
          amount={data.product_price}
          title={data.product_name}
          product_details={data.product_details}
          owner={data.owner}
          picture={data.product_image.secure_url}
        />
      )}
    </div>
  );
};

export default Product;
