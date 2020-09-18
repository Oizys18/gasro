import React from "react";
import ReactDOM from "react-dom";
import Root from "routes/Root";
import GlobalStyles from "assets/styles/GlobalStyles";
import Theme from "assets/styles/Theme";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <Root />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
