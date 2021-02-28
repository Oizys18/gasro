import React from "react";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";
interface cardProps {
  curFocus: number;
}
export default function CardImg(props: cardProps) {
  if (props.curFocus === 1) {
    return (
      <>
        <img className="card-img" src={gt300AB} alt="gt300AB" />
      </>
    );
  } else if (props.curFocus === 2) {
    return (
      <>
        <img className="card-img" src={gt600AB} alt="gt600AB" />
      </>
    );
  } else if (props.curFocus === 3) {
    return (
      <>
        <img className="card-img" src={gt700AB} alt="gt700AB" />
      </>
    );
  }
  return <></>;
}
