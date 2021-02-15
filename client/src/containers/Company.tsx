import * as React from "react";
interface ICompany {}
function Company({ ...props }: ICompany) {
  return (
    <>
      <section className="home section bd-container" id="home">
        <h1 className="home__title ">회사소개</h1>
      </section>
    </>
  );
}

export default Company;
