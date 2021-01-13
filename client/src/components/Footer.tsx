import React from "react";
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
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#home" className="footer__link">
                    카탈로그
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
                  <a href="#home" className="footer__link">
                    전기식 오븐
                  </a>
                </li>
                <li>
                  <a href="#home" className="footer__link">
                    가스식 오븐
                  </a>
                </li>
                <li>
                  <a href="#home" className="footer__link">
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
          </div>
          <div className="privacy"></div>
          <p className="footer__copy">2021 Gastec Korea. All right reserved</p>
        </footer>
      </>
    );
  }
}
