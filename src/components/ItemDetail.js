import React from 'react'

export default function ItemDetail  ({ item}) { 
    return (
        <div className="card" className="contenido">
            <img src={item.imagen} alt="" className="imagen"/>
            <h2 className="titulo2">{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <div>${item.precio}</div>
        </div>
   
)}
  
