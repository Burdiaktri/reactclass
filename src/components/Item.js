import React from "react";


export const Item = ({item}) => {
    return (
       <div>
<div className="card" >
  <img className="card-img-top" src={item.imagen} alt="" className="imagen"/>
  <div className="card-body">
    <h5 className="card-title">{item.titulo}</h5>
    <p className="card-text">${item.precio}</p>
    
  </div>
  </div>
</div>
    )
}