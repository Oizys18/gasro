import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface Imain {}
function Main({ ...props }: Imain) {
  return (
    <MainWrapper>
      <Container>
        <div>Main Page</div>
      </Container>
    </MainWrapper>
  );
}

const MainWrapper = styled.div``;
export default Main;
