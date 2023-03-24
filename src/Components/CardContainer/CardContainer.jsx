import React from 'react'
import Cards from '../Cards/Cards'
import destinos from '../../assets/db'
import style from './CardContainer.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from "./Arrows";

const CardContainer = () => {
  const arr = destinos.slice(0,10);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <div className={style.container}>
      <h1>Vuelos Recomendados</h1>
      <div>
        <Slider {...settings}>
          {
            arr.map((d,i)=><Cards key={i} destino={d}/>)
          }
        </Slider>
        
      </div>
    </div>
  )
}

export default CardContainer
