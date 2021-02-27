import React from "react";
import { Link } from "react-router-dom";

interface Props {}
export default function Header({ ...props }: Props) {
  return (
    <>
      <header className="l-header" id="header">
        <div className="basic-container nav-container">
          <ul className="nav-list">
            <a href="#" className="nav-item nav-logo">
              Gasro Quick
            </a>
            <li className="nav-item">
              <a href="#banner">홈</a>
            </li>
            <li className="nav-item">
              <a href="#company">회사소개</a>
            </li>
            <li className="nav-item">
              <a href="#product">제품소개</a>
            </li>
            <li className="nav-item">
              <a href="#support">고객지원</a>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-item">공지사항</li>
            <li className="nav-item">언어설정</li>
          </ul>
        </div>
      </header>
    </>
  );
}
