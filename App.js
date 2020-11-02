import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/views/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faBars,
  faCar,
  faCaretDown,
  faCheckCircle,
  faCircle,
  faEnvelope,
  faInfoCircle,
  faMapSigns,
  faPhoneSquareAlt,
  faPlusCircle,
  faStreetView,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import Details from "./components/views/Details";
import { faFilePdf, faLightbulb } from "@fortawesome/free-regular-svg-icons";

library.add(
  faPhoneSquareAlt,
  faEnvelope,
  faCheckCircle,
  faCaretDown,
  faFilePdf,
  faAngleLeft,
  faCircle,
  faInfoCircle,
  faCar,
  faMapSigns,
  faPlusCircle,
  faStreetView,
  faLightbulb,
  faUsers,
  faBars
);

const App = () => {
  return (
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Homepage />
        {/* <Details /> */}
      </Route>
    </Switch>
  );
};

export default App;
