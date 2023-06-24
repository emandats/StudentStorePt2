import React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  setIsOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <>
          <button className="toggle-button" onClick={handleOnToggle}>
            Close
          </button>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            className="shopping-cart"
            shoppingCart={shoppingCart}
          />
          <CheckoutForm
            shoppingCart={shoppingCart}
            isOpen={isOpen}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            className="checkout-form"
          />
          <p>
            Checkout Info: A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
          </p>
        </>
      )}
      {!isOpen && (
        <button className="toggle-button" onClick={handleOnToggle}>
          Open
        </button>
      )}
    </section>
  );
}
