import React from 'react'

export default function ItemDetail({ items }) {
 
    return (
        <div>
            <img src={items.imagen} alt=""/>
            <h2>{items.titulo}</h2>
            <p>{items.descripcion}</p>
            <div>${items.precio}</div>
            
        </div>
   
   )}
  
