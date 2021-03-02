import React, { useState } from "react";
import BannerCarousel from "components/BannerCarousel";
import dough from "assets/images/foods/dough.jpg";
import ProductCard from "components/ProductCard";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import gt300AB from "assets/images/ovens/gt300AB.png";
// import gt600AB from "assets/images/ovens/gt600AB.png";
// import gt700AB from "assets/images/ovens/gt700AB.png";
// import pizzaTwo from "assets/images/foods/pizza2.jpg";
// import Reveal from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
// import VideoDialog from "components/VideoDialog";
// import MainCarousel from "components/MainCarousel";
import product01 from "assets/images/product/product01.png";
import product02 from "assets/images/product/product02.png";
import product03 from "assets/images/product/product03.png";
import product04 from "assets/images/product/product04.png";
import product05 from "assets/images/product/product05.png";

interface IMain {}
function Main({ ...props }: IMain) {
  return (
    <>
      <section id="banner">
        <BannerCarousel></BannerCarousel>
      </section>
      <section id="company" className="basic-container ">
        <div className="mg-container">
          <div className="mg-item-l content">
            <p>
              설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다.
            </p>
            <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.</p>
          </div>
          <div className="mg-item-r title">
            <div className="mg-title-l">
              <span>회사소개</span>
            </div>
            <h2>가스텍코리아(주)</h2>
          </div>
        </div>
        <div className="mg-container mg-card">
          <img src={dough} alt="" className="mg-img title" />
          <div className="mg-item-r content">
            <div>기계, 그 이상</div>
            <div>
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
            </div>
          </div>
        </div>
      </section>
      <section id="product" className="basic-container ">
        <div className="mg-container">
          <div className="mg-item-l title">
            <div className="mg-title-r">
              <span>제품소개</span>
            </div>
            <h2>컨베이어 오븐</h2>
          </div>
          <div className="mg-item-r content">
            <p>
              설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
              왔습니다.
            </p>
            <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.</p>
          </div>
        </div>
        <div className="mg-container">
          <img src={product01} alt="" className="mg-img content" />
          <div className="mg-item-r title">
            <div className="mg-title-l">
              <span className="numTitle">01</span>
            </div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
        </div>
        <div className="mg-container">
          <div className="mg-item-l title">
            <div className="mg-title-r">
              <span className="numTitle">02</span>
            </div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
          <img src={product02} alt="" className="mg-img content" />
        </div>
        <div className="mg-container">
          <img src={product03} alt="" className="mg-img content" />
          <div className="mg-item-r title">
            <div className="mg-title-l">
              <span className="numTitle">03</span>
            </div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
        </div>
        <div className="mg-container">
          <div className="mg-item-l title">
            <div className="mg-title-r">
              <span className="numTitle">04</span>
            </div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
          <img src={product02} alt="" className="mg-img content" />
        </div>
        <div className="card-container" id="card-container">
          <ProductCard></ProductCard>
        </div>
      </section>
      <section id="instruction">
        <div className="instruction">사용설명</div>
      </section>
      <section id="support" className="support-wrapper">
        <div className="basic-container support-container">
          <h1 className="support-title">무엇이든 물어보세요 </h1>
          <div className="support-content">
            가스텍코리아 기술 전문가가 도와드립니다.
          </div>
          <a href="/notice" className="support-link">
            문의하기
          </a>
        </div>
      </section>
    </>
  );
}

export default Main;
