import React, { useEffect, useState } from "react";
import CardText from "components/CardText";
import CardImg from "components/CardImg";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";
export default function ProductCard() {
  const [focus, setFocus] = useState(1);
  const [click, setClick] = useState(0);
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
      <div className="card-wrapper">
        <div className="card-content">
          <div className="card-text">
            <div>모델소개</div>
            <CardText curFocus={focus} />
          </div>
          <div className="card-preview">
            <div
              className="preview-btn"
              onClick={() => {
                handleClick(1);
                handleFocus(1);
              }}
              onMouseOver={() => handleFocus(1)}
            >
              <img className="card-preview-img" src={gt300AB} alt="" />
            </div>
            <div
              className="preview-btn"
              onClick={() => handleClick(2)}
              onMouseOver={() => handleFocus(2)}
            >
              <img className="card-preview-img" src={gt600AB} alt="" />
            </div>
            <div
              className="preview-btn"
              onClick={() => handleClick(3)}
              onMouseOver={() => handleFocus(3)}
            >
              <img className="card-preview-img" src={gt700AB} alt="" />
            </div>
          </div>
        </div>
        <CardImg curFocus={focus}></CardImg>
      </div>
      <div>
        {click === 1 ? (
          <div className="card-detail">
            <table className="detail-table">
              <tr>
                <th>제품규격 W*D*H(mm)</th>
                <th>입력전압</th>
                <th>Year</th>
                <th>Gross</th>
              </tr>
              <tr>
                <td data-th="ModelSize">1520*1060*450</td>
                <td data-th="Voltage"> 220V</td>
                <td data-th="TemperatureRange">0°F~570°F (0°C~300°C)</td>
                <td data-th="Gross">$460,935,665</td>
              </tr>
              {/* <tr>
                <td data-th="Movie Title">Howard The Duck</td>
                <td data-th="Genre">"Comedy"</td>
                <td data-th="Year">1986</td>
                <td data-th="Gross">$16,295,774</td>
              </tr>
              <tr>
                <td data-th="Movie Title">American Graffiti</td>
                <td data-th="Genre">Comedy, Drama</td>
                <td data-th="Year">1973</td>
                <td data-th="Gross">$115,000,000</td>
              </tr> */}
            </table>
          </div>
        ) : (
          <></>
        )}
        {click === 2 ? <div className="card-detail">gt600AB</div> : <></>}
        {click === 3 ? <div className="card-detail">gt700AB</div> : <></>}
      </div>
    </>
  );
}
