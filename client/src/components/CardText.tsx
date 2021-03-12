import React from "react";
interface cardProps {
  curFocus: number;
}
export default function CardText(props: cardProps) {
  if (props.curFocus === 1) {
    return (
      <section className="card-detail-slide">
        <div className="table-title">GT300 제품 스펙</div>
        <div className="spec-table">
          <dl>
            <dt>외관사양</dt>
            <dd>
              <ol>
                <li>
                  <strong>무게(kg)</strong>
                  <p>132</p>
                </li>
                <li>
                  <strong>크기(W*D*H,mm)</strong>
                  <p>1520*1060*450</p>
                </li>
                <li>
                  <strong>중첩설치</strong>
                  <p>최대 3대</p>
                </li>
                <li>
                  <strong>측면 창면</strong>
                  <p>추가가능</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>컨베이어벨트</dt>
            <dd>
              <ol>
                <li>
                  <strong>벨트 길이(mm)</strong>
                  <p>480</p>
                </li>
                <li>
                  <strong>벨트 폭(inch)</strong>
                  <p>18</p>
                </li>
                <li>
                  <strong>소재</strong>
                  <p>식품용 스테인레스 스틸</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>온도조절 범위</dt>
            <dd>
              <ol>
                <li>
                  <strong>섭씨</strong>
                  <p>최고 300°C</p>
                </li>
                <li>
                  <strong>화씨</strong>
                  <p>최고 570°F</p>
                </li>
              </ol>
            </dd>
          </dl>
          <div className="table-subtitle">가스오븐</div>
          <dl>
            <dt>전력</dt>
            <dd>
              <ol>
                <li>
                  <strong>입력전압</strong>
                  <p>220V</p>
                </li>
                <li>
                  <strong>소비전력</strong>
                  <p>350W/Hr</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>LNG사용</dt>
            <dd>
              <ol>
                <li>
                  <strong>가스소비량</strong>
                  <p>10,000kal/hr</p>
                </li>
                <li>
                  <strong>가스압력</strong>
                  <p>230mmH2O</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>LPG사용</dt>
            <dd>
              <ol>
                <li>
                  <strong>가스소비량</strong>
                  <p>0.83Kg/hr</p>
                </li>
                <li>
                  <strong>가스압력</strong>
                  <p>280mmH2O</p>
                </li>
              </ol>
            </dd>
          </dl>
          <div className="table-subtitle">전기오븐</div>
          <dl>
            <dt>전력</dt>
            <dd>
              <ol>
                <li>
                  <strong>입력전압</strong>
                  <p>380V</p>
                </li>
                <li>
                  <strong>소비전력</strong>
                  <p>11.0Kw/Hr</p>
                </li>
              </ol>
            </dd>
          </dl>
        </div>
      </section>
    );
  } else if (props.curFocus === 2) {
    return (
      <section className="card-detail-slide">
        <div className="table-title">GT600 제품 스펙</div>
        <div className="spec-table">
          <dl>
            <dt>외관사양</dt>
            <dd>
              <ol>
                <li>
                  <strong>무게(kg)</strong>
                  <p>153</p>
                </li>
                <li>
                  <strong>크기(W*D*H,mm)</strong>
                  <p>1520*1160*450</p>
                </li>
                <li>
                  <strong>중첩설치</strong>
                  <p>최대 3대</p>
                </li>
                <li>
                  <strong>측면 창면</strong>
                  <p>추가가능</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>컨베이어벨트</dt>
            <dd>
              <ol>
                <li>
                  <strong>벨트 길이(mm)</strong>
                  <p>580</p>
                </li>
                <li>
                  <strong>벨트 폭(inch)</strong>
                  <p>22</p>
                </li>
                <li>
                  <strong>소재</strong>
                  <p>식품용 스테인레스 스틸</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>온도조절 범위</dt>
            <dd>
              <ol>
                <li>
                  <strong>섭씨</strong>
                  <p>최고 300°C</p>
                </li>
                <li>
                  <strong>화씨</strong>
                  <p>최고 570°F</p>
                </li>
              </ol>
            </dd>
          </dl>
          <div className="table-subtitle">가스오븐</div>
          <dl>
            <dt>전력</dt>
            <dd>
              <ol>
                <li>
                  <strong>입력전압</strong>
                  <p>220V</p>
                </li>
                <li>
                  <strong>소비전력</strong>
                  <p>350W/Hr</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>LNG사용</dt>
            <dd>
              <ol>
                <li>
                  <strong>가스소비량</strong>
                  <p>15,000kal/hr</p>
                </li>
                <li>
                  <strong>가스압력</strong>
                  <p>230mmH2O</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>LPG사용</dt>
            <dd>
              <ol>
                <li>
                  <strong>가스소비량</strong>
                  <p>1.2Kg/hr</p>
                </li>
                <li>
                  <strong>가스압력</strong>
                  <p>280mmH2O</p>
                </li>
              </ol>
            </dd>
          </dl>
          <div className="table-subtitle">전기오븐</div>
          <dl>
            <dt>전력</dt>
            <dd>
              <ol>
                <li>
                  <strong>입력전압</strong>
                  <p>380V</p>
                </li>
                <li>
                  <strong>소비전력</strong>
                  <p>12.5Kw/Hr</p>
                </li>
              </ol>
            </dd>
          </dl>
        </div>
      </section>
    );
  } else if (props.curFocus === 3) {
    return (
      <section className="card-detail-slide">
        <div className="table-title">GT700 제품 스펙</div>
        <div className="spec-table">
          <dl>
            <dt>외관사양</dt>
            <dd>
              <ol>
                <li>
                  <strong>무게(kg)</strong>
                  <p>185</p>
                </li>
                <li>
                  <strong>크기(W*D*H,mm)</strong>
                  <p>2010*1425*450</p>
                </li>
                <li>
                  <strong>중첩설치</strong>
                  <p>최대 3대</p>
                </li>
                <li>
                  <strong>측면 창면</strong>
                  <p>추가가능</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>컨베이어벨트</dt>
            <dd>
              <ol>
                <li>
                  <strong>벨트 길이(mm)</strong>
                  <p>840</p>
                </li>
                <li>
                  <strong>벨트 폭(inch)</strong>
                  <p>33</p>
                </li>
                <li>
                  <strong>소재</strong>
                  <p>식품용 스테인레스 스틸</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>온도조절 범위</dt>
            <dd>
              <ol>
                <li>
                  <strong>섭씨</strong>
                  <p>최고 300°C</p>
                </li>
                <li>
                  <strong>화씨</strong>
                  <p>최고 570°F</p>
                </li>
              </ol>
            </dd>
          </dl>
          <div className="table-subtitle">가스오븐</div>
          <dl>
            <dt>전력</dt>
            <dd>
              <ol>
                <li>
                  <strong>입력전압</strong>
                  <p>220V</p>
                </li>
                <li>
                  <strong>소비전력</strong>
                  <p>350W/Hr</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>LNG사용</dt>
            <dd>
              <ol>
                <li>
                  <strong>가스소비량</strong>
                  <p>20,500kal/hr</p>
                </li>
                <li>
                  <strong>가스압력</strong>
                  <p>230mmH2O</p>
                </li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>LPG사용</dt>
            <dd>
              <ol>
                <li>
                  <strong>가스소비량</strong>
                  <p>1.7Kg/hr</p>
                </li>
                <li>
                  <strong>가스압력</strong>
                  <p>280mmH2O</p>
                </li>
              </ol>
            </dd>
          </dl>
          <div className="table-subtitle">전기오븐</div>
          <dl>
            <dt>전력</dt>
            <dd>
              <ol>
                <li>
                  <strong>입력전압</strong>
                  <p>380V</p>
                </li>
                <li>
                  <strong>소비전력</strong>
                  <p>21.0Kw/Hr</p>
                </li>
              </ol>
            </dd>
          </dl>
        </div>
      </section>
    );
  }
  return <></>;
}
