import * as React from "react";
import imageOne from "assets/images/oven1.png";
import imageTwo from "assets/images/oven2.png";
interface Imain {}
export default function Main({ ...props }: Imain) {
  return (
    <>
      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__img">
              <img src={imageOne} alt="" />
            </div>

            <div className="home__data">
              <h1 className="home__title">최고야</h1>
              <p className="home__description">아시아 최대판매 가스오븐</p>
              <a href="#home" className="button">
                Get Started
              </a>
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
