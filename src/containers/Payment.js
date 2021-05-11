import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

import React from "react";

const Payment = ({ token }) => {
  const { title, amount } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51IptzXD3h6s9aizx5aQvFmFKqLYZR4gqwux1TQ5zucrFDsbjabXtyjhzA8d3YIxWV6GBEeE5B5B9k875JoYZ0NJF007hyOEtJk"
  );

  return token ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm title={title} amount={amount} />
    </Elements>
  ) : (
    <Redirect to="/login" />
  );
};

export default Payment;
