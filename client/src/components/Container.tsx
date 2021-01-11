import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
export default function Container({ ...props }: Props) {
  return (
    <>
      <Wrapper className="nav bd-container">{props.children}</Wrapper>
    </>
  );
}
const Wrapper = styled.div``;
