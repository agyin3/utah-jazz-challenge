import React from "react";
import HClub from "../Homepage/HClub.js/HClub";
import Hero from "../Homepage/Hero/Hero";
import InfoCards from "../Homepage/InfoCards/InfoCards";
import Options from "../Homepage/Options/Options";

const Homepage = () => (
  <React.Fragment>
    <Hero />
    <InfoCards />
    <Options />
    <HClub />
  </React.Fragment>
);

export default Homepage;
