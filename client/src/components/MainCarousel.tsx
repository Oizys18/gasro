import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carOne from "assets/images/1.jpg";
import carTwo from "assets/images/2.jpg";
import carThree from "assets/images/3.jpg";

interface configProps {
  autoPlay?: boolean;
  showArrows?: boolean;
  useKeyboardArrows?: boolean;
  swipeable?: boolean;
  interval?: number;
  infiniteLoop?: boolean;
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
        infiniteLoop={props.infiniteLoop}
      >
        <div>
          <img src={carOne} alt="carousel-one" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={carTwo} alt="carousel-two" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={carThree} alt="carousel-three" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </>
  );
}
