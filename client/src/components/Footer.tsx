import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

interface Props {}
function Footer({ ...props }: Props) {
  return (
    <>
      <FooterWrapper>
        <Container>
          <div>Footer</div>
        </Container>
      </FooterWrapper>
    </>
  );
}
export default Footer;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: grey;
`;
