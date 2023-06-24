import React from 'react';
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleOnSubmitCheckoutForm();
      // Clear shopping cart and reset form state on successful submission
      shoppingCart.length = 0;
      handleOnCheckoutFormChange({ email: '', name: '' });
    } catch (error) {
      console.error('Error submitting checkout form:', error);
    }
  };

  return (
    <div className={`checkout-form ${isOpen ? 'open' : 'closed'}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="student@codepath.org"
          className="checkout-form-input"
          value={checkoutForm?.email}
          onChange={handleOnCheckoutFormChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="checkout-form-input"
          value={checkoutForm?.name}
          onChange={handleOnCheckoutFormChange}
        />
        <button type="submit" className="checkout-button">
          Checkout
        </button>
      </form>
      {checkoutForm?.error && <p className="error">{checkoutForm.error}</p>}
      {checkoutForm?.success && (
        <div className="receipt">
          <h3>Receipt</h3>
          <p>
            Showing receipt for {checkoutForm.name} available at {checkoutForm.email}:
          </p>
          {shoppingCart.map((item) => (
            <p key={item.id}>
              {item.count} total {item.name} purchased at a cost of ${item.price.toFixed(2)} for a total cost of ${(
                item.price * item.count
              ).toFixed(2)}.
            </p>
          ))}
          <p>Before taxes, the subtotal was ${calculateSubtotal()}.</p>
          <p>After taxes and fees were applied, the total comes out to ${calculateTotalPrice()}.</p>
        </div>
      )}
    </div>
  );
}
