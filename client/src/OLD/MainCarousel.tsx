import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import gt300 from "assets/images/ovens/gt300D.png";
import gt600 from "assets/images/ovens/gt600D.png";
import gt700 from "assets/images/ovens/gt700D.png";
import Chip from "@material-ui/core/Chip";
interface configProps {
  swipeable?: boolean;
}
export default function MainCarousel({ ...props }: configProps) {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        swipeable={true}
        useKeyboardArrows={true}
        interval={2000}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
      >
        <div>
          <legend style={{ position: "absolute", right: "0", bottom: "0" }}>
            <Chip variant="outlined" label="GT300" />
          </legend>
          <img src={gt300} alt="carousel-one" />
        </div>
        <div>
          <legend style={{ position: "absolute", right: "0", bottom: "0" }}>
            <Chip variant="outlined" label="GT600" />
          </legend>
          <img src={gt600} alt="carousel-two" />
        </div>
        <div>
          <legend style={{ position: "absolute", right: "0", bottom: "0" }}>
            <Chip variant="outlined" label="GT700" />
          </legend>
          <img src={gt700} alt="carousel-three" />
        </div>
      </Carousel>
    </>
  );
}
