import React, { CSSProperties } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner01 from "assets/images/banner/GasroBanner01.png";
import banner02 from "assets/images/banner/GasroBanner01kr.png";
import banner03 from "assets/images/banner/GasroBanner01(mod01).png";
import banner04 from "assets/images/banner/GasroBanner01kr(mod01).png";
interface configProps {
  swipeable?: boolean;
}
const indicatorStyles: CSSProperties = {
  background: "#fff",
  width: 30,
  height: 2,
  display: "inline-block",
  margin: "0 8px",
};
export default function MainCarousel({ ...props }: configProps) {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={true}
        swipeable={true}
        useKeyboardArrows={true}
        interval={2000}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <>
                <li
                  style={{ ...indicatorStyles, background: "red" }}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              </>
            );
          }
          return (
            <>
              <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              ></li>
            </>
          );
        }}
      >
        <div>
          <img src={banner01} alt="carousel-one" />
        </div>
        <div>
          <img src={banner02} alt="carousel-two" />
        </div>
        <div>
          <img src={banner03} alt="carousel-three" />
        </div>
        <div>
          <img src={banner04} alt="carousel-four" />
        </div>
      </Carousel>
    </>
  );
}

const Indicator = styled.div`
  display: flex;
  /* justify-content: center; */
`;
