import React from "react";
import Routes from "routes/Routes";
import ReactDOM from "react-dom";
import Theme from "assets/styles/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "assets/styles/GlobalStyles";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <Routes />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
