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
          Header component

          <MenuContainer></MenuContainer>
          <MenuNavigator></MenuNavigator>
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
  margin-bottom: 5vh;

  background-color: white 0.8;
  color: black;
`;

const MenuContainer = styled.div``;
const MenuNavigator = styled.div``;
