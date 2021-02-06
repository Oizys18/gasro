import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import gt300D from "assets/images/ovens/gt300D.png";
import gt300ND from "assets/images/ovens/gt300ND.png";
import gt600D from "assets/images/ovens/gt600D.png";
import gt600ND from "assets/images/ovens/gt600ND.png";
import gt700D from "assets/images/ovens/gt700D.png";
import gt700ND from "assets/images/ovens/gt700ND.png";
import { keyframes } from "@emotion/react";
import ProductDialog from "components/ProductDialog";
import Vstepper from "components/Vstepper";
import rollerF from "assets/images/ovens/rollerF.png";
import rollerS from "assets/images/ovens/rollerS.png";
import Paper from "@material-ui/core/Paper";
import MainCarousel from "components/MainCarousel";
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
          model="GT300W / GT-300"
          size="1520(W)*1060(D)*450(H)"
          voltageE="380V"
          voltageG="220V"
          temp="0°F~570°F(0°C~300°C)"
          velt="480mm (18inches)"
          wattE="11KW /Hr"
          wattG="350W /Hr"
          weight="132kg"
          textE="-. 1~3층으로 쌓아 올릴수 있는 직렬오븐 입니다.
          -. 분리식 부품으로 청소 간편합니다.
          -. 효율적 에너지 전달로 에너지 절약이 됩니다.
          -. 콘트롤 조작이 간편합니다.
          -. 외부가 뜨겁지 않게 설계되었습니다.
          -. 태우지 않고 빠르게 구울수 있습니다."
          textG="-.1~3층으로 쌓아 올릴수 있는 직렬오븐
          -.분리식 부품으로 청소 간편
          -.효율적 에너지 전달로 에너지 절약
          -.콘트롤 조작이 간편
          -.공기역학적으로 공기가 수직으로 이동
          -.외부가 뜨겁지 않게 설계
          -.태우지 않고 빠르게 구울수 있음.
          -.예열상태에 따라 열량을 자동으로 조절
          "
          lngUse="10,000kal/hr"
          lpgUse="0.83Kg/hr"
          lngPressure="230mmH2O"
          lpgPressure="280mmH2O"
        ></ProductDialog>
        <ProductDialog
          title="Gasro Quick-600 Series"
          handleClose={() => handleModal(2, false)}
          open={openTwo}
          imgSrc={gt600D}
          model="GT-600W / GT-600"
          size="1520(W)*1160(D)*450(H)"
          voltageE="380V"
          voltageG="220V"
          temp="0°F~570°F (0°C~300°C)"
          velt="580mm(22inches)"
          wattE="12.5Kw/Hr"
          wattG="350W/Hr"
          weight="153kg"
          textE="-. 1~3층올 쌓아올릴수 있는 직렬오븐입니다.
          -. 분리식 부품으로 청소가 간편합니다.
          -. 효율적 에너지 전달로 에너지가 절약 됩니다.
          -. 컨트롤 조작이 간편합니다.
          -. 공기역학으로 공기가 수직으로 이동합니다.
          "
          textG="-.1~3층올 쌓아올릴수 있는 직렬오븐
          -.분리식 부품으로 청소간편
          -.효율적 에너지 전달로 에너지절약
          -.컨트롤 조작이 간편
          -.공기역학적으로 공기가 수직으로 이동"
          lngUse="15,000Kal/hr"
          lpgUse="1.2kg/hr"
          lngPressure="230mmH2O"
          lpgPressure="280mmH2O"
        ></ProductDialog>
        <ProductDialog
          title="Gasro Quick-700 Series"
          handleClose={() => handleModal(3, false)}
          open={openThree}
          imgSrc={gt700D}
          model="GT-700W / GT700"
          size="2010(W)*1425(D)*450(H)"
          voltageE="380V"
          voltageG="220V"
          temp="0°F~570°F (0°C~300°C)"
          velt="840mm(33inches)"
          wattE="21Kw/Hr"
          wattG="350W/Hr"
          weight="185Kg"
          textE="-. 1~3층올 쌓아올릴수 있는 직렬오븐 입니다.
          -. 분리식 부품으로 청소가 간편합니다.
          -. 효율적 에너지 전달로 에너지절약이 됩니다.
          -. 컨트롤 조작이 간편 합니다.
          -. 공기역학적으로 공기가 수직으로 이동합니다."
          textG="-. 1~3층올 쌓아올릴수 있는 직렬오븐
          -. 분리식 부품으로 청소간편
          -. 효율적 에너지 전달로 에너지절약
          -. 컨트롤 조작이 간편
          -. 공기역학적으로 공기가 수직으로 이동"
          lngUse="20,500Kal/hr"
          lpgUse="1.7kg/hr"
          lngPressure="230mmH2O"
          lpgPressure="280mmH2O"
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
export default Products;
