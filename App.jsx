import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function App() {
  const [products, setProducts] = useState([]); // all products
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  // const [cartItem, setCartItem] = useState([]);

  const handleAddItemToCart = (item)=>{
    if(cart.includes(item)){
        console.log(item.count)
        item.count++
      }else{
        item.count = 1
        cart.push(item)
      }
      setCart(cart)
      console.log("Cart")
      console.log(cart)
  }
   
  const handleRemoveItemFromCart = (item)=>{
    if(cart.includes(item)){
        console.log(item.count)
        item.count--
        if(item.count <= 0){
          const index = cart.indexOf(item)
          var noItem = cart.splice(index, 1)
          setCart(noItem)
          console.log(cart)
        }
      }
    else{
      item.count = 1
      cart.push(item)
    }
    setCart(cart)
    console.log("Cart")
    console.log(cart)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (res?.data?.products) {
          console.log(res?.data?.products);
          setProducts(res.data.products);
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

    fetchProducts();
  }, []);

  // console.log("**cart")
  // console.log(cart)
  return (
    <div className="app">
      <Router>
        <main>
        <div>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              products={products}
              shoppingCart={cart}
            />
          </div>
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
    </div>
  );
}