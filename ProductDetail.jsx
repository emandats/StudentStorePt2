import React, { useEffect, useState } from 'react';
import { Router, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductView from '../ProductView/ProductView'


// uses useParam for the productID to generate the product descriptions's id 
const ProductDetail = ({products, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // to display the is loading before generating the description 

  useEffect(() => {
    // useEffect to fetch the data along with its id 
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
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />

    </div>
    
  );
};

export default ProductDetail;
