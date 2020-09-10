import React from "react";
import styled from "styled-components"
import 'assets/styles/App.scss'
import Main from "components/views/Main.jsx";
// import NavSide from "components/common/navbar/NavSide";
import NavUpper from "components/common/navbar/NavUpper";

function App() {
  return (
    <AppWrapper>
      <NavUpper></NavUpper>
      {/* <NavSide></NavSide> */}
      <Main></Main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width:100%;
  height:100%;
  background-color:ghostwhite;
  display:flex;
  overflow:hidden;
`