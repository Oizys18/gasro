import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
interface Props {}
export default function Header({ ...props }: Props) {
  const location = useLocation();
  const [menu, setMenu] = useState<boolean>(false);
  useEffect(() => {
    // 모바일 햄버거 toggle
    const toggle = document.getElementById("nav-toggle"),
      navMenu = document.getElementById("nav-menu");
    if (toggle && navMenu) {
      toggle.addEventListener("click", () => {
        if (menu) {
          setMenu(false);
        } else {
          setMenu(true);
        }
      });
    }
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menu) {
      setMenu(false);
    }
  }, [location]);
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (nav) {
    if (window.pageYOffset >= 200) {
      nav.classList.add("scroll-header");
    } else {
      nav.classList.remove("scroll-header");
    }
  }
  return (
    <>
      <a href="#home" className="scrolltop show-scroll" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>
      <header className="l-header " id="header">
        <nav className="nav bd-container">
          <Link to="/">
            <h2 className="nav__logo">Gastec Korea</h2>
          </Link>

          <div
            className={menu ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">
                  <a
                    className={
                      location.pathname == "/"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="company"
                  >
                    회사소개
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/products">
                  <a
                    href="#home"
                    className={
                      location.pathname == "/products"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="products"
                  >
                    제품소개
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/notice">
                  <a
                    href="#home"
                    className={
                      location.pathname == "/notice"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="notice"
                  >
                    공지사항
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/support">
                  <a
                    href="#home"
                    className={
                      location.pathname == "/support"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="support"
                  >
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
