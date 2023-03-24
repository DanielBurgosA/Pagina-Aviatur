import React from "react";
import style from "./Arrows.module.css"

const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={`${className} ${style.customNextArrowcustom}`} onClick={onClick} />;
}
  
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={`${className} ${style.customPrevArrowcustom}`} onClick={onClick} />;
}

export { NextArrow, PrevArrow };