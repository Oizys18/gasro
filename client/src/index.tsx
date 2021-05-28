import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "assets/styles/GlobalStyles";
import "config/lang/i18n";
import App from "App";

// Root, 글로벌 스타일 적용, ReactDOM
ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
