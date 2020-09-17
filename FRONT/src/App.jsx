import React from "react";
import styled from "styled-components";
import "assets/styles/App.scss";

import Main from "components/views/Main.jsx";

function App() {
  return (
    <AppWrapper>
      <Main/>
    </AppWrapper>
  );
}
export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 200vh;
  background-color: ghostwhite;
  display: flex;
  overflow: hidden;
`;
