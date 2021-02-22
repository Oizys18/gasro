import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";
import pizzaTwo from "assets/images/foods/pizza2.jpg";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import VideoDialog from "components/VideoDialog";
import MainCarousel from "components/MainCarousel";
import BannerCarousel from "components/BannerCarousel";
import leaf from "assets/images/foods/leaf.png";
import dough from "assets/images/foods/dough.jpg";

interface ILanding {}
function Landing({ ...props }: ILanding) {
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <section className="bc-container" id="main-company">
        <Wrapper className="main-container">
          <Text className="main-box">
            <p>
              설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다.
            </p>
            <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.</p>
          </Text>
          <div className="main-box">
            <Title>
              <TitleSpan>회사소개</TitleSpan>
            </Title>
            <STitle>가스텍코리아(주)</STitle>
          </div>
        </Wrapper>
        <CardWrapper className="main-container">
          {/* <div className="main-box"> */}
          <CardImg src={dough} alt="doughimg" className="main-box" />
          {/* </div> */}
          <CardContent className="main-box">
            <CardTitle>기계, 그 이상</CardTitle>
            <CardText>
              1995년 설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다. 2000년 동종업체에서는 유일하게 정부로부터 신기술
              벤처기업으로 인증 받았으며, 국제품질경영시스템 (KSA9001 / ISO9001)
              통합인증을 받았습니다. 생산공정의 개선, 디지털화, 안전성과 편이성
              증대를 실현하였으며, 제품의 다양화와 성능향상을 위해 항상 노력하고
              있습니다.
            </CardText>
          </CardContent>
        </CardWrapper>
      </section>
      <section className="bc-container" id="main-product"></section>
      <section className="bc-container" id="main-contact"></section>
    </>
  );
}

export default Landing;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 180px 0 130px;
`;

const Text = styled.div`
  text-align: right;
  font-size: 16px;
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
  border-top: 1px solid #000;
  line-height: 0.1em;
  margin: 1em 0 0.7em;
  font-size: 14px;
`;
const TitleSpan = styled.span`
  background: #fefbfb;
  padding: 0 40px 0 0;
`;

const STitle = styled.h2`
  font-size: 36px;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 460px;
  border: 0px solid transparent;
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
`;
const CardImg = styled.img`
  object-fit: cover;
  margin: none;
`;
const CardContent = styled.div``;

const CardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
const CardText = styled.div``;
