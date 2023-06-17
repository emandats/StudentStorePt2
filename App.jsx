import * as React from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter,} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

import "./App.css";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function App() {
  const [products, setProducts] = useState([]); // all products
  const [isFetching, setIsFetching] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveItemFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  useEffect(() => {
    const authUser = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (res?.data?.products) {
          console.log(res?.data?.products);
          await setProducts(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    authUser();
  }, []);

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />

          <Routes>
            <Route
              path="/products/:productId"
              element={<ProductDetail products={products} />}
            />
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route path="*" />
          </Routes>
        </main>
      </Router>
      <BrowserRouter></BrowserRouter>
    </div>
  );
}