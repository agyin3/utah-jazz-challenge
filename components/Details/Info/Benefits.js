import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const benefitsData = [
  "Private Suite",
  "Flat screen TV in each suite",
  "420–490 square feet depending on the location",
  "WiFi access",
  "Lounge seating area for four with coffee table at the back of suite",
  "18–32 tickets in a luxury suite (varies by location)",
  "High-top counter in middle, and drink rails at the back of the fixed-seating area",
  "VIP parking passes",
  "Dedicated suite attendant for each game and arena event",
  "Food credit for catering to both Utah Jazz games and arena events",
];

const Benefits = () => {
  return (
    <div className="flex benefits-container blue-border info-padding">
      <h2 className="info-heading">
        BENEFITS & <br />
        AMENITIES
      </h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit) => (
          <div className="flex benefits-text">
            <FontAwesomeIcon className="benefits-icon" icon="check-circle" />
            <p className="info-text">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
