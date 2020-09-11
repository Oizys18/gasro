import React, { Component } from "react";
import styled from "styled-components";
import DefaultButton from "components/common/buttons/DefaultButton";
// import PropTypes from 'prop-types'

export class NavUpper extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: "",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    let nav = document.getElementById("navbar-upper");
    if (scrollTop == 0) {
      this.setState({ bgColor: "black" });
    } else {
      this.setState({ bgColor: "#FFFFFF" });
    }
  };
  render() {
    return (
      <UpperWrapper
        id="navbar-upper"
        style={{
          backgroundColor: this.state.bgColor ? this.state.bgColor : "black",
        }}
      >
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
  z-index: 2;
  background-color: "black";
  transition: 0.3s;
`;
