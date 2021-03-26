import React from 'react'

export const ItemDetail = ({ item}) => {
 
    return (
        <div>
            <img src={item.imagen} alt="" className="imagen"/>
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <div>${item.precio}</div>
        </div>
   
)}
  
