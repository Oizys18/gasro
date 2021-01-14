import React, { useState } from "react";
import { Link } from "react-router-dom";
import imageOne from "assets/images/oven1.png";
import imageTwo from "assets/images/oven2.png";
import imageFour from "assets/images/oven4.png";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import VideoDialog from "components/VideoDialog";
import MainCarousel from "components/MainCarousel";
interface Imain {}
export default function Main({ ...props }: Imain) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <VideoDialog open={open} handleClose={handleClose}></VideoDialog>
      {/* <MainCarousel></MainCarousel> */}
      <main className="l-main" id="top">
        <section className="home section bd-container" id="home">
          <div className="home__container  bd-grid">
            <div className="home__img">
              <Reveal keyframes={fadeDown} duration={800}>
                <img src={imageOne} alt="" />
              </Reveal>
            </div>

            <div className="home__data ">
              <Reveal keyframes={fadeDown} duration={800}>
                <h1 className="home__title ">Gasro Quick</h1>
                <h2>
                  아시아 최고의 보급률을 자랑하는
                  <br /> 컨베이어 피자오븐
                </h2>
                <p className="home__description">
                  아시아 최고의 보급률을 자랑하는 컨베이어 피자오븐
                </p>
                <a href="#" className="button" onClick={handleClickOpen}>
                  소개영상 재생
                </a>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
            <Reveal keyframes={fadeLeft} cascade={true} duration={1000}>
              <div className="share__data">
                <h2 className="section-title-center">
                  GASRO QUICK <br />
                  컨베이어 피자오븐
                </h2>
                <p className="share__description">
                  Sharing these holidays is the best gift you can give, give a
                  present or share your love with the people you love the most
                  and celebrate with great happiness.
                </p>
                <Link to="/products">
                  <div className="button">제품소개</div>
                </Link>
              </div>
            </Reveal>
            <div className="share__img">
              <Reveal keyframes={fadeRight} duration={1800}>
                <img src={imageTwo} alt="" />
              </Reveal>
            </div>
          </div>
        </section>
        <section className="decoration section bd-container" id="decoration">
          <h2 className="section-title">
            컨베이어 피자오븐 <br />
            For Your Home
          </h2>
          <div className="decoration__container bd-grid">
            <Reveal keyframes={fadeDown} cascade={true}>
              <div className="decoration__data">
                <img src={imageTwo} alt="" className="decoration__img" />
                <h3 className="decoration__title">GT500</h3>
                <a href="#home" className="button button-link">
                  Go Shopping
                </a>
              </div>

              <div className="decoration__data">
                <img src={imageOne} alt="" className="decoration__img" />
                <h3 className="decoration__title">GT500</h3>
                <a href="#home" className="button button-link">
                  Go Shopping
                </a>
              </div>

              <div className="decoration__data">
                <img src={imageFour} alt="" className="decoration__img" />
                <h3 className="decoration__title">GT500</h3>
                <a href="#top" className="button button-link">
                  Go Shopping
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="send section">
          <div className="send__container bd-container bd-grid">
            <div className="send__content">
              <h2 className="section-title-center send__title">추가홍보문구</h2>
              <p className="send__description">
                아시아 최고의 보급률을 자랑하는 컨베이어 피자오븐 아시아 최고의
                보급률을 자랑하는 컨베이어 피자오븐
              </p>
              {/* <form action="">
                <div className="send__direction">
                  <input
                    type="text"
                    placeholder="House address"
                    className="send__input"
                  />
                  <a href="#" className="button">
                    Send
                  </a>
                </div>
              </form> */}
            </div>
          </div>
        </section>
        {/* <section className="decoration section bd-container" id="decoration">
          <h2 className="section-title">홍보영상</h2>
          <div className="videoH">
            <Video></Video>
          </div>
        </section> */}
      </main>
    </>
  );
}
const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeLeft = keyframes`
from {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

const fadeRight = keyframes`
from {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;
