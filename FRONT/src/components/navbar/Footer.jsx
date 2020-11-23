import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <FooterWrapper>
        <Container>
          <FooterTop>Footer Top</FooterTop>
          <FooterBottom>Footer Bottom</FooterBottom>
        </Container>
      </FooterWrapper>
    );
  }
}
const FooterWrapper = styled.div`
  width: 100%;
`;
const FooterTop = styled.div`
  /* size & position */
  background-color: #ffffff;
  position: relative;
  bottom: 0;
  height: 5vh;
`;
const FooterBottom = styled.div`
  /* size & position */
  background-color: #ffffff;
  position: relative;
  bottom: 0;
  height: 5vh;
`;
