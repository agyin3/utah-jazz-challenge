import React from "react";
import Container from "../../UI/Container";
import Card from "./Card";
import suite from "../../../assets/img/suites.jpg";
import clubs from "../../../assets/img/clubs.jpg";
import "./cards.module.css";

const cardInformation = [
  {
    heading: "LUXURY SUITES",
    info:
      "Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Porro cumque, id, et placeat suscipit atque nobis deserunt explicabo doloremque aliquid, consectetur.",
    image: suite,
  },
  {
    heading: "EXCLUSIVE CLUBS",
    info:
      "Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Porro cumque, id, et placeat suscipit atque nobis deserunt explicabo doloremque aliquid, consectetur.",
    image: clubs,
  },
];

const InfoCards = () => (
  <Container className="cards-wrapper">
    {cardInformation.map((card) => (
      <Card {...card} />
    ))}
  </Container>
);

export default InfoCards;
