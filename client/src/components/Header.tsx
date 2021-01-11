import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
interface Props {}
export default function Header({ ...props }: Props) {
  return (
    <>
      <a href="#" className="scrolltop show-scroll" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <Link to="/">
            <a href="#" className="nav__logo">
              Gastec Korea
            </a>
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">
                  <a className="nav__link active-link">회사소개</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/products">
                  <a className="nav__link">제품소개</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/notice">
                  <div className="nav__link">공지사항</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/support">
                  <a className="nav__link">고객지원</a>
                </Link>
              </li>

              <li>
                <i
                  className="bx bx-toggle-left change-theme"
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
