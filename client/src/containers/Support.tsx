import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

interface Isupport {}

function Support({ ...props }: Isupport) {
  return (
    <>
      <ProductWrapper>
        <Container>
          <div>고객서비스</div>
        </Container>
      </ProductWrapper>
    </>
  );
}

export default Support;
const ProductWrapper = styled.div`
  overflow: hidden;
`;
