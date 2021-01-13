import * as React from "react";
import Board from "components/Board";
interface Inotice {}
function Notice({ ...props }: Inotice) {
  return (
    <>
      <section className="home section bd-container" id="home">
        {/* <div className="home__container "> */}
        <h1 className="home__title ">공지사항</h1>
        <Board></Board>
        {/* </div> */}
      </section>
    </>
  );
}

export default Notice;
