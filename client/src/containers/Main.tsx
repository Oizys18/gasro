import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import MainCarousel from "components/MainCarousel";
interface Imain {}
function Main({ ...props }: Imain) {
  return (
    <>
      <MainWrapper>
        <MainCarousel
          autoPlay={true}
          useKeyboardArrows={true}
          swipeable={true}
          interval={3000}
          infiniteLoop={true}
        />
        <Container>
          <ContentWrapper>
            <div>메인 페이지 컨텐츠 영역</div>
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
