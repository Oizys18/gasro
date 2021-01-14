import * as React from "react";
import styled from "styled-components";

interface Isupport {}

function Support({ ...props }: Isupport) {
  return (
    <>
      <section className="send section">
        <div className="send__container bd-container bd-grid">
          <div className="send__content">
            <h2 className="section-title-center send__title">고객지원 문의</h2>
            <p className="send__description">
              공란 작성해주시면 메일/전화로 연락드리겠습니다.어쩌구 저쩌구
              <br></br>
              <br></br>
              양식 수정 - A4 처럼
              <br></br>
              <br></br>
              작성 후 확인 클릭 시 gasteckorea@naver.com으로 메일 전송
            </p>
            {/* 라디오버튼 */}
            <form action="">
              <div className="send__radio">
                <p>지원종류</p>
                <label>
                  <input
                    type="radio"
                    name="category"
                    id="support-category"
                    value="after-service"
                  />
                  A/S문의
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    id="support-category"
                    value="product-inquiry"
                  />
                  제품관련 문의
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    id="support-category"
                    value="
                    consulting"
                    checked
                  />
                  상담신청
                </label>
              </div>
              {/* 개인정보 */}
              <div>
                <input type="text" placeholder="업체명/성명" />
                <input type="text" placeholder="소재지/주소" />
                <input type="text" placeholder="전화번호" />
                <input type="text" placeholder="이메일" />
                <label htmlFor="product-option">
                  <select name="product" id="product-option">
                    <option value="">제품을 선택해주세요</option>
                    <option value="GT300-G">GT300(가스)</option>
                    <option value="GT300-E">GT300(전기)</option>
                    <option value="GT600-G">GT600(가스)</option>
                    <option value="GT600-E">GT600(전기)</option>
                    <option value="GT700-G">GT700(가스)</option>
                    <option value="GT700-E">GT700(전기)</option>
                    <option value="Roller">피자도우 롤러기</option>
                  </select>
                </label>
                <input type="text" placeholder="문의내용" />
              </div>
              <div className="send__direction">
                <input
                  type="text"
                  placeholder="House address"
                  className="send__input"
                />
                <a href="#home" className="button">
                  확인
                </a>
              </div>
            </form>
          </div>

          <div className="send__img">
            <img src="assets/img/send.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
