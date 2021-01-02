import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import MainCarousel from "components/MainCarousel";
import SimpleTabs from "components/SimpleTabs";
interface Imain {}
export default function Main({ ...props }: Imain) {
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
            <SimpleTabs></SimpleTabs>
          </ContentWrapper>
        </Container>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled.div``;

const Card = styled.div`
  width: 50%;
`;
