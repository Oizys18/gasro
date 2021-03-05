import React, { useState, useEffect, useRef } from "react";
import ISlide from "components/ISlide";
import product01 from "assets/images/product/product01.png";
import product02 from "assets/images/product/product02.png";
import product03 from "assets/images/product/product03.png";
import product04 from "assets/images/product/product04.png";
import product05 from "assets/images/product/product05.png";

export default function ICarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = 4;
  const slideRef = useRef<any>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${500 * currentSlide}px)`;
    // slideRef.current.style.transform = `translateX(-100%)`;
  }, [currentSlide]);
  return (
    <>
      {currentSlide}
      <div className="slide-wrapper" ref={slideRef}>
        <ISlide image={product01} cur={currentSlide} />
        <ISlide image={product02} cur={currentSlide} />
        <ISlide image={product03} cur={currentSlide} />
        <ISlide image={product04} cur={currentSlide} />
        <ISlide image={product05} cur={currentSlide} />
      </div>
      <button onClick={prevSlide}>Previous Slide</button>
      <button onClick={nextSlide}>Next Slide</button>
    </>
  );
}
