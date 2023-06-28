import * as React from "react";
import { BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import Sidebar from "../Sidebar/Sidebar";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function App() {
  const [products, setProducts] = useState([]); // all products
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
  });
  const [receipt, setReceipt] = useState("");

  const handleOnCheckoutFormChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setCheckoutForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleOnSubmitCheckoutForm = async (event) => {
    let subtotal = 0;
    let cartItem = "";
    let taxes = 0;
    let total = 0;

    cart.forEach((item) => {
      const product = products.find((product) => product.id === item.id);
      if (product) {
        subtotal += product.price * item.count;
        taxes = subtotal * 0.0875
        total = subtotal + taxes
        cartItem += `${item.count}x ${product.name}\n`;
      }
    });

    let receiptMesssage = `Showing receipt for ${checkoutForm.name} available at ${checkoutForm.email}:\n\n${cartItem}\n`;
    receiptMesssage += `Before taxes, subtotal was ${subtotal.toFixed(2)}`;
    receiptMesssage += `After taxes and fees were applied, the total comes out to ${total.toFixed(2)}`;
    console.log(receiptMesssage);
    setReceipt(receiptMesssage);
    setCart([]);
  };
  

  const handleAddItemToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        const updatedItem = { ...updatedCart[existingItemIndex] };
        updatedItem.count++;
        updatedCart[existingItemIndex] = updatedItem;
      } else {
        item.count = 1;
        updatedCart.push(item);
      }
  
      return updatedCart;
    });
  };
  
   
  const handleRemoveItemFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        const updatedItem = { ...updatedCart[existingItemIndex] };
        updatedItem.count--;
  
        if (updatedItem.count <= 0) {
          updatedCart.splice(existingItemIndex, 1);
        } else {
          updatedCart[existingItemIndex] = updatedItem;
        }
      }
  
      return updatedCart;
    });
  };
  
  

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

  return (
    <div className="app">
      <Router>
        <main>
        <div>
            <Sidebar
            handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
            handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              products={products}
              shoppingCart={cart}
              receipt = {receipt}
   
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