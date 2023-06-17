import React, {useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css"

export default function ProductGrid ({products, handleAddItemToCart, handleRemoveItemFromCart}) {

  return (
    <div className="product-grid">
        {products && products.map((products) => (
            <ProductCard products={products}
           key={products.id}
           /> 
        ))}
    </div>
  );
}