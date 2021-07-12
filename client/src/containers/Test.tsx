import * as React from "react";
import MainCard from "components/Card/MainCard";
import product01 from "assets/images/product/product01.png";
interface ITest {}
function Test({ ...props }: ITest) {
  return (
    <>
      <MainCard
        Lchildren={
          <>
            <img src={product01} alt="" />
          </>
        }
        Rchildren={<>hi</>}
      />
    </>
  );
}

export default Test;
