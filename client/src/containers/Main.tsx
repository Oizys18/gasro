import React, { useEffect } from "react";
import imageOne from "assets/images/oven1.png";
import imageTwo from "assets/images/oven2.png";
import ScrollReveal from "scrollreveal";
interface Imain {}
export default function Main({ ...props }: Imain) {
  useEffect(() => {
    ScrollReveal().reveal("home__img");
  });
  return (
    <>
      <main className="l-main">
        <section className="home section bd-container" id="home">
          <div className="home__container  bd-grid">
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
          </div>
        </section>

        <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
            <div className="share__data">
              <h2 className="section-title-center">
                Sharing Is The Best Gift <br />
                You Can Give
              </h2>
              <p className="share__description">
                Sharing these holidays is the best gift you can give, give a
                present or share your love with the people you love the most and
                celebrate with great happiness.
              </p>
              <a href="#home" className="button">
                Send a Gift
              </a>
            </div>

            <div className="share__img">
              <img src={imageTwo} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
