import React from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';


export const Item = ({item}) => {
    return (
      <div className="card" className="contenido" >
      <img className="card-img-top" src={item.imagen} alt="" className="imagen"/>
      <div className="card-body">
        <h5 className="card-title" className="titulo2">{item.titulo}</h5>
        <p className="card-text">${item.precio}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">Ver más</Link>
      </div>
      </div>
    )
}