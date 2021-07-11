import React from "react";
import styled from "styled-components";

interface cardProps {
  textL?: boolean;
}
export default function MainCard(props: cardProps) {
  return (
    <>
      {props.textL ? (
        <>
          <Container></Container>
        </>
      ) : (
        <Container>hi</Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  gap: 40px;
  margin: 50px 0;
`;

const ItemLeft = styled.div`
  text-align: right;
  width: 620px;
`;
const ItemRight = styled.div`
  text-align: left;
  width: 620px;
`;
