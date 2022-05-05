import React from "react";
import "./Slider.css";
import leftArrow from "./Icons/left-arrow.svg";
import rightArrow from "./Icons/right-arrow.svg";

export const BtnSlider=({ direction, moveSlide }) =>{
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="" src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}