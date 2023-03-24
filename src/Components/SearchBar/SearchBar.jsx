import React, { useState} from 'react'
import destinos from '../../assets/db'
import style from './SearchBar.module.css'
import ModalT from '../ModalT/ModalT'

const SearchBar = ({num}) => {
//calculando fecha minima
const date = new Date();
let day = date.getDate();
day = ('0' + day).slice(-2)
let month = date.getMonth()+1;
month = ('0' + month).slice(-2)
let year = date.getFullYear();
const minDate = `${year}-${month}-${day}`

//formulario
const initialForm={
  city:destinos[0].id,
  date:minDate,
  travel:"Ida y vuelta",
  nameC:null,
  img:null, 
}

const [form, setForm] = useState(initialForm)
const [sumit, setSumit] = useState(false)

const sum = (bol) =>{
  setSumit(bol)
}

const handleChange = (e) =>{
  const{name, value} = e.target;
  if(name!=="travel") e.preventDefault();
  setForm({...form, [name]:value});
}

const handleSubmit = (e) => {
  e.preventDefault();
  const nameC = destinos[form.city-1].city
  const img = destinos[form.city-1].image
  setForm({...form, nameC, img})
  setSumit(true);
}



  return (
    
    <div className={style.container}>
      {sumit&&<ModalT destiny={form} sum ={sum}/>}
      <div className={style.buttons}>
        <form className={style.buttons} onChange={handleChange}>

            <input type="radio" name="travel" value="Ida y vuelta" id="Ida y vuelta" checked={form.travel==="Ida y vuelta"}/>
            <label className={style.option} htmlFor='Ida y vuelta'>Ida y vuelta</label>
     
            <input type="radio" name="travel" value="Solo ida" id="Solo ida" checked={form.travel==="Solo ida" }/>
            <label className={style.option} htmlFor='Solo ida'>Solo ida</label>
      
            <input type="radio" name="travel" value="Multidestino" id="Multidestino" checked={form.travel==="Multidestino"}/>
            <label className={style.option} htmlFor='Multidestino'>Multidestino</label>

        </form>
      </div>
      {num===1&&<div className={style.containersearch}>
        <form className={style.containersearch} onSubmit={handleSubmit}> 
          <select className={style.menu} name="city" onChange={handleChange}>
            {
              destinos.map((d)=><option name="city" key={d.id} value={d.id}>{d.city}</option>)
            }
          </select>
          <input className={`${style.unstyle} ${style.calendar}`} name="date" type="date" min={minDate} value={form.date} onChange={handleChange}/>
          <button className={`${style.unstyle} ${style.button}`} type="submit">BUSCAR</button>
        </form>
      </div>}
      {num===2&&<di><h1>Próximamente hoteles</h1></di>}
      {num===3&&<di><h1>Próximamente Autos</h1></di>}
    </div>
  )
}

export default SearchBar
