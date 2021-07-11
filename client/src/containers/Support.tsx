import React, { HTMLProps, useState } from "react";
import { useHistory } from "react-router";
import emailjs, { init } from "emailjs-com";
import apikeys from "assets/apikeys";
import PersonalInfo from "components/PersonalInfo";

interface Isupport {}
type InputProps = {
  className?: string;
  placeholder?: string;
} & (
  | {
      type?: "text";
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      type: "textarea";
      onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
);

function Support({ ...props }: Isupport) {
  init(apikeys.USER_ID);
  const history = useHistory();
  const [category, setCategory] = useState(0);
  const [agreed, setAgreed] = useState(0);
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, address, email, phone, message } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e: any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const [open, setOpen] = useState(false);
  function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      inputs["name"] &&
      inputs["email"] &&
      inputs["phone"] &&
      inputs["message"] &&
      address
    ) {
      emailjs
        .sendForm(
          apikeys.SERVICE_ID,
          apikeys.TEMPLATE_ID,
          e.target,
          apikeys.USER_ID
        )
        .then(
          (result) => {
            alert(
              "문의 전송완료, 빠른 시일 내에 답장 드리겠습니다.\nMessage Sent. I'll get back to you shortly."
            );
            history.push("/");
          },
          (error) => {
            alert(
              "에러가 발생했습니다. 다시 시도해주세요.\nError Occured. Please try again"
            );
          }
        );
    } else {
      alert("문의정보를 입력해주세요.\n Please fill out the forms.");
    }
  }
  return (
    <>
      <section className="basic-container">
        <div className="support-container">
          <div className="support-title">고객지원 문의</div>
          <div className="support-content">
            <form onSubmit={onSubmit}>
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
                              value="제품관련문의"
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
                              value="A/S 문의"
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
                              value="상담신청"
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
                      {/* <p>*선택입력</p> */}
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li>
                        <strong>업체명/성명</strong>
                        <p>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required={true}
                            placeholder="ex)가스텍코리아(주) / 홍길동"
                          />
                        </p>
                      </li>

                      <li>
                        <strong>소재지 / 주소</strong>
                        <p>
                          <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={onChange}
                            required={true}
                            placeholder="ex)서울시 강서구 양천로 47나길 18"
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
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChange}
                            required={true}
                            placeholder="ex)gasteckorea@naver.com"
                          />
                        </p>
                      </li>
                      <li>
                        <strong>전화번호</strong>
                        <p>
                          <input
                            name="phone"
                            type="tel"
                            id="phone_input"
                            value={phone}
                            onChange={onChange}
                            required={true}
                            placeholder="ex)(02) 3665-8611~4"
                          />
                        </p>
                      </li>
                    </ol>
                  </dd>
                </dl>
                <dl>
                  <dt>문의내용</dt>
                  <dd>
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      onChange={onChange}
                      required={true}
                      placeholder="ex)온도조절 관련 문의"
                    />
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
                        name="agreed"
                        id="personal-info"
                        value={agreed}
                        required={true}
                        onChange={() => setAgreed(agreed)}
                      />
                    </strong>
                  </dd>
                </dl>
              </div>

              <PersonalInfo open={open}></PersonalInfo>
              <div className="support-send-btn">
                <button className="support-link">문의하기</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
