import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface Icontacts {}
const Contacts = ({ ...props }: mainState) => {
  return (
    <MainWrapper>
      <Container>
        <div>Main Page</div>
      </Container>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
`;
export default Contacts;
