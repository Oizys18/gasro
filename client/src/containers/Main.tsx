import * as React from "react";
import styled from "styled-components";

interface mainState {}
export default class Main extends React.Component<mainState> {
  constructor(props: mainState) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <MainWrapper>
        <div>Main</div>
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  width: 100%;
`;
