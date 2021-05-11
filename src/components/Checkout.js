import { Redirect, Link, useHistory } from "react-router-dom";

const Checkout = ({
  token,
  amount,
  product_details,
  title,
  owner,
  picture,
}) => {
  const shippingFee = 2.88;
  const protection = 1.2;
  amount = shippingFee + protection + amount;

  return token ? (
    <div className="checkout">
      <div className="container">
        <div>
          <div className="order">
            <h1>Commande</h1>
            <div className="order_detail">
              <div>
                <div>
                  <img src={picture} alt={title} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <div>
                    <span>{product_details[2].size} · </span>
                    <span>{product_details[1].etat} · </span>
                    <span>{product_details[0].brand}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3>{amount.toFixed(2).replace(".", ",")} €</h3>
              </div>
            </div>
          </div>
          <div className="buyer">
            <h1>Acheteur</h1>
            <div className="order_detail">
              <div>
                <img src={owner.account.avatar} alt="Avatar" />
              </div>
              <div>
                <p>{owner.account.username}</p>
                <p>{owner.account.phone}</p>
                <p>{owner.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="price_detail">
          <h1>Résumé de la commande</h1>
          <div>
            <h4>Commande</h4>
            <span>{amount.toFixed(2).replace(".", ",")} €</span>
          </div>
          <div>
            <h4>Protection acheteurs</h4>
            <span>{protection.toFixed(2).replace(".", ",")} €</span>
          </div>
          <div>
            <h4>Frais de port</h4>
            <span>{shippingFee.toFixed(2).replace(".", ",")} €</span>
          </div>
          <div>
            <h4>Total</h4>
            <span>{amount.toFixed(2).replace(".", ",")} €</span>
          </div>
          <div>
            <Link to={`/payment/${amount}/${title}`}>
              <button className="bleu">Payer maintenant</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Checkout;
