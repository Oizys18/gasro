import * as React from "react";
interface IPrivacy {}
function Privacy({ ...props }: IPrivacy) {
  return (
    <>
      <section className="basic-container privacy-container" id="privacy">
        <div className="privacy-text">
          <p className="p-line">개인정보 처리방침</p>
          <p className="p-line"></p>
          <p className="p-line">
            가스텍코리아(주)(이하 ‘회사’라 한다)는 이용자의 개인정보를 보호하고
            이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이
            개인정보 처리방침을 수립·공개합니다.
          </p>
          <p className="p-line">제1조(개인정보의 처리목적)</p>
          <p className="p-line">
            회사는 다음의 목적을 위하여 개인정보를 처리합니다.
          </p>
          <p className="p-line">
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
            않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다.
          </p>
          <p className="p-line">1. 홈페이지 회원 가입 및 관리</p>
          <p className="p-line">
            회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증,
            회원자격 유지․관리, 제한적 본인 확인제 시행에 따른 본인확인, 서비스
            부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의
            동의 여부 확인, 각종 고지․통지, 고충처리 등을 목적으로 개인정보를
            처리합니다.
          </p>
          <p className="p-line">2. 재화 또는 서비스 제공</p>
          <p className="p-line">
            물품배송, 서비스 제공, 계약서․청구서 발송, 콘텐츠 제공, 맞춤서비스
            제공, 본인인증, 연령인증, 요금결제․ 정산, 채권추심 등을 목적으로
            개인정보를 처리합니다.
          </p>
          <p className="p-line">3. 고충처리</p>
          <p className="p-line">
            민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지,
            처리결과 통보 등의 목적으로 개인정보를 처리합니다.
          </p>
          <p className="p-line">제2조(처리하는 개인정보 항목)</p>
          <p className="p-line">
            회사는 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <p className="p-line">1. 홈페이지 회원 가입 및 관리</p>
          필수항목 : 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 성별,
          이메일주소, 아이핀번호 선택항목 : 결혼여부, 관심분야 2. 재화 또는
          서비스 제공 필수항목 : 성명, 생년월일, 아이디, 비밀번호, 주소,
          전화번호, 이메일주소, 아이핀번호, 신용카드번호 선택항목 : 관심분야,
          과거 구매내역
          <p className="p-line">제3조(개인정보 수집 방법)</p>
          <p className="p-line">
            1. 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해
            동의를 하고 직접 정보를 입력하는 경우, 해당 개인정보를 수집합니다.
          </p>
          <p className="p-line">
            2. 고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등을
            통해 이용자의 개인정보가 수집될 수 있습니다.
          </p>
          <p className="p-line">
            3. 오프라인 이벤트 등에서 서면을 통해 개인정보가 수집될 수 있습니다.
          </p>
          <p className="p-line">
            4. 회사와 제휴한 외부 기업이나 단체로부터 개인정보를 제공받을 수
            있으며, 이러한 경우에는 제휴사에서 이용자에게 개인정보 제공 동의를
            받아야 합니다.
          </p>
          <p className="p-line">
            5. 14세 미만의 회원에 대해서는 법정대리인으로부터 동의를 받아야
            이용이 가능합니다.
          </p>
          <p className="p-line">제4조(개인정보의 처리 및 보유기간)</p>
          <p className="p-line">
            ① 회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터
            개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서
            개인정보를 처리·보유합니다.
          </p>
          <p className="p-line">
            ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
          </p>
          <p className="p-line">
            1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시 까지
          </p>
          <p className="p-line">
            다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시 까지
          </p>
          <p className="p-line">
            a. 관계 법령 위반에 따른 수사․조사 등이 진행 중인 경우에는 해당
            수사․조사 종료 시 까지
          </p>
          <p className="p-line">
            b. 홈페이지 이용에 따른 채권․채무관계 잔존 시에는 해당 채권·채무관계
            정산 시 까지
          </p>
          <p className="p-line">
            2. 재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제․정산
            완료시까지 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시
            까지
          </p>
          <p className="p-line">
            a. 「전자상거래 등에서의 소비자 보호에 관한 법률」 제6조에 따른
            표시·광고, 계약내용 및 이행 등 거래에 관한 기록
          </p>
          <p className="p-line">- 표시·광고에 관한 기록 : 6개월</p>
          <p className="p-line">
            - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년
          </p>
          <p className="p-line">
            - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년
          </p>
          <p className="p-line">
            b.「통신비밀보호법」 제15조의2에 따른 통신사실확인자료 보관
          </p>
          <p className="p-line">
            - 가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수 :
            1년
          </p>
          <p className="p-line">
            - 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월
          </p>
          <p className="p-line">제5조(개인정보의 파기)</p>
          <p className="p-line">
            ① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 5일 이내 해당 개인정보를 파기합니다.
          </p>
          <p className="p-line">
            ② 이용자로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
            하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
            보관장소를 달리하여 보존합니다.
          </p>
          <p className="p-line">
            ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
          </p>
          <p className="p-line">1. 파기절차</p>
          <p className="p-line">
            회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보
            보호책임자의 승인을 받아 개인정보를 파기합니다.
          </p>
          <p className="p-line">2. 파기방법</p>
          <p className="p-line">
            회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수
            없도록 로우 레벨 포멧(Low Level Format) 등의 방법을 이용하여
            파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나
            소각하여 파기합니다.
          </p>
          <p className="p-line">
            제6조(이용자 및 법정대리인의 권리·의무 및 행사방법)
          </p>
          <p className="p-line">
            ① 이용자는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련
            권리를 행사할 수 있습니다.
          </p>
          <p className="p-line">1. 개인정보 열람요구</p>
          <p className="p-line">2. 오류 등이 있을 경우 정정 요구</p>
          <p className="p-line">3. 삭제요구</p>
          <p className="p-line">4. 처리정지 요구</p>
          <p className="p-line">
            ② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편,
            모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이
            조치하겠습니다.
          </p>
          <p className="p-line">
            ③ 이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
            경우에는 회사는 정정 또는 삭제를
          </p>
          <p className="p-line">
            완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
          </p>
          <p className="p-line">
            ④ 만 14세 미만 아동의 경우, 제1항에 따른 권리 행사는 이용자의
            법정대리인이나 위임을 받은 자
          </p>
          <p className="p-line">
            등 대리인을 통하여 하실 수 있습니다. 이 경우, 법정대리인은 이용자의
            모든 권리를 가집니다.
          </p>
          <p className="p-line">
            ⑤ 이용자는 정보통신망법, 개인정보보호법 등 관계법령을 위반하여
            회사가 처리하고 있는 이용자 본인 이나 타인의 개인정보 및 사생활을
            침해하여서는 아니됩니다.
          </p>
          <p className="p-line">
            제7조(개인정보 자동 수집 장치의 설치·운영 및 거부)
          </p>
          <p className="p-line">
            회사는 이용자 개개인에게 개인화되고 맞춤화된 서비스를 제공하기 위해
            이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를
            사용합니다.
          </p>
          <p className="p-line">1. 쿠키의 사용 목적</p>
          <p className="p-line">
            회원과 비회원의 접속 빈도나 방문 시간 등의 분석, 이용자의 취향과
            관심분야의 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수
            파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
          </p>
          <p className="p-line">2. 쿠키 설정 거부 방법</p>
          <p className="p-line">
            이용자는 쿠키 설치에 대해 거부할 수 있습니다. 단, 쿠키 설치를
            거부하였을 경우 로그인이 필요한 일부 서비스의 이용이 어려울 수
            있습니다.
          </p>
          <p className="p-line">
            (설정방법, IE 기준)웹 브라우저 상단의 도구 - 인터넷 옵션 - 개인정보
            - 사이트 차단
          </p>
          <p className="p-line">제8조(개인정보의 안전성 확보조치)</p>
          <p className="p-line">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다.
          </p>
          <p className="p-line">
            1. 관리적 조치 : 내부관리계획 수립․시행, 정기적 직원 교육 등
          </p>
          <p className="p-line">
            2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
            접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
          </p>
          <p className="p-line">
            3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제
          </p>
          <p className="p-line">제9조(개인정보 보호책임자)</p>
          <p className="p-line">
            ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이
            개인정보 보호책임자 및 담당부서를 지정·운영하고 있습니다.
          </p>
          <p className="p-line">▶ 개인정보 보호책임자</p>
          <p className="p-line">성명 : 서동훈</p>
          <p className="p-line">직책 : 전무이사</p>
          <p className="p-line">연락처 : 02-3665-8611, , 02-3665-8615</p>
          <p className="p-line">▶ 개인정보 보호 담당부서</p>
          <p className="p-line">부서명 : 관리부</p>
          담당자 : 양민우
          <p className="p-line">연락처 : 02-3665-8611, 02-3665-8615</p>
          <p className="p-line">
            ② 이용자는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든
            개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
            개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는
            이용자의 문의에 대해 답변 및 처리해드릴 것입니다.
          </p>
          <p className="p-line">제10조(개인정보 열람청구)</p>
          <p className="p-line">
            이용자는 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는
            이용자의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
          </p>
          <p className="p-line">▶ 개인정보 열람청구 접수․처리 부서</p>
          <p className="p-line">부서명 : 관리부</p>
          <p className="p-line">담당자 : 양민우</p>
          <p className="p-line">연락처 : 02-3665-8611, , 02-3665-8615</p>
          <p className="p-line">제11조(권익침해 구제방법)</p>
          <p className="p-line">
            이용자는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을
            문의하실 수 있습니다.
          </p>
          <p className="p-line">
            아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보
            불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이
            필요하시면 문의하여 주시기 바랍니다
          </p>
          <p className="p-line">
            ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
          </p>
          <p className="p-line">
            - 소관업무 : 개인정보 침해사실 신고, 상담 신청
          </p>
          <p className="p-line">- 홈페이지 : privacy.kisa.or.kr</p>
          <p className="p-line">- 전화 : (국번없이) 118</p>
          <p className="p-line">
            - 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층
            개인정보침해신고센터
          </p>
          <p className="p-line">▶ 개인정보 분쟁조정위원회</p>
          <p className="p-line">
            - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
          </p>
          <p className="p-line">- 홈페이지 : www.kopico.go.kr</p>
          <p className="p-line">- 전화 : (국번없이) 1833-6972</p>
          <p className="p-line">
            - 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층
          </p>
          <p className="p-line">▶ 대검찰청 사이버범죄수사단 : 02-3480-3573</p>
          <p className="p-line">▶ 경찰청 사이버테러대응센터 : 1566-0112</p>
          제12조(개인정보 처리방침 변경) ① 이 개인정보 처리방침은 2019. 03.
          01부터 적용됩니다.
        </div>
      </section>
    </>
  );
}

export default Privacy;
