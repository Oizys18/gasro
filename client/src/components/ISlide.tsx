import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
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
