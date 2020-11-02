import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterText = () => (
  <div className="footer-info">
    <div className="contact-info">
      <FontAwesomeIcon
        className="yellow-text footer-icons"
        icon="phone-square-alt"
      />
      <a className="footer-link"> 801.325.2203</a>
    </div>
    <div className="contact-info">
      <FontAwesomeIcon className="yellow-text footer-icons" icon="envelope" />
      <a id="footer-email" className="footer-link">
        premium@utahjazz.com
      </a>
    </div>
    <p className="footer-text">
      With options like single-game tickets, suite rentals and special group
      rates, experiencing Utah Jazz basketball has never been more convenient!
      Just let us know what you're interested in and we can customize a package
      to fit your group and budget.
    </p>
  </div>
);

export default FooterText;
