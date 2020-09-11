import React, { Component } from "react";
import styled from "styled-components";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MainWrapper>
      </MainWrapper>
    );
  }
}

export default Main;

const MainWrapper = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  height: 200vh;
  width: 100vw;
  background-color:#FFFFFF;
`;
