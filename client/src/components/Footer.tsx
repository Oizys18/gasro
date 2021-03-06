import React from "react";
// import { keyframes } from "@emotion/react";
// import Reveal from "react-awesome-reveal";
import catalog_kor from "assets/documents/catalog_kor.pdf";
import el_kor from "assets/documents/el_kor.pdf";
import gas_kor from "assets/documents/gas_kor.pdf";
import rol_kor from "assets/documents/rol_kor.pdf";
interface Props {}
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="basic-container ">
          <div className="footer-top">
            {/* <div className="footer-box">
              <div className="footer-title">
                <span>공지사항</span>
              </div>
              <ul className="footer-list">
                <li className="footer-item">1</li>
                <li className="footer-item">2</li>
                <li className="footer-item">3</li>
              </ul>
            </div> */}
            <div className="footer-box">
              <div className="footer-title">
                <span>사용설명서 다운로드</span>
              </div>

              <ul className="footer-list">
                <li className="footer-item">
                  <a href={catalog_kor}>제품 카탈로그</a>
                </li>
                <li className="footer-item">
                  <a href={el_kor}>전기식 오븐 설명서</a>
                </li>
                <li className="footer-item">
                  <a href={gas_kor}>가스식 오븐 설명서</a>
                </li>
                <li className="footer-item">
                  <a href={rol_kor}>피자 롤러기 설명서</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <div className="footer-data">
              <div className="footer-docs">
                <div className="docs-item personal">
                  <a href="#">개인정보처리방침</a>
                </div>
                <div className="docs-item">회사정책</div>
                <div>회사정책</div>
              </div>
              <div className="footer-social">
                <div className="social-icon">유튜브</div>
                <div className="social-icon">네이버블로그</div>
              </div>
            </div>
            <div className="footer-info">
              <div className="docs-item">서울시 강서구 양천로 47나길 18</div>
              <div className="docs-item">대표전화 : (02) 3665-8611~4</div>
              <div>팩스 : (02) 3665-8615</div>
            </div>
            <div className="footer-copyright">
              Copyright ⓒGastec Korea. All right reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
