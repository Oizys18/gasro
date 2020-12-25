import React from "react";
import styled from "styled-components";
import BasicButton from "components/BasicButton";
import { Container } from "@material-ui/core";
interface Props {}
function Header({ ...props }: Props) {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <HeaderDivider>
            <HeaderTop>
              <BasicButton message="제품" onClick={() => {}} />
              <BasicButton message="회사소개" onClick={() => {}} />
              <BasicButton message="공지사항" onClick={() => {}} />
              <BasicButton message="고객서비스" onClick={() => {}} />
            </HeaderTop>
          </HeaderDivider>
        </Container>
      </HeaderWrapper>
    </>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  /* background-color: grey; */
  overflow: hidden;
`;

const HeaderDivider = styled.div`
  display: flex;
  height: 5vh;
  flex-direction: column;
  justify-content: space-evenly;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HeaderBottom = styled.div``;
