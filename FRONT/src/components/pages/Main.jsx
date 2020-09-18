import React, { Component } from "react";
import styled from "styled-components";

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <h1>Main page</h1>
      </MainWrapper>
    );
  }
}

export default Main;

const MainWrapper = styled.div`
  background-color: grey;
  width: 1080px;
  height: 720px;
  justify-content: center;
  align-items: center;
`;
