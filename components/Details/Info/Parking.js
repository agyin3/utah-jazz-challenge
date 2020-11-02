import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Parking = () => {
  return (
    <div className="flex blue-border info-padding column">
      <h2 className="info-heading">
        PARKING & <br />
        CHECK-IN
      </h2>
      <div className="parking-grid">
        <div className="flex benefits-text">
          <FontAwesomeIcon className="benefits-icon" icon="car" />
          <span>
            <p className="info-text">
              VIP parking in the Park Place lot located right next to Vivint
              Smart Home Arena
            </p>
            <a className="about-link">VIEW PARKING MAP</a>
          </span>
        </div>

        <div className="flex benefits-text">
          <FontAwesomeIcon className="benefits-icon" icon="map-signs" />
          <span>
            <p className="info-text">
              Easy check-in: Talk to the host at any suite level (level 4)
              entrance to check-in
            </p>
            <a className="about-link">VIEW CHECK-IN LOCATIONS</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parking;
