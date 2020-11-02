import React from "react";
import Container from "../../UI/Container";
import About from "./About";
import Benefits from "./Benefits";
import "./info.module.css";
import Parking from "./Parking";
import Uses from "./Uses";

const Info = () => (
  <section>
    <Container>
      <About />
      <Benefits />
      <Parking />
      <Uses />
    </Container>
  </section>
);

export default Info;
