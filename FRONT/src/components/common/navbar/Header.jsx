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
          <MenuContainer>
            <MenuFront>
              <Logo>
                <img src="" alt="" />
              </Logo>
              <MenuNavigator>
                <a href="/products">제품</a>
                <a href="/company">회사소개</a>
                <a href="/notice">공지사항</a>
                <a href="/contact">상담문의</a>
              </MenuNavigator>
            </MenuFront>
            <MenuBack>
              <IconButton></IconButton>
            </MenuBack>
          </MenuContainer>
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
  width: 100%;
  /* position & size */
  position: sticky;
  top: 0;
  left: 0;
  color: black;
  background-color: #f0f4f7;
  border-bottom: 1px solid lightgrey;
  z-index: 1;
`;

const MenuContainer = styled.div`
  height: 3rem;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
`;
const MenuNavigator = styled.div``;

const Logo = styled.div`
  margin: 1em;
  padding: 0 15px 0 15px;
`;

const IconButton = styled.div``;

const MenuFront = styled.div`
  display: flex;
  justify-content: cetner;
  align-items: center;
`;
const MenuBack = styled.div``;
