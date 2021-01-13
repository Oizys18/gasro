import * as React from "react";
import Reveal from "react-awesome-reveal";
import imageOne from "assets/images/oven1.png";
import imageTwo from "assets/images/oven2.png";
import imageThree from "assets/images/oven3.png";
import { keyframes } from "@emotion/react";
import Vstepper from "components/Vstepper";
interface Iproducts {}

function Products({ ...props }: Iproducts) {
  return (
    <>
      <section className="home section bd-container" id="decoration">
        <h2 className="section-title">컨베이어 오븐</h2>
        <div className="decoration__container bd-grid">
          <Reveal keyframes={fadeDown} cascade={true} duration={800}>
            <div className="decoration__data">
              <img src={imageOne} alt="" className="decoration__img" />
              <h3 className="decoration__title">GT300</h3>
              <p className="decoration__description">
                GT-300W / GT-300 (18 인치)
              </p>
              <a href="#home" className="button button-link">
                Go Shopping
              </a>
            </div>

            <div className="decoration__data">
              <img src={imageTwo} alt="" className="decoration__img" />
              <h3 className="decoration__title">GT600</h3>
              <p className="decoration__description">
                GT-600W / GT-600 (22인치)
              </p>
              <a href="#home" className="button button-link">
                Go Shopping
              </a>
            </div>

            <div className="decoration__data">
              <img src={imageThree} alt="" className="decoration__img" />
              <h3 className="decoration__title">GT700</h3>
              <p className="decoration__description">
                GT-700W / GT-700 (33인치)
              </p>
              <a href="#home" className="button button-link">
                Go Shopping
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="accessory section bd-container" id="accessory">
        <h2 className="section-title">컨베이어 오븐</h2>

        <div className="accessory__container bd-grid">
          <Reveal keyframes={fadeDown} cascade={true} duration={500}>
            <div className="accessory__content">
              <img src={imageThree} alt="" className="accessory__img" />
              <h3 className="accessory__title">Snow Globe</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$9.45</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={imageThree} alt="" className="accessory__img" />
              <h3 className="accessory__title">Candy</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$2.52</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={imageThree} alt="" className="accessory__img" />
              <h3 className="accessory__title">Angel</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$13.15</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={imageThree} alt="" className="accessory__img" />
              <h3 className="accessory__title">Sphere</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$4.25</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={imageThree} alt="" className="accessory__img" />
              <h3 className="accessory__title">Surprise gift</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$7.99</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>
          </Reveal>
        </div>
        <div className="home__container">
          <h3 className="section-title">오븐 사용법</h3>
          <Reveal keyframes={fadeLeft} cascade={true} duration={800}>
            <Vstepper></Vstepper>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Products;
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
