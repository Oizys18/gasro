import React, { useState } from "react";
import PersonalInfo from "components/PersonalInfo";
interface Isupport {}

function Support({ ...props }: Isupport) {
  const [category, setCategory] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="basic-container">
        <div className="support-container">
          <div className="support-title">고객지원 문의</div>
          <div className="support-content">
            <form action="">
              <div className="support-table">
                <dl>
                  <dt>문의종류</dt>
                  <dd>
                    <ol className="support-radiogroup">
                      <li>
                        <strong>
                          <label>
                            <input
                              type="radio"
                              name="category"
                              id="support-category"
                              value="product-inquiry"
                              checked={category === 0 ? true : false}
                              onChange={() => setCategory(0)}
                            />
                            제품관련 문의
                          </label>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <label>
                            <input
                              type="radio"
                              name="category"
                              id="support-category"
                              value="product-inquiry"
                              checked={category === 1 ? true : false}
                              onChange={() => setCategory(1)}
                            />
                            A/S 문의
                          </label>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <label>
                            <input
                              type="radio"
                              name="category"
                              id="support-category"
                              value="product-inquiry"
                              checked={category === 2 ? true : false}
                              onChange={() => setCategory(2)}
                            />
                            상담신청
                          </label>
                        </strong>
                      </li>
                    </ol>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <div className="support-optional">
                      고객정보
                      <p>*선택입력</p>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li>
                        <strong>업체명/성명</strong>
                        <p>
                          <input
                            type="text"
                            placeholder="ex)가스텍코리아(주) / 홍길동"
                          />
                        </p>
                      </li>

                      <li>
                        <strong>소재지 / 주소</strong>
                        <p>
                          <input
                            type="text"
                            placeholder="ex)가스텍코리아(주) / 홍길동"
                          />
                        </p>
                      </li>
                    </ol>
                  </dd>
                </dl>
                <dl>
                  <dt>연락처</dt>
                  <dd>
                    <ol>
                      <li>
                        <strong>이메일</strong>
                        <p>
                          <input
                            type="text"
                            placeholder="ex)가스텍코리아(주) / 홍길동"
                          />
                        </p>
                      </li>
                      <li>
                        <strong>전화번호</strong>
                        <p>
                          <input
                            type="text"
                            placeholder="ex)가스텍코리아(주) / 홍길동"
                          />
                        </p>
                      </li>
                    </ol>
                  </dd>
                </dl>
                <dl>
                  <dt>문의내용</dt>
                  <dd>
                    <textarea placeholder="ex)가스텍코리아(주) / 홍길동" />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a
                      className="support-personalinfo"
                      onClick={() => {
                        if (open) {
                          setOpen(false);
                        } else {
                          setOpen(true);
                        }
                      }}
                    >
                      개인정보 수집동의
                    </a>
                  </dt>
                  <dd>
                    <strong>
                      <label htmlFor="personal-info">동의</label>
                      <input
                        type="checkbox"
                        name="personal-info"
                        id="personal-info"
                      />
                    </strong>
                  </dd>
                </dl>
              </div>

              <PersonalInfo open={open}></PersonalInfo>
              <div className="support-send-btn">
                <a href="#" className="support-link">
                  문의하기
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
