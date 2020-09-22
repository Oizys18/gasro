import React from "react";
import { ThemeProvider } from "styled-components";
import Media from "./Media";
const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      primaryFont: "Arial",
      primaryColor: "#ffffff",
      ...Media,
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;