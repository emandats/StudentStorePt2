import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  productId,
  quantity,
  showDescription,
}) {
  const {id, name, price, description, image } = products;

  const handleAddToCart = () => {
    handleAddItemToCart(id);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(id);
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${products.id}`}>
        <img src={products.image} alt={products.name} />
        </Link>
        <p>{products.name}</p>
        <p>${products.price}</p>
        {showDescription && <p>{products.description}</p>}
        <button onClick={() => handleAddItemToCart(products)}>
          Add to Cart
        </button>
        <button onClick={() => handleRemoveItemFromCart(products)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
