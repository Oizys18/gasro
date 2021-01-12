import * as React from "react";
import styled from "styled-components";
interface Inotice {}
function Notice({ ...props }: Inotice) {
  return (
    <>
      <MainWrapper>
        <ContentWrapper>
          <div>게시판</div>
        </ContentWrapper>
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
