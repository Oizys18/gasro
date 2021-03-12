import React, { useState } from "react";
import BannerCarousel from "components/BannerCarousel";
import dough from "assets/images/foods/dough.jpg";
import ProductCard from "components/ProductCard";
import ICarousel from "components/ICarousel";
import product01 from "assets/images/product/product01.png";
import product02 from "assets/images/product/product02.png";
import product03 from "assets/images/product/product03.png";
import product04 from "assets/images/product/product04.png";
// import product05 from "assets/images/product/product05.png";
import VideoDialog from "components/VideoDialog";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "config/lang/i18n";

// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Reveal from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
// import VideoDialog from "components/VideoDialog";
// import MainCarousel from "components/MainCarousel";
interface IMain {}
function Main({ ...props }: IMain) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section id="banner">
        <VideoDialog open={open} handleClose={handleClose}></VideoDialog>
        <BannerCarousel></BannerCarousel>
      </section>
      <section id="company" className="basic-container company">
        <div className="mg-container">
          <div className="mg-item-l content">
            <p>1995년 설립, 20년 이상의 피자오븐기계 전문제조 경력</p>
            <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증 보유</p>
            <p>지속적인 연구개발을 통한 제품 혁신</p>
          </div>
          <div className="mg-item-r ">
            <div className="subtitle">회사소개</div>
            <div className="maintitle">가스텍코리아(주)</div>
          </div>
        </div>
        <div className="mg-container mg-card mg-wrapper">
          <img
            onClick={handleClickOpen}
            src={dough}
            alt="dough"
            className="mg-img title videoImg"
          />
          <div className="mg-item-r mg-card-content">
            <div className="maintitle">기계, 그 이상</div>
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
          <div className="mg-item-l ">
            <div className="subtitle">제품소개</div>
            <div className="maintitle">컨베이어 오븐</div>
          </div>
          <div className="mg-item-r ">
            <p>아시아 최고의 보급율을 자랑하는 컨베이어 피자오븐</p>
            <p>
              컨베이어와 터널을 통해 연속으로 다량의 피자를 조리해낼 수
              있습니다.
            </p>
            <p>분해, 조리가 간편하여 청소하기 용이합니다.</p>
          </div>
        </div>
        <div className="mg-container">
          <img src={product01} alt="" className="mg-img " />
          <div className="mg-item-r ">
            <div className="numTitle-r">
              <span>01</span>
            </div>
            <div className="maintitle">스테인레스 스틸 조형</div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
        </div>
        <div className="mg-container">
          <div className="mg-item-l ">
            <div className="numTitle-l">
              <span>02</span>
            </div>
            <div className="maintitle">스테인레스 스틸 조형</div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
          <img src={product02} alt="" className="mg-img " />
        </div>
        <div className="mg-container">
          <img src={product03} alt="" className="mg-img " />
          <div className="mg-item-r ">
            <div className="numTitle-r">
              <span>03</span>
            </div>
            <div className="maintitle">스테인레스 스틸 조형</div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
        </div>
        <div className="mg-container">
          <div className="mg-item-l ">
            <div className="numTitle-l">
              <span>04</span>
            </div>
            <div className="maintitle">스테인레스 스틸 조형</div>
            <p>스테인레스 스틸 조형</p>
            <p>생산공정의 개선, 디지털화, 안전성과 편이성 증대를 실현</p>
            <p>스테인레스 스틸 조형</p>
          </div>
          <img src={product04} alt="" className="mg-img " />
        </div>
        <div className="card-container" id="card-container">
          <ProductCard></ProductCard>
        </div>
      </section>
      <section id="instruction" className="instruction-wrapper">
        <ICarousel></ICarousel>
      </section>
      <section id="support" className="support-wrapper">
        <div className="basic-container support-container">
          <h1 className="support-title">무엇이든 물어보세요 </h1>
          <div className="support-content">
            가스텍코리아 기술 전문가가 도와드립니다.
          </div>
          <a href="/support" className="support-link">
            문의하기
          </a>
        </div>
      </section>
    </>
  );
}

export default Main;
