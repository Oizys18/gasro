import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

interface Props {}
function Footer({ ...props }: Props) {
  return (
    <>
      <FooterWrapper>
        <Container>
          <FooterContainer>
            <Contacts>Contacts</Contacts>
            <Info>Info</Info>
          </FooterContainer>
        </Container>
      </FooterWrapper>
    </>
  );
}
export default Footer;

const FooterWrapper = styled.div`
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: grey;
`;

const FooterContainer = styled.div``;
const Contacts = styled.div``;
const Info = styled.div``;
