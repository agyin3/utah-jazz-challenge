import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import React from "react";
import logo from "../../assets/img/logo.png";
import "./header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <div
        className={`header-container ${
          pathname.includes("details") ? "container" : null
        }`}
      >
        <div className="flex">
          <img className="header-img" src={logo} alt="Utah Jazz Logo" />
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
      </div>
    </header>
  );
};

export default Header;
