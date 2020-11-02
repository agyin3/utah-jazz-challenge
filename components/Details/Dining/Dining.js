import React from "react";
import foodBg from "../../../assets/img/food-bg.png";
import "./dining.module.css";

const Dining = () => (
  <section
    style={{ backgroundImage: `url(${foodBg})` }}
    className="dining-section"
  >
    <div className="dining-text">
      <p>EXPERIENCE WORLD CLASS FOOD AND BEVERAGE OPTIONS</p>
    </div>
  </section>
);

export default Dining;
