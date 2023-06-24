import React from 'react';
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of shoppingCart) {
      subtotal += item.price * item.count;
    }
    return subtotal.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxes = subtotal * taxRate;
    const totalPrice = subtotal + taxes;
    return totalPrice.toFixed(2);
  };

  const calculateTaxes = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxes = subtotal * taxRate;
    return taxes.toFixed(2);
  };

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
      {shoppingCart?.length > 0 ? (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th className="cart-table-header">Name</th>
                <th className="cart-table-header">Quantity</th>
                <th className="cart-table-header">Unit Price</th>
                <th className="cart-table-header">Cost</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td className="cart-table-data">{item.name}</td>
                  <td className="cart-table-data">{item.count}</td>
                  <td className="cart-table-data">${item.price.toFixed(2)}</td>
                  <td className="cart-table-data">${(item.price * item.count).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="cart-receipts">
            <tbody>
              <tr>
                <td className="subtotal">{`Subtotal: $${calculateSubtotal()}`}</td>
              </tr>
              <tr>
                <td className="taxes">{`Taxes and Fees: $${calculateTaxes()}`}</td>
              </tr>
              <tr>
                <td className="total-price">{`Total Price: $${calculateTotalPrice()}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="notification">No items added to cart yet. Start shopping now!</p>
      )}
    </div>
  );
}
