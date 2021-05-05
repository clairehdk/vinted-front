import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-vinted-project.herokuapp.com/"
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
    <div>{isLoading ? <span>Loading en cours</span> : <span>Hello</span>}</div>
  );
};

export default Home;
