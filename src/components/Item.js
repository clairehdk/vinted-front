import { Link } from "react-router-dom";
import Price from "./Price";

const Item = ({ offers, input }) => {
  return (
    <div className="items" key={offers._id}>
      {/* {offers.filter((item) => {
        if (!input) return true;
        if (
          item.product_name.includes(input) ||
          item.product_description.includes(input)
        ) {
          return true;
        }
      })} */}
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
