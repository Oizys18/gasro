import React, { useState } from "react";
import ProductCard from "components/Card/ProductCard";
import BannerCarousel from "components/Carousel/BannerCarousel";
import ICarousel from "components/Carousel/ICarousel";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "config/lang/i18n";
import dough from "assets/images/foods/dough.jpg";
import product01 from "assets/images/product/product01.png";
import product02 from "assets/images/product/product02.png";
import product03 from "assets/images/product/product03.png";
import product04 from "assets/images/product/product04.png";
import product05 from "assets/images/product/product05.png";
// import Reveal from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
import MainCard from "components/Card/MainCard";
import TextCard from "components/Card/TextCard";
import styled from "styled-components";

interface IMain {}
function Main({ ...props }: IMain) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="banner">
        <BannerCarousel></BannerCarousel>
      </section>
      <section id="company" className="basic-container company">
        <MainCard
          Lchildren={
            <TextCard
              Mchildren={<>가스텍코리아(주)</>}
              Schildren={<>회사소개</>}
            />
          }
          Rchildren={
            <>
              <p>1995년 설립, 20년 이상의 피자오븐기계 전문제조 경력</p>
              <p>국제품질경영시스템 (KSA9001 / ISO9001) 통합인증 보유</p>
              <p>지속적인 연구개발을 통한 제품 혁신</p>
            </>
          }
        />

        <MainCard
          Lchildren={<img src={dough} alt="dough" className="mg-img title" />}
          Rchildren={
            <>
              <div className="maintitle">기계, 그 이상</div>
              <div>
                <p>
                  1995년 설립 이후 혁신과 도전으로 끊임없이 연구하며 지속
                  성장하여 왔습니다.
                </p>
                <p>
                  2000년 동종업체에서는 유일하게 정부로부터 신기술 벤처기업으로
                  인증 받았으며,
                </p>
                <p>
                  <br />
                  국제품질경영시스템 (KSA9001 / ISO9001) 통합인증을 받았습니다.
                </p>
                <p>
                  생산공정의 개선, 디지털화, 안전성과 편이성 증대를
                  실현하였으며,
                </p>
                <p>제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.</p>
              </div>
              <div className="mg-card-badge">
                <a
                  href="https://www.youtube.com/watch?v=N0lhgytbjQo"
                  target="_blank"
                >
                  홍보영상
                </a>
                <a
                  href="https://goo.gl/maps/s6MNjjkPMY6cb37PA "
                  target="_blank"
                >
                  찾아오시는 길
                </a>
              </div>
            </>
          }
        />
      </section>
      <section id="product" className="basic-container ">
        <MainCard
          Lchildren={
            <>
              <p>아시아 최고의 보급율을 자랑하는 컨베이어 피자오븐</p>
              <p>
                컨베이어와 터널을 통해 연속으로 다량의 피자를 조리해낼 수
                있습니다.
              </p>
              <p>분해, 조립이 간편하여 청소하기 용이합니다.</p>
            </>
          }
          Rchildren={
            <TextCard
              Mchildren={<>컨베이어 오븐</>}
              Schildren={<>제품소개</>}
            />
          }
        />
        <MainCard
          Lchildren={<img src={product01} alt="" className="mg-img" />}
          Rchildren={
            <>
              <div className="numTitle-r">
                <span>01</span>
              </div>
              <div className="maintitle">스테인레스 강</div>
              <p>스테인리스강을 사용해 내구성이 높습니다.</p>
              <p>부식이 되지 않아 안전한 식품조리에 최적인 재질입니다.</p>
              <p>오븐 내부의 열이 표면으로 전달되지 않도록 설계되었습니다.</p>
            </>
          }
        />
        <MainCard
          Lchildren={
            <>
              <div className="numTitle-l">
                <span>02</span>
              </div>
              <div className="maintitle">고성능 부품</div>
              <p>오븐 제어에 최적화된 자체제작 전용 PC를 부착했습니다.</p>
              <p>
                고성능 온도센서와 온도제어 알고리즘 내장하여 정확한 온도조절이
                가능합니다.
              </p>
              <p>가스 누출감지 센서를 부착하여 가스안전 사고를 방지합니다.</p>
            </>
          }
          Rchildren={<img src={product02} alt="" className="mg-img " />}
        />
        <MainCard
          Lchildren={<img src={product03} alt="" className="mg-img " />}
          Rchildren={
            <>
              <div className="numTitle-r">
                <span>03</span>
              </div>
              <div className="maintitle">내부 열순환 시스템</div>
              <p>고온의 가열된 공기를 분사, 순환시키는 제트핑거방식으로</p>
              <p>
                빠르게 음식물을 가열하고 열을 순환시켜 에너지 소비를
                최소화합니다.
              </p>
              <p>
                오븐 내부의 열 전달이 골고루 이루어져 원활한 조리가 가능합니다.
              </p>
            </>
          }
        />

        <MainCard
          Lchildren={
            <>
              <div className="numTitle-l">
                <span>04</span>
              </div>
              <div className="maintitle">측면 유리창</div>
              <p>
                조리과정을 한눈에 확인할 수 있는 측면 유리창이 추가 가능합니다.
              </p>
              <p>열손실은 최대한 줄이고 사용성은 높였습니다.</p>
            </>
          }
          Rchildren={<img src={product04} alt="" className="mg-img " />}
        />

        <MainCard
          Lchildren={<img src={product05} alt="" className="mg-img " />}
          Rchildren={
            <>
              <div className="numTitle-r">
                <span>05</span>
              </div>
              <div className="maintitle">최대 3단 적재 가능</div>
              <p>2단, 3단 적재를 통해 높은 공간 효율성을 확보했으며</p>
              <p>안정적으로 고정되어 흔들리지 않고 사고위험이 없습니다.</p>
              <p>한정된 주방 공간을 위한 최적의 선택입니다.</p>
            </>
          }
        />

        <div className="card-container" id="product-detail">
          <ProductCard></ProductCard>
        </div>
      </section>
      <section id="instruction" className="instruction-wrapper">
        <ICarousel></ICarousel>
      </section>
      <section id="support" className="supportlink-wrapper">
        <div className="basic-container supportlink-container">
          <h1 className="supportlink-title">무엇이든 물어보세요 </h1>
          <div className="supportlink-content">
            가스텍코리아 기술 전문가가 도와드립니다.
          </div>
          <a href="/support" className="supportlink">
            문의하기
          </a>
        </div>
      </section>
    </>
  );
}

export default Main;

const MContainer = styled.div`
  /* max-width: 1280px;
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto; */
`;
