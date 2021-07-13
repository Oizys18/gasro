import React from "react";
import styled from "styled-components";

interface cardProps {
  Mchildren?: React.ReactNode;
  Schildren?: React.ReactNode;
  text?: boolean;
  image?: boolean;
}
export default function TextCard({ ...props }: cardProps) {
  return (
    <>
      <SubTitle>{props.Schildren}</SubTitle>
      <MainTitle>{props.Mchildren}</MainTitle>
    </>
  );
}

const MainTitle = styled.div`
  margin-bottom: 10px;
  font-size: var(--title-font-size);
  font-weight: var(--font-bold);
  color: var(--title-color);
`;
const SubTitle = styled.div`
  font-size: var(--small-font-size);
  font-weight: var(--font-regular);
`;
