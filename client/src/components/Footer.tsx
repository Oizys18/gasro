import React, { useContext } from "react";
import catalog_kor from "assets/documents/catalog_kor.pdf";
import el_kor from "assets/documents/el_kor.pdf";
import gas_kor from "assets/documents/gas_kor.pdf";
import rol_kor from "assets/documents/rol_kor.pdf";
// import youtube from "assets/images/svgs/youtube.svg";
import noticeContext from "apis/noticeApi";

interface Props {}
export default function Footer() {
  const data = useContext(noticeContext);
  return (
    <>
      <footer className="footer">
        <div className="basic-container ">
          <div className="footer-top">
            <div className="footer-box">
              <div className="footer-title">
                <span>공지사항</span>
              </div>
              <ul className="footer-list">
                {data.map((post: any) => (
                  <li key={post.id} className="footer-item">
                    <a href={`/notice/${post.id}`}>{post.title}</a>
                  </li>
                ))}
              </ul>
            </div>
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
                  <a href="/privacy">개인정보처리방침</a>
                </div>
                <div>
                  {/* <a href="https://map.kakao.com/link/map/8732155">오시는 길</a> */}
                  <a
                    href="https://goo.gl/maps/s6MNjjkPMY6cb37PA "
                    target="_blank"
                  >
                    오시는 길
                  </a>
                </div>
                {/* <div>회사정책</div> */}
              </div>
              <div className="footer-social">
                <div className="social-icon">
                  <i
                    className="bx bxl-youtube bx-sm"
                    style={{ color: "#ffffff" }}
                  ></i>
                </div>
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
