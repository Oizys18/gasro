import * as React from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
interface ILanding {}

function Landing({ ...props }: ILanding) {
  ScrollReveal({ reset: true });
  const hi = function () {
    ScrollReveal().reveal("#hello");
  };
  return (
    <>
      <Head id="hello">asdasdg</Head>
      <a type="button" href="#hello" onClick={hi}>
        Hello
      </a>
      <Bottom>s</Bottom>
    </>
  );
}

export default Landing;

const Head = styled.div`
  height: 500px;
  background-color: black;
`;
const Bottom = styled.div`
  height: 1500px;
`;
