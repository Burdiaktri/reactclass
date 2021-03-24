import React from "react";
import ItemListContainer from "./ItemListContainer";

export const Item = ({item}) => {
    return (
       <div>
<div class="card" >
  <img class="card-img-top" src={item.imagen} alt="" className="imagen"/>
  <div class="card-body">
    <h5 class="card-title">{item.titulo}</h5>
    <p class="card-text">${item.precio}</p>
    
  </div>
  </div>
</div>
    )
}