import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@700&display=swap');
    :root {
  --header-height: 1.5rem;
  /*========== Colors ==========*/
  --first-color: #DA2535;
  --first-color-alt: #C42130;
  --first-color-send: #DE3B49;
  --title-color: #161212;
  --text-color: #5B5757;
  --text-color-light: #8F8A8A;
  --text-color-white:#C8C8C8;
  /* --body-color: #FEFBFB; */
  --body-color: #f7f7f7;
  --container-color: #FFF;

  /*========== Font and typography ==========*/
  --body-font: 'Noto Sans KR', sans-serif;
  --title-font-size:2.25rem;
  --biggest-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smallest-font-size: .7rem;

  /*========== Font weight ==========*/
  --font-thin: 100;
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-bold: 700;
  --font-black: 900;

  /*========== Margins ==========*/
  --mb-1: .5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
  /*========== z index ==========*/

  --z-tooltip: 10;
  --z-fixed: 100;
  /*========== grid ==========*/
  --grid-2:180px;
  --grid-3:290px;
  --grid-4:400px;
  --grid-5:510px;
  --grid-6:620px;
  --grid-7:730px;

}

@media screen and (min-width: 968px){
  :root{
    --biggest-font-size: 3rem;
    --h1-font-size: 2rem;
    --h2-font-size: 1.75rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smallest-font-size: .7rem;
  }
}

/*========== BASE ==========*/
*,::before,::after{
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;

}

body{
  /* margin: var(--header-height) 0 0 0; */
  margin: 0 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  line-height: 1.6;
}

h1,h2,h3,ul,p{
  margin: 0;
}

h1,h2,h3{
  font-weight: var(--font-medium);
  color: var(--title-color);
}

ul{
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
  color:inherit;
}

img{
  max-width: 100%;
  height: auto;
}

/* CLASS CSS */

/* scrollbar */
/* 
::-webkit-scrollbar {
  width: 1px;
}
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: black;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
} */




/* BASIC */
.basic-container{
  max-width: 1280px;
  width: calc(100% - 3rem);
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);
  
}



/* HEADER */
.l-header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
}
.scroll-header{
  box-shadow: 0 2px 5px rgba(0,0,0,.2);
  background-color:var(--title-color);
  opacity:0.93;
  transition:.4s;
}

.nav-container{
  height: calc(var(--header-height) + 1.5rem);
  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color:transparent;
}

.nav-list{
  display:flex;
  justify-content:center;
}

.nav-item{
  padding:0 0 0 40px;
  align-self:center;
  color: white;
  font-weight: var(--font-medium);
  font-size:var(--normal-font-size);
  &:hover{
    color:red;
  }
  & a:visited{
    text-decoration:none;
    color:white;
  }
  & a:hover{
    color:red;
    font-weight: var(--font-medium);
  }
}

.nav-logo{
  text-shadow:0 0 5px black;
  color: white;
  letter-spacing:-1px;
  font-size:var(--h2-font-size);
  font-weight: var(--font-black);
  font-family: 'Lexend Deca', sans-serif;
}

.iconbox{
 display:flex;
 justify-content:center;
 align-items:center;
}
.flag-icon{
  width:var(--h1-font-size);
  padding:0 0 0 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  margin:0px 15px 15px 15px;
  position: absolute;
  background-color: black;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: white;
  padding: 6px 8px;
  text-decoration: none;

}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

/* footer */
.footer{
  width:100%;
  background-color:#222222;
  color:var(--text-color-white);
}

.footer-top{
  
  height:200px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:110px;
}
.footer-title{
  text-align: left;
  font-weight:var(--font-bold);
  border-top: 2px solid #707070;
  line-height: 0.1em;
  margin: 1em 0 0.7em;
  font-size: 14px;
  span{
    background: #222222;
    padding: 0 40px 0 0;
  }
}
.footer-list{
  text-align:right;
}
.footer-item{
  font-size:12px;
  color:var(--text-color-white);
  a{
    color:inherit
  }
}
.footer-box{
  padding:15px 0;
}


.footer-bottom{
  height:200px;
}
.footer-data{
  display:flex;
  justify-content:space-between;
  
}
.footer-docs{
  font-size:var(--small-font-size);
  color:var(--text-color-white);
  display:flex;
  justify-content:center;
}
.docs-item{
  margin:0 15px 0 0;
  padding: 0 15px 0 0;
  background-position: right center;
  background: url('./images/l_bar.gif') no-repeat 100% 50%;
}
.personal{
  font-weight:var(--font-bold);
  color:var(--text-color-white);
}
.footer-divider{
  border:1px solid #707070;
  border-top:none;
}
.footer-social{
  display:flex;
  justify-content:center;
}
.social-icon{
  margin:0 0 0 15px;
  padding: 0  0 0 15px;
  font-size:var(--small-font-size);
}
.footer-info{
  font-size:var(--small-font-size);
  color:var(--text-color-light);
  margin-top:1em;
  display:flex;

}

.footer-copyright{
  font-size:var(--small-font-size);
  color:var(--text-color-light);
}


/* Main Grid */
.company{
  padding:50px 0;
}
.product{
  padding:50px 0;
}


.mg-container{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  margin:60px 0;
}
.mg-wrapper{
  margin:150px 0;
}
.mg-item-l{
  text-align:right
}
.mg-item-r{
 text-align:left
}

.subtitle{
  font-size:var(--small-font-size);
  font-weight:var(--font-regular)
}
.subtitle2{
  font-size:var(--h3-font-size);
  font-weight:var(--font-medium)
}
.maintitle{
  margin-bottom:10px;
  font-size:var(--title-font-size);
  font-weight:var(--font-bold);
  color:var(--title-color);
}

.numTitle-l{
  font-family: 'Heebo', sans-serif;
  text-align: right;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 0.5em 0 0.5em;
  font-size:55px;
  font-weight:var(--font-black);
  color:var(--title-color);
  & span{
    background: #fefbfb; 
    padding: 0 0 0 40px;
    line-height:0;
  }
}
.numTitle-r{
  font-family: 'Heebo', sans-serif;
  text-align: left;
  border-bottom: 1px solid #000;
  line-height: 0em;
  margin: 0.5em 0 0.5em;
  font-size:55px;
  font-weight:var(--font-bold);
  color:var(--title-color);
  & span{
    background: #fefbfb; 
    padding: 0 40px 0 0;
    line-height:0;
  }
}
.mg-card{
  border: 0px solid transparent;
  border-radius: 0px;
  background: var(--container-color);
  box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
  margin: 150px 0;
}

.mg-img{
  height: 400px;
  width: 620px;
  object-fit: cover;

}
.videoImg{
  cursor: pointer;
}
.mg-card-content{
align-self:center;

}



/* product card */
.card-container{
  margin:150px 0;
}
.card-content{
  display:grid;
  grid-template-columns:730px auto;
  gap:40px;
  margin:250px 0 20px 0;
}
.card-text{
  width:100%;
  text-align:left;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
  & .title {
    line-height:0.1em;
    margin-bottom:0.5em;
    font-size:var(--biggest-font-size);
    font-weight:var(--font-bold);
    color:var(--title-color);
  }
}

.text-detail{
  h2 {
    font-size:var(--h2-font-size)
  }
  display:flex;
  height:340px;
  flex-direction:column;
  background: var(--container-color);
  padding:2.5em;
  & .detail{
    font-weight:var(--font-regular)
  }
  & .feature{
    font-weight:var(--font-light)
  }
}

.check-spec{
  color:var(--first-color-send);
  font-size:var(--normal-font-size);
}

.card-preview{
  justify-content:center;
  display:flex;
  gap:15px;
  border-radius:1em;
}
.card-preview-img{
  /* border-radius:1em; */
  padding:0.5em;
  background-color:var(--container-color);
  height:120px;
  object-fit:fill;
  border:1px solid #d9d9d9;
  /* box-shadow: 3px 3px 15px #d9d9d9, -3px -3px 15px #ffffff; */
}
.preview-btn{
  /* border-radius:1.1em; */
  cursor: pointer;
  :hover{
    background-color:#DA2535;
  }
}
.card-image{
  display:flex;
  width:100%;

  justify-content:center;
  flex-direction:column;
}
.card-img{
  img{
    width:730px;
    height:480px;
    object-fit:fill;
    background-color:transparent;
  /* border-radius:2px; */
  position:relative;
  }
}
@keyframes inAnimation {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
.card-detail-slide{
  /* height:500px; */
  width:100%;
  position:relative;
  animation: inAnimation 300ms ease;
  background-color: var(--container-color);
  padding:2.5em;
}

.table-title{
  font-size:var(--h1-font-size);
  border-bottom:2px solid black;
  font-weight:var(--font-bold);
}
.table-subtitle{
  margin-top:80px;
  font-size:var(--h2-font-size);
  font-weight:var(--font-bold);
  border-bottom:2px solid black;
}

.spec-table{
  
  position:relative;
  align-items:center;
  /* text-align:center; */
  dl,dt,dd{
    display:table-cell;
    margin:0;
    padding:0;
  }
  dt{
    vertical-align:middle;
    font-size:var(--h3-font-size);
    min-width:200px;
  }
  dd{
    width:100%;
  }
  dl{
    width:100%;
    display:inline-block;
    padding:15px 0;
    border-bottom:1px solid lightgray;
  }
  ol,li{
    display:inline-block;
    list-style: none;
    margin:0 0 0 40px;
    padding:0;
  }
  ol {
    
  }
  li{
    margin:0 0 0 100px;
    &:nth-child(1){
    margin:0 0 0 10px;

    }
    display: inline-block;
    padding:15px 0;
    vertical-align: top;
  }
}

.detail-show{
  cursor: pointer;
  justify-content:center;
  align-items:center;
  display:flex;
  padding:10px;
  color:black;
  font-size:50px;
  flex-direction:column;
  background-color:white;
}













/* table  */
.detail-table{
  width:100%;
  background-color: #34495E;

  border-radius: .4em;
  overflow: hidden;
  padding:0.3em;
  /* border-collapse:collapse; */
  border-spacing:0.5em;
  empty-cells:hide;
  tr {
  }
  th {
    text-align:center;
    color:var(--body-color);

    }
    td{
      color:#d9d9d9;
      text-align:center;
    }

}

.detail-title{
  font-size:var(--h2-font-size);
  font-weight:var(--font-bold);
text-align:center;
}


/* Instruction - Slide */
.instruction-wrapper{
  overflow:hidden;
  margin:150px 0;
}
.slide-wrapper{
  width:100%;
  display:flex;
  height:350px;
  align-items:flex-end;
  gap:40px;
  a{
    cursor: pointer;
  }
 
}
.slide-container{
  margin-top:10px;
  margin-bottom:200px;
  height:100px;
}
.slide-image{
  height:350px;
  min-width:500px;
  transition: all 0.6s ease;

}

.slide-preview{
  height:200px;
  min-width:300px;
  transition: all 0.6s ease;
}


.slide-title{
  margin-bottom:10px;
  display:flex;
  color:var(--title-color);
  .text{
  font-size:var(--biggest-font-size);
  font-weight:var(--font-bold);
  line-height:1;
  }
  .num{
    margin-right:5px;
  font-size:var(--biggest-font-size);
  font-weight:var(--font-bold);
  line-height:1;
  }
  
}
.refresh{
  &:hover{
    color:red;
  }
  font-size:var(--h1-font-size);
  text-align:right;
  line-height:1.5;
  align-self:center;
  margin:0 0 0 15px;
  cursor: pointer;
  font-weight:bold;
}
.next{
  &:hover{
    color:red;
  }
  font-size:var(--biggest-font-size);
  text-align:right;
  line-height:1;
  align-self:center;
  margin:0 0 0 15px;
  cursor: pointer;
  font-weight:bold;
}

.slide-button{
  
  align-self:center;
  text-align:center;
  &:hover{
    background-color:var(--title-color);
    color:var(--body-color);
  }
  cursor: pointer;
  background-color:var(--text-color);
  color:var(--body-color);
  font-size:var(--normal-font-size);
  font-weight:var(--font-bold);
  border:1px solid var(--body-color);
  width:130px;
  border-radius:3px;
  padding:8px 0;
  margin:5px 15px;
  &.slide-next{
    margin:5px 10px 5px 50px;
  }
}









/* support */
.support-wrapper{
  background-image:url('./images/banner.png');
  width:100%;
  height:450px;
}
.support-container{
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.support-title{
  color:var(--body-color);
  font-weight:var(--font-bold);
  font-size:var(--biggest-font-size)
}
.support-content{
  color:var(--body-color);
  margin-top:none;
  font-size:var(--h3-font-size)
}
.support-link{
  &:hover{
    background-color:var(--body-color);
    color:var(--text-color)
  }
  color:var(--body-color);
  font-size:var(--h3-font-size);
  border:1px solid var(--body-color);
  border-radius:3px;
  margin-top:1em;
  padding:10px 100px;
  font-weight:var(--font-bold);
}

.privacy-container{
 margin:150px 0;
}
.privacy-text{
  padding:150px;
}


/* support */
.sp-container{
  margin:200px 0;
  background-color:#FFF;
  padding:3em;
}

.sp-title{
  font-weight:var(--font-bold);
  font-size:var(--h2-font-size);
  border-bottom:2px solid black;
}
.sp-content{
  display:flex;
  flex-direction:column;
}
.sp-input{
  display:flex;
  flex-direction:column;
}






@media screen and (min-width: 1200px){
  .basic-container{
    margin-left: auto;
    margin-right: auto;
  }
}


/* Media queries */
/* @media screen and (max-width: 360px){}
@media screen and (min-width: 768px){ } */

`;

export default GlobalStyle;
