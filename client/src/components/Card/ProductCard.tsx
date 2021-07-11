import React, { useEffect, useState } from "react";
import CardText from "components/Card/CardText";
import CardImg from "components/Card/CardImg";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";

function ProductCard() {
  const [focus, setFocus] = useState(1);
  const [click, setClick] = useState(0);
  const curOven = [0, "GT300", "GT600", "GT700"];
  const ovenSubtitle = [
    0,
    <>소형 18인치</>,
    <>중형 22인치</>,
    <>대형 33인치</>,
  ];
  const ovenFeature = [
    0,
    <>
      <p>공간 효율적인 크기와 디자인</p>
      <p>최다 판매 보급형 모델</p>
    </>,
    <>
      <p>터널 폭이 580mm(22인치)로 중간 크기의 제품입니다.</p>
      <p>동시에 여러 피자 및 빵을 조리할 수 있습니다.</p>
    </>,
    <p>
      <p>대형 피자 조리가 가능한 프리미엄 대형 모델</p>
      <p>터널의 폭이 840mm(33인치)로 대량생산이 가능한 제품입니다.</p>
      <p>대형피자나 다량의 빵을 굽는데 효율적입니다.</p>
    </p>,
  ];
  const handleFocus = (focused: number) => {
    switch (focused) {
      case 1:
        setFocus(1);
        break;
      case 2:
        setFocus(2);
        break;
      case 3:
        setFocus(3);
        break;
    }
  };
  const handleClick = (clicked: number) => {
    switch (clicked) {
      case 1:
        if (click === 1) {
          setClick(0);
        } else {
          setClick(1);
        }
        break;
      case 2:
        if (click === 2) {
          setClick(0);
        } else {
          setClick(2);
        }
        break;
      case 3:
        if (click === 3) {
          setClick(0);
        } else {
          setClick(3);
        }
        break;
    }
  };
  return (
    <>
      <div className="card-content" id="card-content">
        <div className="card-image">
          <CardImg curFocus={focus}></CardImg>
        </div>
        <div className="card-text">
          <div className="subtitle">제품상세</div>
          <div className="text-detail">
            <div className="d-titles">
              <div className="d-title">{curOven[focus]}</div>
              <div className="d-subtitle">{ovenSubtitle[focus]}</div>
            </div>
            <div className="d-feature">{ovenFeature[focus]}</div>
            <div className="d-detail">
              <p>• 1~3층으로 쌓아 올릴수 있는 직렬오븐</p>
              <p>• 공기역학적 설계로 에너지 효율적</p>
              <p>• 분리식 설계로 청소가 간편</p>
              <p>• 조작 및 사용이 간편</p>
            </div>
          </div>
          <div className="card-preview">
            <div
              className="preview-btn"
              onClick={() => {
                handleFocus(1);
                if (click) {
                  handleClick(1);
                }
              }}
              onMouseOver={() => handleFocus(1)}
            >
              <img className="card-preview-img" src={gt300AB} alt="" />
            </div>
            <div
              className="preview-btn"
              onClick={() => {
                handleFocus(2);
                if (click) {
                  handleClick(2);
                }
              }}
              onMouseOver={() => handleFocus(2)}
            >
              <img className="card-preview-img" src={gt600AB} alt="" />
            </div>
            <div
              className="preview-btn"
              onClick={() => {
                handleFocus(3);
                if (click) {
                  handleClick(3);
                }
              }}
              onMouseOver={() => handleFocus(3)}
            >
              <img className="card-preview-img" src={gt700AB} alt="" />
            </div>
          </div>
        </div>
      </div>

      {click ? (
        <>
          <a
            className="detail-show"
            onClick={() => {
              handleClick(focus);
            }}
          >
            {/* <span>상세스펙 보기</span> */}
            <i className="bx  bxs-chevrons-up bx-flashing bx-tada-hover"></i>
          </a>

          <CardText curFocus={click}></CardText>
        </>
      ) : (
        <a
          className="detail-show"
          onClick={() => {
            handleClick(focus);
          }}
        >
          {/* <span>상세스펙</span> */}
          <i className="bx bxs-chevrons-down bx-flashing bx-tada-hover"></i>
        </a>
      )}
    </>
  );
}
export default ProductCard;
