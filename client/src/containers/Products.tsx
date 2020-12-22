import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

interface Iproducts {}

function Products({ ...props }: Iproducts) {
  return (
    <>
      <ProductWrapper>
        <Container>
          <div>Products</div>
        </Container>
      </ProductWrapper>
    </>
  );
}

export default Products;
const ProductWrapper = styled.div`
  margin-top: 30px;
  overflow: hidden;
`;
