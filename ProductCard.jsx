import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  products,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  const {id, name, price, description, image, count } = products;

  const handleAddToCart = () => {
    handleAddItemToCart(products);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(products);
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      {showDescription && <p className="product-description">{description}</p>}
      <div className="quantity-container">
        <button className="add" onClick={handleAddToCart}>
          +
        </button>
        <button
          className="remove"
          onClick={handleRemoveFromCart}
          disabled={count === 0}
        >
          -
        </button>
        {count > 0 && <p className="product-quantity">Quantity: {count}</p>}
      </div>
    </div>
  );
}
