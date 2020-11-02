import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./Footer";

const FooterForm = () => (
  <div className="form-wrapper">
    <form>
      <div className="input-container">
        <label htmlFor="fName">Name</label>
        <br />
        <input type="text" id="fName" />
      </div>
      <div className="input-container">
        <label htmlFor="mobile">Mobile</label>
        <br />
        <input type="text" id="mobile" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" />
      </div>
      <div className="input-container">
        <label htmlFor="contact">Best Time To Contact</label>
        <br />
        <select id="contact">
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Night</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="message">Message</label>
        <br />
        <textarea id="message" rows="10" />
      </div>
      <button
        onClick={(e) => e.preventDefault()}
        className="link-button"
        type="submit"
      >
        <FontAwesomeIcon className="form-icon" icon="check-circle" />
        SEND INQUIRY
      </button>
    </form>
  </div>
);

export default FooterForm;
