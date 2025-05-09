import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

import "./Slider.css";

export default function Slider() {
  return (
    <>
      <p className="index-info">1 / 3</p>
      <div className="slider">
        <p className="image-info">Bedroom</p>
        <img
          src="../../../public/images/img-1.jpg"
          alt=""
          className="slider-image"
        />
        <button type="button" className="navigation-button prev-button">
          <img src={leftChevron} alt="previous" />
        </button>
        <button type="button" className="navigation-button next-button">
          <img src={rightChevron} alt="next" />
        </button>
      </div>
    </>
  );
}
