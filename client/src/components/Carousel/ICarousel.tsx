import React, { useState, useEffect, useRef } from "react";
import ISlide from "components/Carousel/ISlide";
import product01 from "assets/images/product/product01.png";
import product02 from "assets/images/product/product02.png";
import product03 from "assets/images/product/product03.png";
import product04 from "assets/images/product/product04.png";
import product05 from "assets/images/product/product05.png";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "config/lang/i18n";

export default function ICarousel() {
  // {t("main.title")}
  const { t, i18n } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const TOTAL_SLIDES = 4;
  const slide_title = [
    <>오븐점화</>,
    <>온도설정</>,
    <>시간설정</>,
    <>오븐소화</>,
    <>전원종료</>,
  ];
  const slide_text = [
    <>
      - POWER 스위치를 ON으로 한 후 HEAT 스위치를 ON으로 하면 10초 공회전 후
      점화됩니다.
      <br />
      - 이때 온도가 상승하며 현재의 온도가 표시됩니다.
      <br />- 점화가 안되고 Err표시가 되면서 알림이 울리면 가스공급 유무를
      확인하여 주십시오.
    </>,
    <>
      - 설정온도 표시는 HEAT 스위치의 ON,OFF 에 상관없이 점화중에도 UP 또는 DOWN
      버튼으로 온도의 설정, 변경이 가능합니다. <br />- 이때 UP 이나 DOWN 버튼을
      누르면 3초간 깜빡이며 설정되어진 온도가 표시되고 곧 현재온도로 전환됩니다.
      <br />- 버튼을 떼면 오븐기 내부의 현재온도가 표시됩니다.
    </>,
    <>
      - 컨베이어 스위치를 ON으로 한 후 UP 또는 DOWN 버튼으로 시간을 설정합니다.
    </>,
    <>
      - HEAT스위치를 OFF로 하면 소화되고 이후 7분간 송풍 팬이 공 회전을 한 후
      자동으로 꺼집니다.
    </>,
    <>
      - 소화 후, 송풍 팬이 멈추면 POWER 스위치를 OFF로 하여 전원을 차단합니다.
    </>,
  ];
  const slideRef = useRef<any>(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // const prevSlide = () => {
  //   if (currentSlide === 0) {
  //     setCurrentSlide(TOTAL_SLIDES);
  //   } else {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };
  const setSlide = (num: number) => {
    setCurrentSlide(num);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${340 * currentSlide}px)`;
  }, [currentSlide]);

  return (
    <>
      <div className="basic-container">
        <div className="subtitle">제품사용</div>
        <div className="maintitle">간편한 사용법</div>
      </div>
      <div className="slide-wrapper basic-container" ref={slideRef}>
        <a onClick={() => setSlide(0)}>
          <ISlide image={product01} cur={currentSlide} page={0} />
        </a>
        <a onClick={() => setSlide(1)}>
          <ISlide image={product02} cur={currentSlide} page={1} />
        </a>
        <a onClick={() => setSlide(2)}>
          <ISlide image={product03} cur={currentSlide} page={2} />
        </a>
        <a onClick={() => setSlide(3)}>
          <ISlide image={product04} cur={currentSlide} page={3} />
        </a>
        <a onClick={() => setSlide(4)}>
          <ISlide image={product05} cur={currentSlide} page={4} />
        </a>
      </div>
      <div className="basic-container slide-container">
        <div className="slide-title">
          <div className="num">0{currentSlide + 1}</div>
          <div className="text">{slide_title[currentSlide]}</div>
          {currentSlide < 4 ? (
            <a onClick={nextSlide} className="slide-button">
              다음
            </a>
          ) : (
            <a onClick={() => setSlide(0)} className="slide-button">
              처음부터
            </a>
          )}
        </div>

        <div className="slide-text">{slide_text[currentSlide]}</div>
      </div>
    </>
  );
}
