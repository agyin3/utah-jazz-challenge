import React from "react";

const Card = ({ heading, info, image }) => (
  <div className="card-container">
    <img className="card-image" src={image} />
    <div className="card-text-container">
      <h3 className="card-heading yellow-text">{heading}</h3>
      <p className="card-info">{info}</p>
      <a className="yellow-text card-link link-button">Learn More</a>
    </div>
  </div>
);

export default Card;
