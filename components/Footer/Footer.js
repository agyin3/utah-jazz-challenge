import React from "react";
import Container from "../UI/Container";
import FooterForm from "./FooterForm";
import FooterText from "./FooterText";
import "./footer.module.css";

const Footer = () => (
  <footer className="blue-bg">
    <Container>
      <h2 className="footer-heading">CONTACT US</h2>
      <div className="footer-wrapper flex">
        <FooterText />
        <FooterForm />
      </div>
    </Container>
  </footer>
);

export default Footer;
