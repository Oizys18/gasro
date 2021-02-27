import React from "react";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import catalog_kor from "assets/documents/catalog_kor.pdf";
import el_kor from "assets/documents/el_kor.pdf";
import gas_kor from "assets/documents/gas_kor.pdf";
import rol_kor from "assets/documents/rol_kor.pdf";
interface Props {}
export default class Footer extends React.Component {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        <footer className="footer section">
          <div className="footer__container bd-container bd-grid">
            <Reveal keyframes={fadeDown} cascade={true} duration={500}>
              <div className="footer__content">
                <h3 className="footer__title">
                  <a href="#home" className="footer__logo">
                    사업장 주소
                  </a>
                </h3>
                <p className="footer__description">
                  서울시 강서구 양천로 47나길 18 <br />
                  TEL : (02) 3665-8611~4 <br />
                  FAX : (02) 3665-8615
                </p>
              </div>

              <div className="footer__content">
                <h3 className="footer__title">서비스</h3>
                <ul>
                  <li>
                    <a href="#home" className="footer__link">
                      개인정보 처리방침
                    </a>
                  </li>
                  <li>
                    <a href={catalog_kor} className="footer__link">
                      카탈로그 다운로드
                    </a>
                  </li>
                  {/* <li>
                  <a href="#home" className="footer__link">
                    Shipping mode
                  </a>
                </li> */}
                </ul>
              </div>

              <div className="footer__content">
                <h3 className="footer__title">사용설명서 다운로드</h3>
                <ul>
                  <li>
                    <a href={el_kor} download className="footer__link">
                      전기식 오븐
                    </a>
                  </li>
                  <li>
                    <a href={gas_kor} download className="footer__link">
                      가스식 오븐
                    </a>
                  </li>
                  <li>
                    <a href={rol_kor} download className="footer__link">
                      롤러기
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__content">
                <h3 className="footer__title">Social</h3>
                <a href="#home" className="footer__social">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
                <a href="#home" className="footer__social">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#home" className="footer__social">
                  <i className="bx bxl-instagram-alt"></i>
                </a>
              </div>
            </Reveal>
          </div>
          <div className="privacy"></div>
          <p className="footer__copy">
            Copyright ⓒGastec Korea. All right reserved
          </p>
        </footer>
      </>
    );
  }
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
