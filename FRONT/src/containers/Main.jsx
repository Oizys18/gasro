import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Banner>banner</Banner>
        <Container>
          <Content>Main Content</Content>
        </Container>
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div``;

const Content = styled.div`
  background-color: grey;
  height: 100vh;
`;
const Banner = styled.div`
  width: 100%;
  background-color: lightgrey;
  height: 70vh;
  z-index: 0;
`;
