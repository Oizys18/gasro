import React, { useEffect, useState } from "react";
import CardText from "components/CardText";
import CardImg from "components/CardImg";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
export default function ProductCard() {
  const [focus, setFocus] = useState(1);
  const [click, setClick] = useState(0);
  const curOven = [
    0,
    "GT300 - 소형 18인치",
    "GT600 - 중형 22인치",
    "GT700 - 대형 33인치",
  ];
  const ovenFeature = [0, <>feature 300</>, <>feature 600</>, <>feature 700</>];
  const ovenDetail = [
    0,
    <>
      300스테인레스 스틸 조형 생산공정의 개선, 디지털화, 안전성과 편이성 증대를
      실현 스테인레스 스틸 조형
    </>,
    <>
      600스테인레스 스틸 조형 생산공정의 개선, 디지털화, 안전성과 편이성 증대를
      실현 스테인레스 스틸 조형
    </>,
    <>
      700스테인레스 스틸 조형 생산공정의 개선, 디지털화, 안전성과 편이성 증대를
      실현 스테인레스 스틸 조형
    </>,
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
          <div className="text-detail">
            <h2>{curOven[focus]}</h2>
            <div className="detail">{ovenDetail[focus]}</div>
            <div className="feature">{ovenFeature[focus]}</div>
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
