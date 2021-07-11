import * as React from "react";
import MainCard from "components/Card/MainCard";
interface ITest {}
function Test({ ...props }: ITest) {
  return (
    <>
      <MainCard></MainCard>
    </>
  );
}

export default Test;
