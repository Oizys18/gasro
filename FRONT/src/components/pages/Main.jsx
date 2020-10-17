import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <MainWrapper>
          <h1>Main page</h1>
          <Content>Main Content</Content>
        </MainWrapper>
      </Container>
    );
  }
}



const MainWrapper = styled.div` 


`;

const Content = styled.div`
  background-color: grey;
  height: 100vh;
`;
