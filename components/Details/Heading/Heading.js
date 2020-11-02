import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../../UI/Container";
import "./heading.module.css";

const Heading = () => (
  <Container className="flex heading-container">
    <h1>EIDE BAILLY SUITE LEVEL</h1>
    <div className="flex heading-link-container">
      <a className="link-button heading-link">
        <FontAwesomeIcon
          className="yellow-text heading-icon"
          icon={["far", "file-pdf"]}
        />
        DOWNLOAD INFO
      </a>
      <a className="link-button heading-link">CONTACT US</a>
    </div>
  </Container>
);

export default Heading;
