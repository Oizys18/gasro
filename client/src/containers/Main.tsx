import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface Imain {}
function Main({ ...props }: Imain) {
  return (
    <>
      <MainWrapper>
        <Container>
          <ContentWrapper>
            <div>Main Page</div>
          </ContentWrapper>
        </Container>
      </MainWrapper>
    </>
  );
}

export default Main;
const MainWrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  height: 1500px;
  background-color: darkgrey;
`;
