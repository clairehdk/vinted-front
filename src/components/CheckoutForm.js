import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

import axios from "axios";

const CheckoutForm = ({ title, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  // amount = amount + 2.88 + 1.2;

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        // name: id,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        `https://my-vinted-project.herokuapp.com/payment`,
        {
          stripeToken,
          title,
          amount: Number(amount * 100),
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {!completed ? (
        <div className="payment">
          <h1>
            Merci de renseigner vos informations bancaires afin de compléter la
            transaction
          </h1>
          <div className="card">
            <form className="container_payment" onSubmit={handleSubmit}>
              <CardElement />
              <button className="bleu" type="submit">
                Valider
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="success">
          <span>Paiement effectué ! </span>
          <Link to="/">
            <button className="bleu">
              Retourner chercher de nouveaux fabuleux articles
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
