import React from "react";

const Price = ({ price }) => {
  return <h2>{price.toFixed(2).replace(".", ",")}€</h2>;
};

export default Price;
