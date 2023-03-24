import React from 'react'
import style from './ModalT.module.css'

const ModalT = ({destiny, sum}) => {
  const handleClose = ()=>{
    sum(false);
  }

  console.log(sum);

  return (
    <div>
        <div className={style.Overlay}>
          <div className={style.modalContainer}>
            <div className={style.encabezado}>
              <h1>Tu Viaje</h1>
            </div>
            <button className={style.closeBut}><svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg></button>
            <div className={style.infoContainer}>
              <img className='' src={destiny.img} alt={destiny.nameC} />
              <h3>{`Ciudad: ${destiny.nameC}  |  Fecha: ${destiny.date}  |  Viaje: ${destiny.travel}`}</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ModalT
