import React from "react";

interface sProps {
  image: string;
  cur: number;
  page: number;
  onClick?: () => {};
}

export default function ISlide(props: sProps) {
  return (
    <>
      {props.cur === props.page ? (
        <img src={props.image} alt="imgSlide" className="slide-image" />
      ) : (
        <img src={props.image} alt="imgSlide" className="slide-preview" />
      )}
    </>
  );
}
