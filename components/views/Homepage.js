import React from "react";
import Footer from "../Footer/Footer";
import HClub from "../Homepage/HClub.js/HClub";
import Hero from "../Homepage/Hero/Hero";
import InfoCards from "../Homepage/InfoCards/InfoCards";
import Options from "../Homepage/Options/Options";

const Homepage = () => (
  <main>
    <Hero />
    <InfoCards />
    <Options />
    <HClub />
    <Footer />
  </main>
);

export default Homepage;
