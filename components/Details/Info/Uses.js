import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const usesData = [
  {
    title: "Business \n Development",
    examples: [
      "Client Entertainment",
      "Relationship Development",
      "Generate Referrals by Inviting Clients to Bring Colleagues & Friends",
    ],
  },
  {
    title: "Client \n Retention",
    examples: [
      "Renew Accounts",
      "Reduce Attrition",
      "Relationship Development",
      "Current Customer Upsell",
      "New Product/Service Launch",
    ],
  },
  {
    title: "Employee \n Usage",
    examples: [
      "Employee Recruitment & Retention",
      "Employee Benefit Programs",
      "Employee Incentives",
      "Internal Contests",
      "Employee Families",
      "Holiday Events/Parties",
      "Conferences",
    ],
  },
  {
    title: "Executive \n Utilization",
    examples: [
      "Executive Team Building",
      "Quarterly Meetings",
      "Investors & Shareholders",
      "Personal Entertainment",
    ],
  },
  {
    title: "Community \n Relations",
    examples: [
      "Complement Current Charitable Programs",
      "Donate for Auctions or Raffles",
      "Host 501(c)(3) Organizations",
    ],
  },
];

const Uses = () => {
  return (
    <div>
      <span className="flex">
        <FontAwesomeIcon
          className="yellow-text info-heading uses-icon"
          icon="plus-circle"
        />
        <h2 className="info-heading">POSSIBLE USES</h2>
      </span>
      <div className="uses-grid">
        {usesData.map(({ title, examples }) => (
          <div className="uses-text-wrapper">
            <h3 className="blue-border uses-sub-heading">{title}</h3>
            <ul className="uses-examples">
              {examples.map((example) => (
                <li className="info-text uses-list-items">{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uses;
