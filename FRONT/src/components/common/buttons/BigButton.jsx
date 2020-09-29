import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
// import PropTypes from "prop-types";

export class BigButton extends Component {
  static propTypes = {};

  render() {
    return <StyledButton variant="primary">디폴트</StyledButton>;
  }
}

export default BigButton;
const StyledButton = styled(Button)`
  padding: 0 1em 0 1em;
  margin: 0 0.5em 0 0.5em;
`;
