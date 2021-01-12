import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "assets/styles/GlobalStyles";
import Routes from "routes/Routes";
import "config/lang/i18n";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
