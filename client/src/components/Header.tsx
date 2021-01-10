import React from "react";
import styled from "styled-components";
import BasicButton from "components/BasicButton";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
interface Props {}
export default function Header({ ...props }: Props) {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <HeaderDivider>
            <Link to="/">
              <Logo>Gastec Logo</Logo>
            </Link>
            <Menu>
              <Link to="/products">
                <Hello type="button">제품</Hello>
                {/* <BasicButton message="제품" /> */}
              </Link>
              <Link to="/">
                <BasicButton message="회사소개" />
              </Link>
              <Link to="/notice">
                <BasicButton message="공지사항" />
              </Link>
              <Link to="/support">
                <BasicButton message="고객서비스" />
              </Link>
            </Menu>
          </HeaderDivider>
        </Container>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeaderDivider = styled.div`
  display: flex;
  height: 5vh;
  /* justify-content: space-between; */
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Hello = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  :hover {
    color: red;
  }
`;
