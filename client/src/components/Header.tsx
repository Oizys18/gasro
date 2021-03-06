import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {}
export default function Header({ ...props }: Props) {
  // const location = useLocation();
  // const [menu, setMenu] = useState<boolean>();
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
            <li className="nav-item">Korea/한국어</li>
          </ul>
        </div>
      </header>
    </>
  );
}
