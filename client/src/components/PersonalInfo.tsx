import React, { useState } from "react";
interface openProps {
  open: boolean;
}
export default function PersonalInfo(props: openProps) {
  return (
    <>
      {props.open ? (
        <div className="support-detailslide">
          <div className="s-text">
            <p className="s-line s-headinst">개인정보의 수집 및 이용목적</p>
            <p className="s-line">
              가스텍코리아(주)의 상품 또는 제품과 관련한 지원과 서비스 제공
            </p>
            <p className="s-line s-headinst">개인정보의 보유 및 이용기간</p>
            <p className="s-line ">
              이용기간 : 해당 지원과 서비스가 제공되는 기간
            </p>
            <p className="s-line ">보유기간 : 정보주체가 등록된 기간</p>
            <p className="s-line s-headinst">수집하는 기본 개인정보 항목</p>
            <p className="s-line">성명, 상호, 주소, 연락처, 이메일, 영상 등</p>
            <p className="s-line s-headinst">
              동의 거부 권리 및 동의 거부에 따른 제한사항
            </p>
            <p className="s-line ">
              귀하는 개인정보 제공 및 동의를 거부할 권리가 있으며, 위 항목 동의
              거부 시 상품 및 제품에 대한 가스텍코리아(주)의 지원 및 관련 서비스
              이용이 어려워질 수 있습니다.
            </p>
            <p className="s-line s-headinst">
              개인정보 보호법 등 관련 법규에 의거하여 상기 본인은 위와 같이
              개인정보 수집 및 활용에 동의합니다.
            </p>
            <p className="s-line ">
              ※ 개인정보 제공자가 동의한 내용외의 다른 목적으로 활용하지 않으며,
              제공된 개인정보의 이용을 거부하고자 할 때에는 열람, 정정, 삭제를
              요구할 수 있습니다.
            </p>
            <p className="s-line ">(가스텍코리아(주) 02-3665-8611)</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
