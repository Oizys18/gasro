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
      <Container>
        <FooterWrapper>Footer component</FooterWrapper>
      </Container>
    );
  }
}

const FooterWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  /* size & position */
  background-color: #ffffff;
  position: relative;
  bottom: 0;
  height: 5vh;
`;
