import React, { useEffect } from "react";
import imageOne from "assets/images/oven1.png";
import imageTwo from "assets/images/oven2.png";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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
interface Imain {}
export default function Main({ ...props }: Imain) {
  return (
    <>
      <main className="l-main">
        <section className="home section bd-container" id="home">
          <div className="home__container  bd-grid">
            <Reveal keyframes={fadeDown} cascade={true} duration={800}>
              <div className="home__img">
                <img src={imageOne} alt="" />
              </div>

              <div className="home__data">
                <h1 className="home__title">GASRO QUICK</h1>
                <h2>
                  아시아 최고의 보급률을 자랑하는
                  <br /> 컨베이어 피자오븐
                </h2>
                <p className="home__description">
                  아시아 최고의 보급률을 자랑하는 컨베이어 피자오븐
                </p>
                {/* <a href="#home" className="button">
                Get Started
              </a> */}
              </div>
            </Reveal>
          </div>
        </section>
        <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
            <Reveal keyframes={fadeLeft} cascade={true} duration={1000}>
              <div className="share__data">
                <h2 className="section-title-center">
                  Sharing Is The Best Gift <br />
                  You Can Give
                </h2>
                <p className="share__description">
                  Sharing these holidays is the best gift you can give, give a
                  present or share your love with the people you love the most
                  and celebrate with great happiness.
                </p>
                <a href="#home" className="button">
                  Send a Gift
                </a>
              </div>
            </Reveal>
            <Reveal keyframes={fadeRight} duration={1800}>
              <div className="share__img">
                <img src={imageTwo} alt="" />
              </div>
            </Reveal>
          </div>
        </section>
        <section className="decoration section bd-container" id="decoration">
          <h2 className="section-title">
            Give Christmas Decorations <br />
            For Your Home
          </h2>
          <div className="decoration__container bd-grid">
            <Reveal keyframes={fadeDown} cascade={true}>
              <div className="decoration__data">
                <img
                  src="assets/img/decoration1.png"
                  alt=""
                  className="decoration__img"
                />
                <h3 className="decoration__title">Christmas Bells</h3>
                <a href="#home" className="button button-link">
                  Go Shopping
                </a>
              </div>

              <div className="decoration__data">
                <img
                  src="assets/img/decoration2.png"
                  alt=""
                  className="decoration__img"
                />
                <h3 className="decoration__title">Christmas Candies</h3>
                <a href="#home" className="button button-link">
                  Go Shopping
                </a>
              </div>

              <div className="decoration__data">
                <img
                  src="assets/img/decoration3.png"
                  alt=""
                  className="decoration__img"
                />
                <h3 className="decoration__title">Christmas Trees</h3>
                <a href="#home" className="button button-link">
                  Go Shopping
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
