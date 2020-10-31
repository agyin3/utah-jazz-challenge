import React from "react";
import Header from "../Header/Header";
import Container from "../UI/Container";
import "./hero.module.css";
import HeroText from "./HeroText";

const Hero = () => (
  <div className="hero-bg">
    <Container>
      <Header />
      <HeroText />
    </Container>
  </div>
);

export default Hero;
