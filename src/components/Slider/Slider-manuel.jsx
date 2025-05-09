import { useState } from "react";

import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

import sliderData from "../../data/sliderData.js";

import "./Slider.css";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toggleImage(direction) {
    if (sliderIndex + direction > sliderData.length) {
      setSliderIndex(1);
    } else if (sliderIndex + direction < 1) {
      setSliderIndex(sliderData.length);
    } else {
      setSliderIndex(sliderIndex + direction);
    }
  }

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((item) => item.id === sliderIndex).description}
        </p>
        <img
          src={`/public/images/img-${sliderIndex}.jpg`}
          alt=""
          className="slider-image"
        />
        <button
          onClick={() => toggleImage(-1)}
          type="button"
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          type="button"
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next" />
        </button>
      </div>
    </>
  );
}
