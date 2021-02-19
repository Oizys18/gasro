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

interface ILanding {}
function Landing({ ...props }: ILanding) {
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <section className="bd-container" id="main-company">
        <Wrapper>
          <Text>
            <p>
              설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다.
            </p>
            <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.</p>
          </Text>
          <div>
            <Title>
              <TitleSpan>회사소개</TitleSpan>
            </Title>
            <STitle>가스텍코리아(주)</STitle>
          </div>
        </Wrapper>
        <CardWrapper></CardWrapper>
      </section>
      <section className="bd-container" id="main-product"></section>
      <section className="bd-container" id="main-contact"></section>
    </>
  );
}

export default Landing;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 5rem 0 2rem;
`;

const Text = styled.div`
  text-align: right;
  font-size: 16px;
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 15px 0 7px;
  font-size: 14px;
`;
const TitleSpan = styled.span`
  background: #fefbfb;
  padding: 0 30px 0 0;
`;

const STitle = styled.h2`
  font-size: 36px;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 462px;
  border: 1px solid black;
`;
