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
import dough from "assets/images/foods/dough.jpg";
import product01 from "assets/images/product/product01.png";
import product02 from "assets/images/product/product02.png";
import product03 from "assets/images/product/product03.png";
import product04 from "assets/images/product/product04.png";
import product05 from "assets/images/product/product05.png";

interface IMain {}
function Main({ ...props }: IMain) {
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <section className="bc-container" id="main-company">
        <Wrapper className="grid-container">
          <Text className="grid-box-left">
            <p>
              설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다.
            </p>
            <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.</p>
          </Text>
          <div className="grid-box-right">
            <Title>
              <TitleSpan>회사소개</TitleSpan>
            </Title>
            <STitle>가스텍코리아(주)</STitle>
          </div>
        </Wrapper>
        <CardWrapper className="grid-container">
          <CardImg src={dough} className="grid-box-left grid-photo" />
          <CardContent className="grid-box-right">
            <CardTitle>기계, 그 이상</CardTitle>
            <CardText>
              <p>
                1995년 설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
                왔습니다.
              </p>
              <p>
                2000년 동종업체에서는 유일하게 정부로부터 신기술 벤처기업으로
                인증 받았으며,
              </p>
              <p>
                국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.
              </p>
              <p>
                생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현하였으며,
              </p>
              <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            </CardText>
            <div>
              <h3>더 읽기</h3>
            </div>
          </CardContent>
        </CardWrapper>
      </section>
      <section className="bc-container" id="main-product">
        <Wrapper className="grid-container">
          <div className="grid-box-left">
            <PTitle>
              <PTitleSpan>제품소개</PTitleSpan>
            </PTitle>
            <PTitleN>컨베이어 오븐</PTitleN>
          </div>
          <PText className="grid-box-right">
            <p>
              설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다.
            </p>
            <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.</p>
          </PText>
        </Wrapper>
        <ProductFeature className="grid-container">
          <img src={product01} alt="" className="grid-box-left grid-photo" />
          <div className="grid-box-right grid-text">
            <Title>
              <TitleSpan>01</TitleSpan>
            </Title>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
        </ProductFeature>
        <ProductFeature className="grid-container">
          <div className="grid-box-left grid-text">
            <PTitle>
              <PTitleSpan>01</PTitleSpan>
            </PTitle>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
          <img src={product02} alt="" className="grid-box-right grid-photo" />
        </ProductFeature>
        <ProductFeature className="grid-container">
          <img src={product03} alt="" className="grid-box-left grid-photo" />
          <div className="grid-box-right grid-text">
            <Title>
              <TitleSpan>01</TitleSpan>
            </Title>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
        </ProductFeature>
        <ProductFeature className="grid-container">
          <div className="grid-box-left grid-text">
            <PTitle>
              <PTitleSpan>01</PTitleSpan>
            </PTitle>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
          <img src={product02} alt="" className="grid-box-right grid-photo" />
        </ProductFeature>
        <ProductCarousel></ProductCarousel>
        <HowToUse></HowToUse>
      </section>
    </>
  );
}

export default Main;
const ProductCarousel = styled.div``;
const HowToUse = styled.div``;
const Wrapper = styled.div`
  margin: 180px 0 130px;
`;

const Text = styled.div`
  text-align: right;
  font-size: 16px;
`;

const Title = styled.div`
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
  border: 0px solid transparent;
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
`;
const CardImg = styled.img`
  height: 460px;
  width: 620px;
  object-fit: cover;
`;
const CardContent = styled.div`
  padding: 40px 40px 40px 0;
`;

const CardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 30px 0;
`;
const CardText = styled.div``;

const PText = styled.div`
  text-align: left;
  font-size: 16px;
`;

const PTitle = styled.div`
  text-align: right;
  border-top: 1px solid #000;
  line-height: 0.1em;
  margin: 1em 0 0.7em;
  font-size: 14px;
`;
const PTitleN = styled.h2`
  font-size: 36px;
  text-align: right;
`;

const PTitleSpan = styled.span`
  background: #fefbfb;
  padding: 0 0 0 40px;
`;

const ProductFeature = styled.div``;