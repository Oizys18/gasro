import React from "react";
interface cardProps {
  curFocus: number;
}
export default function CardText(props: cardProps) {
  if (props.curFocus === 1) {
    return (
      <>
        <div className="title">GT300</div>
        <div className="content">
          1995년 설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
          왔습니다. 생산공정의 개선, 디지털화, 안전성과 편이성 증대를
          실현하였으며, 제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.
        </div>
      </>
    );
  } else if (props.curFocus === 2) {
    return (
      <>
        <div className="title">GT600</div>
        <div className="content">
          1995년 설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
          왔습니다. 생산공정의 개선, 디지털화, 안전성과 편이성 증대를
          실현하였으며, 제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.
        </div>
      </>
    );
  } else if (props.curFocus === 3) {
    return (
      <>
        <div className="title">GT700</div>
        <div className="content">
          1995년 설립 이후 혁신과 도전으로 끊임없이 연구하며 지속 성장하여
          왔습니다. 생산공정의 개선, 디지털화, 안전성과 편이성 증대를
          실현하였으며, 제품의 다양화와 성능향상을 위해 항상 노력하고 있습니다.
        </div>
      </>
    );
  }
  return <></>;
}
