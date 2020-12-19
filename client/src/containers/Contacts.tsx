import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
interface Icontacts {}
function Contacts({ ...props }: Icontacts) {
  return (
    <MainWrapper>
      <Container>
        <div>Contacts</div>
      </Container>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
`;
export default Contacts;
