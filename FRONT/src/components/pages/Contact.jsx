import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactWrapper>Contact component</ContactWrapper>
      </Container>
    );
  }
}

const ContactWrapper = styled.div``;
