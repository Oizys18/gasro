import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "assets/images/banner01.jpg";
import bannerTwo from "assets/images/banner02.jpg";
import bannerThree from "assets/images/banner03.jpg";
import bannerFour from "assets/images/banner04.jpg";
import styled from "styled-components";
interface configProps {
  autoPlay?: boolean;
  showArrows?: boolean;
  useKeyboardArrows?: boolean;
  swipeable?: boolean;
  interval?: number;
}
export default function MainCarousel({ ...props }: configProps) {
  return (
    <>
      <Carousel
        autoPlay={props.autoPlay}
        showArrows={props.showArrows}
        useKeyboardArrows={props.useKeyboardArrows}
        swipeable={props.swipeable}
        interval={props.interval}
        infiniteLoop={true}
        // showIndicators={false}
        // showThumbs={false}
      >
        <div>
          <img src={bannerOne} alt="carousel-one" />
        </div>
        <div>
          <img src={bannerTwo} alt="carousel-two" />
        </div>
        <div>
          <img src={bannerThree} alt="carousel-three" />
        </div>
        <div>
          <img src={bannerFour} alt="carousel-three" />
        </div>
      </Carousel>
    </>
  );
}
