import * as React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <nav className = "footer">
      <div className = "content">
        <div className = "links">
        <div className= "link-colums">
        <h4>Categories</h4>
        <ul>
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accesories</li>
            <li>Tech</li>
        </ul>
    </div>
    <div className= "link-colums">

        <h4>Company</h4>
        <ul>
            <li>About Us</li>
            <li>Find a store</li>
            <li>Terms</li>
            <li>Sitemaps</li>
        </ul>
    </div>
    <div className= "link-colums">
        <h4>Support</h4>
        <ul>
            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Order Dispute</li>
        </ul>
    </div>
    <div className= "link-colums">
        <h4>Account</h4>
        <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li>My orders</li>
        </ul>
    </div>
    <div className= "link-colums">
        <h4>Socials</h4>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Youtube</li>
        </ul>
    </div>
     <div className= "link-colums">
        <h4>Our App</h4>
        <ul>
            <li>
            <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="app store"></img>
            </li>
            <li>
            <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="Google Play"></img>
            </li>
        </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}
