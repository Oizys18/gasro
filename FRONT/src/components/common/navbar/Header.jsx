import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <HeaderWrapper>
        <Container>
          <MenuContainer>MenuContainer</MenuContainer>
          <MenuNavigator>MenuNavigator</MenuNavigator>
        </Container>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  /* alignment */
  justify-content: center;
  align-items: center;
  display: flex;

  /* position & size */
  position: sticky;
  top: 0;
  left: 0;
  background-color: white 0.8;
  color: black;
  border-bottom: 1px solid lightgrey;
`;

const MenuContainer = styled.div`
  background-color: grey;
`;
const MenuNavigator = styled.div`
  background-color:lightgrey;
`;
