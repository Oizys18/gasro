import React from "react";
import Root from "routes/Root";
import ReactDOM from "react-dom";
import Theme from "assets/styles/Theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from "assets/styles/GlobalStyles";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <Root />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
