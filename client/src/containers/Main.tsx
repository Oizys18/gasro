import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import MainCarousel from "components/MainCarousel";
import BasicCard from "components/BasicCard";
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
            <Card>
              <BasicCard></BasicCard>
            </Card>
            <Card>
              <BasicCard></BasicCard>
            </Card>
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

const Card = styled.div`
  width: 50%;
`;
