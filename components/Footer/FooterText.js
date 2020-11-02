import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import React from "react";

const FooterText = () => {
  const { pathname } = useLocation();
  return (
    <div className="footer-info">
      <div className="contact-info">
        <FontAwesomeIcon
          className={`footer-icons ${
            pathname.includes("details") ? "secondary-blue" : "yellow-text"
          }`}
          icon="phone-square-alt"
        />
        <a href="#" className="footer-link">
          {" "}
          801.325.2203
        </a>
      </div>
      <div className="contact-info">
        <FontAwesomeIcon
          className={`footer-icons ${
            pathname.includes("details") ? "secondary-blue" : "yellow-text"
          }`}
          icon="envelope"
        />
        <a href="#" id="footer-email" className="footer-link">
          premium@utahjazz.com
        </a>
      </div>
      <p className="footer-text">
        With options like single-game tickets, suite rentals and special group
        rates, experiencing Utah Jazz basketball has never been more convenient!
        Just let us know what you're interested in and we can customize a
        package to fit your group and budget.
      </p>
    </div>
  );
};

export default FooterText;
