import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export default class Contact extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <Container>
        <ContactWrapper>Contact component</ContactWrapper>
      </Container>
    );
  }
}

const ContactWrapper = styled.div``;
