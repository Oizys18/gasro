import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface Props {}
function Header({ ...props }: Props) {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <div>Header</div>
        </Container>
      </HeaderWrapper>
    </>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 30px;
  background-color: grey;
  position: fixed;
  top: 0;
  overflow: hidden;
`;
