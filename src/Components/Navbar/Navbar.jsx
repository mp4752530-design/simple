import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalItems } = useContext(ShopContext); // Use context for cart count

  return (
    <div className='navbar'>
      {/* Hamburger menu icon */}
      <div className="menu-icon" onClick={() => setMenu(menu === "open" ? "" : "open")}>
        ☰
      </div>

      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Navigation links */}
      <ul className={`nav-menu ${menu === "open" ? "open" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      {/* Login and cart */}
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-login-count">{getTotalItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
 