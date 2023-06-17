import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductView = ({
  products,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        products={products}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        showDescription={true}s
      />
    </div>
  );
};

export default ProductView;