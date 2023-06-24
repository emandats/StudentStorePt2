import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,

}) => {
  return (
    <div className="product-grid">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        products={product}
        handleAddItemToCart={handleAddItemToCart} // Pass the function as a prop
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        productId = {product.id}
      />
    ))}
  </div>
  
  );
};

export default ProductGrid;
