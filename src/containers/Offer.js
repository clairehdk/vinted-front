// Import des HOOKS
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// Import des PACKAGES
import axios from "axios";
// Import des COMPOSANTS
import Price from "../components/Price";
import Loading from "../components/Loading";
import Line from "../components/Line";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);

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
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
                {data.product_details.map((detail, index) => {
                  return (
                    <div className="product_details" key={index}>
                      <span>{detail.brand}</span>
                      <span>{detail.size}</span>
                      <span>{detail.etat}</span>
                      <span>{detail.color}</span>
                      <span>{detail.location}</span>
                    </div>
                  );
                })}
                <Line />
                <span>{data.product_name}</span>
                <span>{data.product_description}</span>
                <Line />
                <div className="infos_owner">
                  <img
                    src={data.owner.account.avatar}
                    alt={data.owner.account.username}
                  />
                  <span>{data.owner.account.username}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Product;
