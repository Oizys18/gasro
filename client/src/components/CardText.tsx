import React from "react";
interface cardProps {
  curFocus: number;
}
export default function CardText(props: cardProps) {
  if (props.curFocus === 1) {
    return (
      <>
        <div>
          <div className="title">GT300 / GT300W</div>
          <table className="detail-table">
            <tr>
              <th>총 중량</th>
              <th>제품규격 W*D*H(mm)</th>
              <th>컨베이어벨트(폭)</th>
              <th>온도조절 범위</th>
            </tr>
            <tr>
              <td data-th="Weight">132kg</td>
              <td data-th="ModelSize">1520(W)*1060(D)*450(H)</td>
              <td data-th="VeltWidth">480mm(18inches)</td>
              <td data-th="TemperatureRange">0°F~570°F (0°C~300°C)</td>
            </tr>
          </table>
        </div>
        <div>
          <div>가스식</div>
          <table className="detail-table">
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
              <td data-th="GasUsage">230mmH2O</td>
            </tr>
            <tr>
              <th>LPG</th>
              <td data-th="GasPressure">0.83Kg/hr</td>
              <td data-th="GasPressure">280mmH2O</td>
            </tr>
          </table>
        </div>
        <div>
          <div>전기식</div>
          <table className="detail-table">
            <tr>
              <th>입력전압</th>
              <th>소비전력</th>
            </tr>
            <tr>
              <td data-th="Voltage">380V</td>
              <td data-th="ElectricityUsage">11KW /Hr</td>
            </tr>
          </table>
        </div>
      </>
    );
  } else if (props.curFocus === 2) {
    return (
      <>
        <div className="title">GT600 / GT600W</div>
        <table className="detail-table">
          <tr>
            <th>총 중량</th>
            <th>제품규격 W*D*H(mm)</th>
            <th>컨베이어벨트(폭)</th>
            <th>온도조절 범위</th>
          </tr>
          <tr>
            <td data-th="Weight"> 153kg</td>
            <td data-th="ModelSize">1520(W)*1160(D)*450(H)</td>
            <td data-th="VeltWidth">580mm(22inches)</td>
            <td data-th="TemperatureRange">0°F~570°F (0°C~300°C)</td>
          </tr>
        </table>
        <div>
          <div>가스식</div>
          <table className="detail-table">
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
                350W/Hr
              </td>
              <th>LNG</th>
              <td data-th="GasUsage">15,000Kal/hr</td>
              <td data-th="GasUsage">230mmH2O</td>
            </tr>
            <tr>
              <th>LPG</th>
              <td data-th="GasPressure">1.2kg/hr</td>
              <td data-th="GasPressure">280mmH2O</td>
            </tr>
          </table>
        </div>
        <div>
          <div>전기식</div>
          <table className="detail-table">
            <tr>
              <th>입력전압</th>
              <th>소비전력</th>
            </tr>
            <tr>
              <td data-th="Voltage">380V</td>
              <td data-th="ElectricityUsage">12.5Kw/Hr</td>
            </tr>
          </table>
        </div>
      </>
    );
  } else if (props.curFocus === 3) {
    return (
      <>
        <div className="title">GT700 / GT700W</div>
        <table className="detail-table">
          <tr>
            <th>총 중량</th>
            <th>제품규격 W*D*H(mm)</th>
            <th>컨베이어벨트(폭)</th>
            <th>온도조절 범위</th>
          </tr>
          <tr>
            <td data-th="Weight"> 185Kg</td>
            <td data-th="ModelSize">2010(W)*1425(D)*450(H)</td>
            <td data-th="VeltWidth">840mm(33inches)</td>
            <td data-th="TemperatureRange">0°F~570°F (0°C~300°C)</td>
          </tr>
        </table>
        <div>
          <div>가스식</div>
          <table className="detail-table">
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
              <td data-th="GasUsage">20,500Kal/hr</td>
              <td data-th="GasUsage">230mmH2O</td>
            </tr>
            <tr>
              <th>LPG</th>
              <td data-th="GasPressure">1.7kg/hr</td>
              <td data-th="GasPressure">280mmH2O</td>
            </tr>
          </table>
        </div>
        <div>
          <div>전기식</div>
          <table className="detail-table">
            <tr>
              <th>입력전압</th>
              <th>소비전력</th>
            </tr>
            <tr>
              <td data-th="Voltage">380V</td>
              <td data-th="ElectricityUsage">11KW /Hr</td>
            </tr>
          </table>
        </div>
      </>
    );
  }
  return <></>;
}
