import React, { Component } from "react";
import styled from "styled-components";
import DefaultButton from "components/common/buttons/DefaultButton";
// import PropTypes from 'prop-types'

export class NavUpper extends Component {
  static propTypes = {};

  render() {
    return (
      <UpperWrapper>
        <DefaultButton>제품</DefaultButton>
        <DefaultButton>회사소개</DefaultButton>
        <DefaultButton>연락처</DefaultButton>
      </UpperWrapper>
    );
  }
}

export default NavUpper;
const UpperWrapper = styled.div`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 6vh;
  padding: 0 3em 0 0;
  background-color: black;
  z-index: 2;
  -webkit-box-shadow: 0px 13px 34px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 13px 34px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 13px 34px 0px rgba(0, 0, 0, 0.75);
`;
