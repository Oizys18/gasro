import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gt300AB from "assets/images/ovens/gt300AB.png";
import gt600AB from "assets/images/ovens/gt600AB.png";
import gt700AB from "assets/images/ovens/gt700AB.png";
import pizzaTwo from "assets/images/foods/pizza2.jpg";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import VideoDialog from "components/VideoDialog";
import MainCarousel from "components/MainCarousel";
import BannerCarousel from "components/BannerCarousel";

interface ILanding {}
function Landing({ ...props }: ILanding) {
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <section id="main-company">
        <div className="bd-container">
          <div className=""></div>
        </div>
      </section>
      <section id="main-product"></section>
      <section id="main-contact"></section>
    </>
  );
}

export default Landing;

const Wrapper = styled.div`
  margin: 100px 320px 0 320px;
`;

const Banner = styled.div``;
