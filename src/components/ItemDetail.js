import React, {useState} from 'react';
import  ItemCount  from "./ItemCount";
import {Link} from 'react-router-dom'

export default function ItemDetail  ({ item}) { 
    const [count, setCount] = useState (0)
    const addHandler = (e) => {
        console.log("Se agregaron " + e + " items")
        setCount(e)
    }
    return (
        <div className="card" className="contenido">
            <img src={item.imagen} alt="" className="imagen"/>
            <h2 className="titulo2">{item.titulo}</h2>
            <p className="descripcion">{item.descripcion}</p>
            <div>${item.precio}</div>
            { count == 0 ?
            <ItemCount className="itemCount" stock="10" inicial={1} onAdd={addHandler} />
            :
            <Link to='/cart'><button className="producto">Finalizar compra</button></Link>
            }
        </div>
   
)}
  
