import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

interface Iproducts {}

function Products({ ...props }: Iproducts) {
  return (
    <>
      <ProductWrapper>
        <Container>
          <div>제품 소개 영역</div>
        </Container>
      </ProductWrapper>
    </>
  );
}

export default Products;
const ProductWrapper = styled.div`
  overflow: hidden;
`;
