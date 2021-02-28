import React, { useEffect, useState } from "react";
import CardText from "components/CardText";
import CardImg from "components/CardImg";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";
export default function ProductCard() {
  const [focus, setFocus] = useState(1);
  const handlefocus = (clicked: number) => {
    switch (clicked) {
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
  return (
    <>
      <div className="card-wrapper">
        <div className="card-content">
          <div className="card-text">
            {/* <span>제품소개</span> */}
            <CardText curFocus={focus} />
            <a href="#">제품소개 자세히 보기 →</a>
          </div>
          <div className="card-preview">
            <div
              onClick={() => handlefocus(1)}
              onMouseOver={() => handlefocus(1)}
            >
              <img className="card-preview-img" src={gt300AB} alt="" />
            </div>
            <div
              onClick={() => handlefocus(2)}
              onMouseOver={() => handlefocus(2)}
            >
              <img className="card-preview-img" src={gt600AB} alt="" />
            </div>
            <div
              onClick={() => handlefocus(3)}
              onMouseOver={() => handlefocus(3)}
            >
              <img className="card-preview-img" src={gt700AB} alt="" />
            </div>
          </div>
        </div>
        <CardImg curFocus={focus}></CardImg>
      </div>
    </>
  );
}
