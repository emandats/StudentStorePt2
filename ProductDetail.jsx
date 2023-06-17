import React, { useEffect, useState } from 'react';
import { Router, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductView from '../ProductView/ProductView'


const ProductDetail = ({ products, handleAddItemToCart, handleRemoveItemToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="product-detail">
      <ProductView
        products={product.product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />

    </div>
    
  );
};

export default ProductDetail;