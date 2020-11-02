import React from "react";
import Homepage from "./components/views/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faCheckCircle,
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneSquareAlt, faEnvelope, faCheckCircle, faCaretDown);

const App = () => <Homepage />;

export default App;
