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
      <div className="card-img">
        <img src={gt300AB} alt="gt300AB" />
      </div>
    );
  } else if (props.curFocus === 2) {
    return (
      <div className="card-img">
        <img src={gt600AB} alt="gt600AB" />
      </div>
    );
  } else if (props.curFocus === 3) {
    return (
      <div className="card-img">
        <img src={gt700AB} alt="gt700AB" />
      </div>
    );
  }
  return <></>;
}
