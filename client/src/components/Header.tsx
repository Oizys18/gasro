import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LanguageIcon from "@material-ui/icons/Language";
interface Props {}
export default function Header({ ...props }: Props) {
  const location = useLocation();
  const [menu, setMenu] = useState<boolean>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (nav) {
    if (scrollPosition >= 100) {
      nav.classList.add("scroll-header");
    } else {
      nav.classList.remove("scroll-header");
    }
  }
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
  useEffect(() => {
    // scroll eventlistener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // close mobile dropdown menu when path changes
    if (menu) {
      setMenu(false);
    }
  }, [location]);

  return (
    <>
      <a href="#top" className="scrolltop show-scroll" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>
      <header className="l-header " id="header">
        <nav className="bd-container"></nav>
        <nav className="nav bd-container">
          <Link to="/" className="nav__logo">
            GASRO QUICK
          </Link>
          <div
            className={menu ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <Link to="/">
                <li className="nav__item">
                  <div
                    className={
                      location.pathname === "/"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="company"
                  >
                    홈
                  </div>
                </li>
              </Link>

              <Link to="/products">
                <li className="nav__item">
                  <div
                    // href="#home"
                    className={
                      location.pathname === "/products"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="products"
                  >
                    제품소개
                  </div>
                </li>
              </Link>
              <Link to="/company">
                <li className="nav__item">
                  <div
                    className={
                      location.pathname === "/company"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="company"
                  >
                    회사소개
                  </div>
                </li>
              </Link>
              {/* <Link to="/product">
                <li className="nav__item">
                  <div
                    // href="#home"
                    className={
                      location.pathname === "/product"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="product"
                  >
                    제품
                  </div>
                </li>
              </Link> */}
              {/* <Link to="/notice">
                <li className="nav__item">
                  <div
                    className={
                      location.pathname === "/notice"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="notice"
                  >
                    공지사항
                  </div>
                </li>
              </Link> */}
              <Link to="/support">
                <li className="nav__item">
                  <div
                    // href="#home"
                    className={
                      location.pathname === "/support"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="support"
                  >
                    고객지원
                  </div>
                </li>
              </Link>
            </ul>
            <ul className="nav__list">
              <Link to="/support">
                <li className="nav__item">
                  <div
                    // href="#home"
                    className={
                      location.pathname === "/support"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="support"
                  >
                    Q&A
                  </div>
                </li>
              </Link>
              <Link to="/support">
                <li className="nav__item">
                  <div
                    // href="#home"
                    className={
                      location.pathname === "/support"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="support"
                  >
                    공지사항
                  </div>
                </li>
              </Link>
              <Link to="/support">
                <li className="nav__item">
                  <div
                    // href="#home"
                    className={
                      location.pathname === "/support"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    id="support"
                  >
                    한국어
                  </div>
                </li>
              </Link>
            </ul>
            {/* <div className="nav__icon">
              <Link to="/support">
                <HelpOutlineIcon className="change-theme"></HelpOutlineIcon>
              </Link>
              <LanguageIcon
                id="theme-button"
                className="language"
              ></LanguageIcon>
            </div> */}
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>
    </>
  );
}
