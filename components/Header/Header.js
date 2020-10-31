import React from "react";
import logo from "../../assets/img/logo.png";
import "./header.module.css";

const Header = () => (
  <header>
    <div className="flex">
      <img className="header-img" src={logo} />
      <a className="home-link">UTAH JAZZ PREMIUM SEATING</a>
    </div>
    <nav>
      <a className="nav-links">LUXURY SUITES</a>
      <a className="nav-links">EXCLUSIVE CLUBS</a>
      <a className="nav-links">CONTACT US</a>
    </nav>
  </header>
);

export default Header;
