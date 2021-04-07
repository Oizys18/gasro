import React, { useState, useEffect } from "react";
import korea from "assets/images/svgs/south-korea.svg";
import china from "assets/images/svgs/china.svg";
import us from "assets/images/svgs/united-states.svg";
import vietnam from "assets/images/svgs/vietnam.svg";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "config/lang/i18n";

interface Props {}
export default function Header({ ...props }: Props) {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  const [locale, setLocale] = useState(0);
  const locales = [
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
    if (scrollPosition >= 100 || location.pathname !== "/") {
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
      {/* <header className="l-header" id="header"> */}
      <header
        className={
          location.pathname !== "/" ? "l-header scroll-header" : "l-header"
        }
        id="header"
      >
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
              <a href="/support">고객지원</a>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/#">공지사항</a>
            </li>
            <div className="dropdown">
              {/* <li className="nav-item language">{languages[lang]}</li> */}
              <li className="nav-item language">{locales[locale]}</li>
              <div className="dropdown-content">
                <a
                  href="/#"
                  onClick={() => {
                    setLocale(0);
                    handleChangeLanguage("ko");
                  }}
                  className="iconbox"
                >
                  {locales[0]}
                </a>
                <a
                  href="/#"
                  onClick={() => {
                    setLocale(1);
                    handleChangeLanguage("en");
                  }}
                  className="iconbox"
                >
                  {locales[1]}
                </a>
                <a
                  href="/#"
                  onClick={() => {
                    setLocale(2);
                    handleChangeLanguage("cn");
                  }}
                  className="iconbox"
                >
                  {locales[2]}
                </a>
                <a
                  href="/#"
                  onClick={() => {
                    setLocale(3);
                    handleChangeLanguage("vn");
                  }}
                  className="iconbox"
                >
                  {locales[3]}
                </a>
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}
