import { Link } from "react-router-dom";
import Price from "./Price";

const Item = ({ offers }) => {
  return (
    <div className="items" key={offers._id}>
      <div className="owner">
        <img
          src={offers.owner.account.avatar}
          alt={offers.owner.account.username}
        />
        <span>{offers.owner.account.username}</span>
      </div>
      <Link to={`/offer/${offers._id}`}>
        <img
          src={offers.product_image.secure_url}
          alt={offers.product_name}
        ></img>
      </Link>
      <Price price={offers.product_price} />
      <div className="item_details">
        <span>{offers.product_details[2].size}</span>
        <span>{offers.product_details[0].brand}</span>
      </div>
    </div>
  );
};

export default Item;
