import * as React from "react";
import styled from "styled-components";

interface Isupport {}

function Support({ ...props }: Isupport) {
  return (
    <>
      <section className="basic-container">
        <div className="sp-container">
          <div className="sp-title">고객지원 문의</div>
          <div className="sp-content">
            <form action="">
              <div className="sp-radio">
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
              <div className="sp-input">
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
                <input type="textarea" placeholder="문의내용" />
              </div>
              <a href="#" className="button" type="submit">
                확인
              </a>
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
