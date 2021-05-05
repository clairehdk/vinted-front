import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useEffect, useState } from "react";

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
        console.log(response);
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
        <span>Loading en cours</span>
      ) : (
        <div>
          <span>Home</span>
          <Link to={`/offer/${id}`}>Voir l'annonce</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
