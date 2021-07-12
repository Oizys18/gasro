import React from "react";
import styled from "styled-components";

interface cardProps {
  MTitle?: React.ReactNode;
  NTitle?: React.ReactNode;
  left?: boolean;
}
export default function TitleCard({ ...props }: cardProps) {
  return (
    <>
      {props.left ? (
        <NumTitleL>{props.NTitle}</NumTitleL>
      ) : (
        <NumTitleR>{props.NTitle}</NumTitleR>
      )}
      <MainTitle>{props.MTitle}</MainTitle>
    </>
  );
}

const MainTitle = styled.div`
  margin-bottom: 10px;
  font-size: var(--title-font-size);
  font-weight: var(--font-bold);
  color: var(--title-color);
`;

const NumTitleL = styled.div`
  font-family: "Heebo", sans-serif;
  border-bottom: 1px solid #000;
  line-height: 0em;
  margin: 0.5em 0 0.5em;
  font-size: 55px;
  font-weight: var(--font-bold);
  color: var(--title-color);
  & span {
    background: var(--body-color);
    line-height: 0;
    padding: 0 40px 0 0;
  }
  text-align: left;
`;

const NumTitleR = styled.div`
  font-family: "Heebo", sans-serif;
  text-align: right;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 0.5em 0 0.5em;
  font-size: 55px;
  font-weight: var(--font-black);
  color: var(--title-color);
  & span {
    background: var(--body-color);
    padding: 0 0 0 40px;
    line-height: 0;
  }
`;
