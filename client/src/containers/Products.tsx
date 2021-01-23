import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import gt300D from "assets/images/ovens/gt300D.png";
import gt300ND from "assets/images/ovens/gt300ND.png";
import gt600D from "assets/images/ovens/gt600D.png";
import gt600ND from "assets/images/ovens/gt600ND.png";
import gt700D from "assets/images/ovens/gt700D.png";
import gt700ND from "assets/images/ovens/gt700ND.png";
import rollerF from "assets/images/ovens/rollerF.png";
import rollerS from "assets/images/ovens/rollerS.png";
import { keyframes } from "@emotion/react";
import ProductDialog from "components/ProductDialog";
import Paper from "@material-ui/core/Paper";
import Vstepper from "components/Vstepper";
interface Iproducts {}

function Products({ ...props }: Iproducts) {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const handleModal = (productNumber: number, openModal: boolean) => {
    if (openModal) {
      switch (productNumber) {
        case 1:
          setOpenOne(true);
          break;
        case 2:
          setOpenTwo(true);
          break;
        case 3:
          setOpenThree(true);
          break;
      }
    } else {
      switch (productNumber) {
        case 1:
          setOpenOne(false);
          break;
        case 2:
          setOpenTwo(false);
          break;
        case 3:
          setOpenThree(false);
          break;
      }
    }
  };

  return (
    <>
      <section className="home section bd-container" id="decoration">
        <ProductDialog
          title="Gasro Quick-300 Series"
          handleClose={() => handleModal(1, false)}
          open={openOne}
          imgSrc={gt300D}
          modelE=""
          modelG=""
          size=""
          voltageE=""
          voltageG=""
          tempE=""
          velt=""
          wattE=""
          wattG=""
          weight=""
          textE=""
          textG=""
          lngUse=""
          lpgUse=""
          lngPressure=""
          lpgPressure=""
        ></ProductDialog>
        <ProductDialog
          title="Gasro Quick-600 Series"
          handleClose={() => handleModal(2, false)}
          open={openTwo}
          imgSrc={gt600D}
          modelE=""
          modelG=""
          size=""
          voltageE=""
          voltageG=""
          tempE=""
          velt=""
          wattE=""
          wattG=""
          weight=""
          textE=""
          textG=""
          lngUse=""
          lpgUse=""
          lngPressure=""
          lpgPressure=""
        ></ProductDialog>
        <ProductDialog
          title="Gasro Quick-700 Series"
          handleClose={() => handleModal(3, false)}
          open={openThree}
          imgSrc={gt700D}
          modelE=""
          modelG=""
          size=""
          voltageE=""
          voltageG=""
          tempE=""
          velt=""
          wattE=""
          wattG=""
          weight=""
          textE=""
          textG=""
          lngUse=""
          lpgUse=""
          lngPressure=""
          lpgPressure=""
        ></ProductDialog>
        <h2 className="section-title">컨베이어 오븐</h2>
        <div className="decoration__container bd-grid">
          <Reveal keyframes={fadeDown} cascade={true} duration={800}>
            <div className="decoration__data">
              <img
                src={gt300D}
                onMouseOver={(e) => {
                  e.currentTarget.src = gt300ND;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = gt300D;
                }}
                alt="gt300D"
                className="decoration__img"
              />
              <h3 className="decoration__title">Gasro Quick-300 Series</h3>
              <p className="decoration__description">
                GT-300W / GT-300 (18 인치)
              </p>
              <a
                href="#"
                className="button accessory__button"
                onClick={() => handleModal(1, true)}
              >
                상세정보
              </a>
            </div>

            <div className="decoration__data">
              <img
                src={gt600D}
                onMouseOver={(e) => {
                  e.currentTarget.src = gt600ND;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = gt600D;
                }}
                alt="gt600D"
                className="decoration__img"
              />
              <h3 className="decoration__title">Gasro Quick-600 Series</h3>
              <p className="decoration__description">
                GT-600W / GT-600 (22인치)
              </p>
              <a
                href="#"
                className="button accessory__button"
                onClick={() => handleModal(2, true)}
              >
                상세정보
              </a>
            </div>

            <div className="decoration__data">
              <img
                src={gt700D}
                onMouseOver={(e) => {
                  e.currentTarget.src = gt700ND;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = gt700D;
                }}
                alt="gt700D"
                className="decoration__img"
              />
              <h3 className="decoration__title">Gasro Quick-700 Series</h3>
              <p className="decoration__description">
                GT-700W / GT-700 (33인치)
              </p>
              <a
                href="#"
                className="button accessory__button"
                onClick={() => handleModal(3, true)}
              >
                상세정보
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
              <img src={gt700D} alt="" className="accessory__img" />
              <h3 className="accessory__title">Snow Globe</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$9.45</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={gt700D} alt="" className="accessory__img" />
              <h3 className="accessory__title">Candy</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$2.52</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={gt700D} alt="" className="accessory__img" />
              <h3 className="accessory__title">Angel</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$13.15</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={gt700D} alt="" className="accessory__img" />
              <h3 className="accessory__title">Sphere</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$4.25</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>

            <div className="accessory__content">
              <img src={gt700D} alt="" className="accessory__img" />
              <h3 className="accessory__title">Surprise gift</h3>
              <span className="accessory__category">Accessory</span>
              <span className="accessory__preci">$7.99</span>
              <a href="#home" className="button accessory__button">
                <i className="bx bx-heart"></i>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal keyframes={fadeLeft} cascade={true} duration={800}>
          <div className="home__container">
            <h3 className="section-title">오븐 사용법</h3>
            <Vstepper />
          </div>
        </Reveal>
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
