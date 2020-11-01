import React from "react";
import OptionsCard from "./OptionsCard";
import Container from "../../UI/Container";
import "./options.module.css";
import clubs from "../../../assets/img/clubs.jpg";
import logeBox from "../../../assets/img/loge-box.jpg";
import suites from "../../../assets/img/suites.jpg";

// ARRAY HOLDS LINK FOR EACH OPTION

const options = Array.from(new Array(9), (x, idx) => ({
  img: idx % 3 == 0 ? clubs : idx % 3 == 1 ? suites : logeBox,
  text: "EIDE BAILLY SUITE LEVEL",
  link: "/details",
}));

const Options = () => (
  <section className="blue-bg options-container">
    <Container>
      <h2 className="options-heading yellow-text">
        EXPLORE OUR PREMIUM SEATING OPTIONS
      </h2>
      <div className="flex options-wrapper">
        {options.map((option) => (
          <OptionsCard {...option} />
        ))}
      </div>
    </Container>
  </section>
);

export default Options;
