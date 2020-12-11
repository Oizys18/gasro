import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface mainState {}
export default class Contacts extends React.Component<mainState> {
  constructor(props: mainState) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <MainWrapper>
        <Container>
          <div>Main Page</div>
        </Container>
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  width: 100%;
`;
