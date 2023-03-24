import React from "react";
import style from "./Arrows.module.css"

const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={` ${style.customNextArrowcustom} ${className}`} onClick={onClick} />;
}
  
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={` ${style.customPrevArrowcustom} ${className}`} onClick={onClick} />;
}

export { NextArrow, PrevArrow };