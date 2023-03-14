import React from "react";
import "./Slider.css";
import leftArrow from "./Icons/left-arrow.png";
import rightArrow from "./Icons/right-arrow.png";

export const BtnSlider=({ direction, moveSlide }) =>{
  return (
    <span
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="" src={direction === "next" ? rightArrow : leftArrow} className="img-slider"/>
    </span>
  );
}