import React from "react";
interface cardProps {
  curFocus: number;
}
export default function CardText(props: cardProps) {
  if (props.curFocus === 1) {
    return (
      <>
        <div className="title">GT300 / GT300W</div>
        <div className="content"></div>
      </>
    );
  } else if (props.curFocus === 2) {
    return (
      <>
        <div className="title">GT600 / GT600W</div>
        <div className="content">
          <table className="detail-table">
            <tr>
              <th>총 중량</th>
              <th>제품규격 W*D*H(mm)</th>
              <th>컨베이어벨트(폭)</th>
              <th>온도조절 범위</th>
            </tr>
            <tr>
              <td data-th="Weight">132kg</td>
              <td data-th="ModelSize">1520*1060*450</td>
              <td data-th="VeltWidth">480mm(18inches)</td>
              <td data-th="TemperatureRange">0°F~570°F (0°C~300°C)</td>
            </tr>
          </table>
        </div>
      </>
    );
  } else if (props.curFocus === 3) {
    return (
      <>
        <div className="title">GT700 / GT700W</div>
        <div className="content">
          <table className="detail-table">
            <tr>
              <th>총 중량</th>
              <th>제품규격 W*D*H(mm)</th>
              <th>컨베이어벨트(폭)</th>
              <th>온도조절 범위</th>
            </tr>
            <tr>
              <td data-th="Weight">132kg</td>
              <td data-th="ModelSize">1520*1060*450</td>
              <td data-th="VeltWidth">480mm(18inches)</td>
              <td data-th="TemperatureRange">0°F~570°F (0°C~300°C)</td>
            </tr>
          </table>
        </div>
      </>
    );
  }
  return <></>;
}
