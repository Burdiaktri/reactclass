import React from 'react';
import { ItemCount } from "./ItemCount";


 export default function ItemListContainer (props) {
    const compra = function (){
       console.log("Gracias por tu compra" );
    }
    return (<div className="item"> Producto: {props.nombre} 
   <ItemCount stock="10" inicial="1" onAdd={compra} />
   </div>);
    
}

