import React, { Component } from "react";
import styled from "styled-components";

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <h1>Main page</h1>
        <Content>
          Main Content
        </Content>
      </MainWrapper>
    );
  }
}

export default Main;

const MainWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Content = styled.div`
  background-color:grey;
  width: 50vw;
  height: 50vh;
`;
