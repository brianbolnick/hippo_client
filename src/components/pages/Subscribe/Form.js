import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import styled from "styled-components/macro";
import styles from "./FormStyles";

const FormContainer = styled.div`
  ${styles};
  padding: 24px;
`;
const CheckoutForm = ({ stripe }) => {
  const handleSubmit = async ev => {
    ev.preventDefault();
    stripe.createToken().then(res => {
      console.log(res);
    });
    console.log(ev);
    // User clicked submit
  };

  const handleBlur = () => {
    console.log("[blur]");
  };

  const handleChange = change => {
    console.log("[change]", change);
  };

  const handleFocus = () => {
    console.log("[focus]");
  };

  const handleReady = () => {
    console.log("[ready]");
  };

  const createOptions = () => {
    return {
      style: {
        base: {
          fontSize: "14px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          },
          padding: "16px"
        },
        invalid: {
          color: "#9e2146"
        }
      }
    };
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions()}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions()}
          />
        </label>
        <label>
          CVC
          <CardCVCElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions()}
          />
        </label>
        <button>Pay</button>
      </form>
    </FormContainer>
  );
};
export default injectStripe(CheckoutForm);
