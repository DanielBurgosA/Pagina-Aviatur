import React from 'react'
import style from './Cards.module.css'


const Cards = ({destino}) => {
  const {image, city} = destino;

  return (
    <div>
      <div className={style.container}>
        <img src={image} alt="" />
        <h2>{city}</h2>
      </div>
    </div>
  )
}

export default Cards