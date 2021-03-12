import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import CardImg from "components/CardImg";
interface Params {
  productId: string;
}
export default function Product() {
  const { productId } = useParams<Params>();
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(Number(productId));
  }, []);
  return (
    <>
      <Pcontainer>
        <div className="basic-container">
          <PCard>
            <CardImg curFocus={item}></CardImg>
          </PCard>
        </div>
      </Pcontainer>
    </>
  );
}

const Pcontainer = styled.section`
  margin: 200px 0;
`;

const PCard = styled.div`
  height: 600px;
  background-color: lightgrey;
  border-radius: 2em;
`;
