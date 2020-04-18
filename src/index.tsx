import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faPlus,
  faCheck,
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowRight,
  faPlus,
  faCheck,
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
  faRetweet
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();