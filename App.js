import React from "react";
import Homepage from "./components/views/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faCaretDown,
  faCheckCircle,
  faCircle,
  faEnvelope,
  faInfoCircle,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

import Details from "./components/views/Details";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

library.add(
  faPhoneSquareAlt,
  faEnvelope,
  faCheckCircle,
  faCaretDown,
  faFilePdf,
  faAngleLeft,
  faCircle,
  faInfoCircle
);

const App = () => {
  return (
    // <Homepage />
    <Details />
  );
};

export default App;
