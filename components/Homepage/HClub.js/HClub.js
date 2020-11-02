import React from "react";
import Container from "../../UI/Container";
import HClubText from "./HClubText";
import HClubImg from "../../../assets/img/100club.jpg";
import "./hclub.module.css";

const HClub = () => (
  <section className="hclub-section flex">
    <Container className="hclub-wrapper">
      <HClubText />
      <span className="hclub-image-wrapper">
        <img className="hclub-image" src={HClubImg} />
      </span>
    </Container>
  </section>
);

export default HClub;
