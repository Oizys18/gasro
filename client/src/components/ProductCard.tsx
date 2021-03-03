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
      <div className="card-content">
        <div className="card-image">
          <CardImg curFocus={focus}></CardImg>
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
              onClick={() => {
                handleClick(2);
                handleFocus(2);
              }}
              onMouseOver={() => handleFocus(2)}
            >
              <img className="card-preview-img" src={gt600AB} alt="" />
            </div>
            <div
              className="preview-btn"
              onClick={() => {
                handleClick(3);
                handleFocus(3);
              }}
              onMouseOver={() => handleFocus(3)}
            >
              <img className="card-preview-img" src={gt700AB} alt="" />
            </div>
          </div>
        </div>
        <div className="card-text">
          <CardText curFocus={focus} />
        </div>
        {/* <div>
            {click === 1 ? (
              <>
                <div className="card-detail">
                  <table className="detail-table">
                    <tr>
                      <th colSpan={5}>가스식</th>
                    </tr>
                    <tr>
                      <th>입력전압</th>
                      <th>소비전력</th>
                      <th>가스종류</th>
                      <th>가스소비량</th>
                      <th>가스압력</th>
                    </tr>
                    <tr>
                      <td data-th="Voltage" rowSpan={2}>
                        220V
                      </td>
                      <td data-th="ElectricityUsage" rowSpan={2}>
                        350W /Hr
                      </td>
                      <th>LNG</th>
                      <td data-th="GasUsage">10,000kal/hr</td>
                      <td data-th="GasUsage">0.83Kg/hr</td>
                    </tr>
                    <tr>
                      <th>LPG</th>
                      <td data-th="GasPressure">230mmH2O</td>
                      <td data-th="GasPressure">280mmH2O</td>
                    </tr>
                    <tr></tr>
                  </table>
                  <table className="detail-table">
                    <tr>
                      <th colSpan={3}>전기식</th>
                    </tr>
                    <tr>
                      <th>입력전압</th>
                      <th>소비전력</th>
                    </tr>
                    <tr>
                      <td data-th="Voltage">220V</td>
                      <td data-th="ElectricityUsage">350W /Hr</td>
                    </tr>
                  </table>
                </div>
              </>
            ) : (
              <></>
            )}
            {click === 2 ? <div className="card-detail">gt600AB</div> : <></>}
            {click === 3 ? <div className="card-detail">gt700AB</div> : <></>}
          </div> */}
      </div>
    </>
  );
}
