import * as React from "react";
import styled from "styled-components";
import Container from "components/Container";
import MainCarousel from "components/MainCarousel";
interface Iproducts {}

function Products({ ...props }: Iproducts) {
  return (
    <>
      <ProductWrapper>
        <Container>
          <MainCarousel
            autoPlay={true}
            useKeyboardArrows={true}
            swipeable={true}
            interval={3000}
            infiniteLoop={true}
          />
        </Container>
      </ProductWrapper>
    </>
  );
}

export default Products;
const ProductWrapper = styled.div`
  overflow: hidden;
`;
