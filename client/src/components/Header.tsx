import React, { useState, useEffect } from "react";
import korea from "assets/images/flags/south-korea.svg";
import china from "assets/images/flags/china.svg";
import us from "assets/images/flags/united-states.svg";
import vietnam from "assets/images/flags/vietnam.svg";
// import { Link, useLocation } from "react-router-dom";
interface Props {}
export default function Header({ ...props }: Props) {
  // const location = useLocation();
  // const [menu, setMenu] = useState<boolean>();
  const [lang, setLang] = useState(0);
  const languages = [
    <div className="iconbox">
      Korean
      <img src={korea} alt="korea" className="flag-icon" />
    </div>,
    <div className="iconbox">
      English <img src={us} alt="us" className="flag-icon" />
    </div>,
    <div className="iconbox">
      Chinese
      <img src={china} alt="china" className="flag-icon" />
    </div>,
    <div className="iconbox">
      Vietnamese
      <img src={vietnam} alt="vietnam" className="flag-icon" />
    </div>,
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const nav = document.getElementById("header");
  if (nav) {
    if (scrollPosition >= 100) {
      nav.classList.add("scroll-header");
    } else {
      nav.classList.remove("scroll-header");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="l-header" id="header">
        <div className="basic-container nav-container">
          <ul className="nav-list">
            <a href="/#" className="nav-item nav-logo">
              Gasro Quick
            </a>
            <li className="nav-item">
              <a href="/#banner">홈</a>
            </li>
            <li className="nav-item">
              <a href="/#company">회사소개</a>
            </li>
            <li className="nav-item">
              <a href="/#product">제품소개</a>
            </li>
            <li className="nav-item">
              <a href="/#support">고객지원</a>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/#">공지사항</a>
            </li>
            <div className="dropdown">
              <li className="nav-item language">{languages[lang]}</li>
              <div className="dropdown-content">
                <a href="/#" onClick={() => setLang(0)} className="iconbox">
                  Korean
                  <img src={korea} alt="korea" className="flag-icon" />
                </a>
                <a href="/#" onClick={() => setLang(1)} className="iconbox">
                  English <img src={us} alt="us" className="flag-icon" />
                </a>
                <a href="/#" onClick={() => setLang(2)} className="iconbox">
                  Chinese
                  <img src={china} alt="china" className="flag-icon" />
                </a>
                <a href="/#" onClick={() => setLang(3)} className="iconbox">
                  Vietnamese
                  <img src={vietnam} alt="vietnam" className="flag-icon" />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}
