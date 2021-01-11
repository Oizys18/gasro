import * as React from "react";
import styled from "styled-components";
import Container from "components/Container";
interface Inotice {}
function Notice({ ...props }: Inotice) {
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

export default Notice;
const MainWrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  height: 1500px;
  background-color: darkgrey;
`;
