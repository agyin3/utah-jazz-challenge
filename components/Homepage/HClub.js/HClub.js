import React from "react";
import Container from "../../UI/Container";
import HClubText from "./HClubText";
import HClubImg from "../../../assets/img/100club.jpg";
import "./hclub.module.css";

const HClub = () => (
  <section className="hclub-section flex">
    <Container className="hclub-wrapper">
      <HClubText />
      <img className="hclub-image" src={HClubImg} />
    </Container>
  </section>
);

export default HClub;
