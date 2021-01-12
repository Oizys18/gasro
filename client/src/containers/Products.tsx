import * as React from "react";
import styled from "styled-components";
import Container from "components/Container";
import MainCarousel from "components/MainCarousel";
interface Iproducts {}

function Products({ ...props }: Iproducts) {
  return (
    <>
      <section className="decoration section bd-container" id="decoration">
        <h2 className="section-title">
          Give Christmas Decorations <br />
          For Your Home
        </h2>
        <div className="decoration__container bd-grid">
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
        </div>
      </section>

      <section className="accessory section bd-container" id="accessory">
        <h2 className="section-title">
          New Christmas <br />
          Accessories
        </h2>

        <div className="accessory__container bd-grid">
          <div className="accessory__content">
            <img
              src="assets/img/accessory1.png"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Snow Globe</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$9.45</span>
            <a href="#home" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="assets/img/accessory2.png"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Candy</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$2.52</span>
            <a href="#home" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="assets/img/accessory3.png"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Angel</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$13.15</span>
            <a href="#home" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="assets/img/accessory4.png"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Sphere</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$4.25</span>
            <a href="#home" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="assets/img/accessory5.png"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Surprise gift</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$7.99</span>
            <a href="#home" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
const ProductWrapper = styled.div`
  overflow: hidden;
`;
