import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useParams } from "react-router-dom";

import React from "react";

const Payment = () => {
  const { name, price } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51IptzXD3h6s9aizx5aQvFmFKqLYZR4gqwux1TQ5zucrFDsbjabXtyjhzA8d3YIxWV6GBEeE5B5B9k875JoYZ0NJF007hyOEtJk"
  );

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm name={name} amount={price} />
    </Elements>
  );
};

export default Payment;
