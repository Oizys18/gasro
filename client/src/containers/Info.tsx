import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface Iinfo {}
function Info({ ...props }: Iinfo) {
  return (
    <>
      <MainWrapper>
        <Container>
          <ContentWrapper>
            <div>게시판</div>
          </ContentWrapper>
        </Container>
      </MainWrapper>
    </>
  );
}

export default Info;
const MainWrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  height: 1500px;
  background-color: darkgrey;
`;
