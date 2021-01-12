import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
interface Props {}
export default function Header({ ...props }: Props) {
  // const [focus, setFocus] = useState<number>(0);
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    const toggle = document.getElementById("nav-toggle"),
      nav = document.getElementById("nav-menu");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  });

  return (
    <>
      <a href="#home" className="scrolltop show-scroll" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <Link to="/">
            <div className="nav__logo">Gastec Korea</div>
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">
                  <a href="#home" className="nav__link active-link">
                    회사소개
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/products">
                  <a href="#home" className="nav__link">
                    제품소개
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/notice">
                  <a href="#home" className="nav__link">
                    공지사항
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/support">
                  <a href="#home" className="nav__link">
                    고객지원
                  </a>
                </Link>
              </li>
              {/* 
              <li>
                <i
                  className="bx bx-toggle-left change-theme"
                  id="theme-button"
                ></i>
              </li> */}

              <li>
                <i
                  className="bx bx-world bx-sm change-theme"
                  id="theme-button"
                ></i>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>
    </>
  );
}
