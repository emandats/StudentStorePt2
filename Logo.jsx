import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <div className = "Instalogo">
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-768x432.png"
        alt="instagram logo">
        </img> 
      </div>
      <div className = "Twitterlogo">
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Twitter-Logosu-768x432.png"
        alt="twitter logo">
        </img> 
      </div>
      <div className = "FBlogo">
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu-768x432.png"
        alt="facebook logo">
        </img> 
      </div>
      <Link className = "link" to = "/"> Home </Link>
      <a className = "link" href = "/#AboutUs"> About Us</a>
      <a className = "link" href = "/#ContactUs"> Contact Us</a>
      <a className = "link" href = "/#BuyNow"> Buy Now</a>
    </div>
  );
}

