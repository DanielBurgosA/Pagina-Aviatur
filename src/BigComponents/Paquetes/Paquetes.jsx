import React from 'react'
import Image from './Image'
import destinos from '../../assets/db'
import style from './Paquetes.module.css'

const Paquetes = () => {
  const arr = destinos.slice(10,15);

  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div className={style.div1}>
          <Image src={arr[0].image} w={"400px"} h={"400px"}></Image>
          <div>
            <Image src={arr[1].image} w={"400px"} h={"198px"}></Image>
            <div className={style.div2}>
              <Image src={arr[2].image} w={"197px"} h={"198px"}></Image>
              <Image src={arr[3].image} w={"197px"} h={"198px"}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paquetes
