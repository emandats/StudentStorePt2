import React, { useState, useEffect } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Searchbar from "../Searchbar/Searchbar";
import Footer from "../Footer/Footer";

export default function Home({handleAddItemToCart,
  handleRemoveItemFromCart}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://codepath-store-api.herokuapp.com/store"
      );
      const data = await response.json();
      const fetchedProducts = data.products;
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleClick = (event) => {
    const category = event.target.value.toLowerCase();
    if (category === "all categories") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home">
      <Hero>Home Page</Hero>
      <Searchbar handleSearch={handleSearch} />
      <div className="btn-group">
        <button value="All Categories" onClick={handleClick}> All Categories </button>
        <button value="Clothing" onClick={handleClick}> Clothing </button>
        <button value="Food" onClick={handleClick}> Food </button>
        <button value="Accessories" onClick={handleClick}> Accessories </button>
        <button value="Tech" onClick={handleClick}> Tech </button>
      </div>
      <h2 id = "BuyNow">Best Selling Products</h2>
      <ProductGrid products={filteredProducts} 
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemFromCart={handleRemoveItemFromCart}/>
      <div className = "about" id = "About">
        <div className = "content">
          <h3 id = "AboutUs">About</h3>
          <div className = "summary">
            <div className = "texts">
              <p>The CodePath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
              <img src = "https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt = "codepath image"/>
            </div>
          </div>
          </div> 
        </div>
      <div id="Contact" className="contact">
        <div className="content">
          <h3 id = "ContactUs">Contact Us</h3>
          <div className="summmary">
            <ul className="info">
              <li>
                <span className="label">Email: </span>
                <span>codepath.org</span>
              </li>
              <li>
                <span className="label">Phone: </span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">Address: </span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}