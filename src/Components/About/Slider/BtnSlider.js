import React from 'react'
import "./Slider.css";
import leftArrow from "./arrow_left.svg";
import rightArrow from "./arrow_right.svg";

export default function BtnSlider({direction, moveSlide}) {


    return (
        <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img
                src={direction === "next" ? rightArrow : leftArrow} 
                alt="" 
            />
        </button>
    )
};
