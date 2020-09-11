import React, { Component } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

export class DefaultButton extends Component {
  static propTypes = {};

  render() {
    return <StyledButton variant="primary">디폴트</StyledButton>;
  }
}

export default DefaultButton;

const StyledButton = styled(Button)`
  /* padding:0 1em 0 1em; */
  margin: 0 0.5em 0 0.5em;
`;