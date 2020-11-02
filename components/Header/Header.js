import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <a className="nav-links">
        LUXURY SUITES{" "}
        <FontAwesomeIcon className="menu-icon" icon="caret-down" />
      </a>
      <a className="nav-links">
        EXCLUSIVE CLUBS{" "}
        <FontAwesomeIcon className="menu-icon" icon="caret-down" />
      </a>
      <a className="nav-links">CONTACT US</a>
    </nav>
  </header>
);

export default Header;
