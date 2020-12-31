import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "assets/styles/GlobalStyles";
import theme from "assets/styles/theme";
import Routes from "routes/Routes";
import { ThemeProvider } from "assets/styles/theme-components";
import "config/lang/i18n";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
