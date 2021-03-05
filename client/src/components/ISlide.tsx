import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
interface sProps {
  image: string;
  cur: number;
}

export default function ISlide(props: sProps) {
  return (
    <>
      <img src={props.image} alt="imgSlide" className="slide-image" />
    </>
  );
}
