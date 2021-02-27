import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
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
  --body-color: #FEFBFB;
  --container-color: #FFF;

  /*========== Font and typography ==========*/
  --body-font: 'Noto Sans KR', sans-serif;
  --biggest-font-size: 2rem;
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
}

@media screen and (min-width: 968px){
  :root{
    --biggest-font-size: 3rem;
    --h2-font-size: 1.75rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
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
}

img{
  max-width: 100%;
  height: auto;
}

/* CLASS CSS */

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
  & span{
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



/* Main */
.mg-container{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  align-items:center;
  margin:170px 0;
}
.mg-item-l{
  text-align:right
}
.mg-item-r{
 text-align:left
}

.mg-title-l{
  text-align: left;
  border-top: 1px solid #000;
  line-height: 0.1em;
  margin: 1em 0 0.7em;
  font-size: 14px;
  & span{
    background: #fefbfb;
    padding: 0 40px 0 0;
  }
}
.mg-title-r{
  text-align: right;
  border-top: 1px solid #000;
  line-height: 0.1em;
  margin: 1em 0 0.7em;
  font-size: 14px;
  & span{
    background: #fefbfb; 
    padding: 0 0 0 40px;
  }
}
.numTitle{
  font-size:var(--biggest-font-size);
  font-weight:var(--font-bold);
  color:var(--title-color);
}
.mg-card{
  border: 0px solid transparent;
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
}

.mg-img{
  height: 460px;
  width: 620px;
  object-fit: cover;
}
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
  color:var(--body-color);
  font-size:var(--h3-font-size);
  border:1px solid var(--body-color);
  border-radius:3px;
  margin-top:1em;
  padding:10px 100px;
  font-weight:var(--font-bold);
  
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
