import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <HeaderWrapper>
        Header component
        <MenuContainer></MenuContainer>
        <MenuNavigator></MenuNavigator>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;

  background-color: white 0.8;
  color: black;
`;

const MenuContainer = styled.div``;
const MenuNavigator = styled.div``;
