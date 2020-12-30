import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carOne from "assets/images/1.jpg";
import carTwo from "assets/images/2.jpg";
import carThree from "assets/images/3.jpg";
interface Props {}
function MainCarousel({ ...props }: Props) {
  return (
    <>
      <Carousel>
        <div>
          <img src={carOne} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={carTwo} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={carThree} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </>
  );
}
export default MainCarousel;
