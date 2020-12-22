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
              <BasicButton message="1" onClick={() => {}}></BasicButton>
              <BasicButton message="2" onClick={() => {}}></BasicButton>
              <BasicButton message="3" onClick={() => {}}></BasicButton>
            </HeaderTop>
            <HeaderBottom>
              <BasicButton message="1" onClick={() => {}}></BasicButton>
              <BasicButton message="2" onClick={() => {}}></BasicButton>
              <BasicButton message="3" onClick={() => {}}></BasicButton>
            </HeaderBottom>
          </HeaderDivider>
        </Container>
      </HeaderWrapper>
    </>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: grey;
  position: fixed;
  top: 0;
  overflow: hidden;
`;

const HeaderDivider = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTop = styled.div``;

const HeaderBottom = styled.div``;
