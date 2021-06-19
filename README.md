# gasro

- www.gasteckorea.com
- 기업용 웹사이트 개발, 퍼블리싱

## To-do

- Backend 개발

  - [x] User,Admin, Post 모델 생성
  - [x] Auth 기능
  - [x] 이미지 파일 업로드 및 저장
  - [x] REST API
  - [ ] 최적화 -> firebase 연결로 취소
  - [x] Firebase realtime database 연결
  - [x] Firebase Hosting, deploy

- Front 개발
  - [x] 기본 디자인 틀 생성
  - [x] 라우팅 및 링크 생성
  - [x] 폼, 자동 이메일 전송 서비스 연결
  - [x] 제품 정보 입력 및 이미지 추가
  - [x] REST API 연결
  - [x] 배포
  - [ ] 회사 제공 고해상도 이미지로 변경 (촬영 대기중..)
  - [ ] 다국어 옵션 제공 (번역본 대기중)
  - [x] 최적화 (...진행중)
    - [ ] 이미지 최적화
    - [ ] 재렌더링 방지
  - [ ] 반응형 (모바일) 개발
    - [ ] 이미지 리사이즈, 웹 최적화, CDN
    - [ ] 컴포넌트 재렌더링 방지

## 개발환경

- Front: React + Typescript

- Backend: Firebase
  - NodeJS Express Typescript 서버를 만들었으나, 아래와 같은 이유로 Firebase로 변경했다.
    1. 기존 웹사이트가 cafe24 유료 웹호스팅을 사용하고 있었으나, NodeJS 서버 업로드를 위해선 추가 결제가 필요하다.
    2. Firebase의 Google analytics 기능을 통해 해외 유입 사용자를 체크하고자하는 클라이언트의 요구가 있었다.
    3. 사용자 수의 변동성이 있어서 cafe24의 요금제는 낭비가 존재했다. Firebase의 유동적인 요금제가 적합하다고 판단했다.
