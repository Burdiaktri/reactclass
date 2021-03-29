import React, { useEffect, useState } from "react";
import  ItemCount  from "./ItemCount";
import { ItemList } from "./ItemList";


 export default function ItemListContainer (props) {
    const compra = function (){
       console.log("Gracias por tu compra" );}

    const productos = [ 
         {id:1, titulo: "Harry Potter y la Piedra Filosofal", precio: 1000, imagen:"https://images.cdn2.buscalibre.com/fit-in/360x360/08/96/0896e734843084c569620262b57726ad.jpg"},
         {id:2, titulo: "Harry Potter y la Cámara Secreta", precio: 1000, imagen:"https://http2.mlstatic.com/D_NQ_NP_925460-MLA44252533844_122020-O.webp" },
         {id:3, titulo: "Harry Potter y el príncipe de Azkabán", precio: 1000, imagen:"https://http2.mlstatic.com/D_NQ_NP_826516-MLA44360986332_122020-O.webp"},
         {id: 4, titulo: "Harry Potter y el Cáliz de Fuego", precio: 1000, imagen:"https://contentv2.tap-commerce.com/cover/medium/9789878000138_1.jpg?id_com=1113&w=220"},
         {id: 5, titulo: "Harry Potter y la Orden del Fénix", precio: 1000, imagen:"https://images-na.ssl-images-amazon.com/images/I/91o9h22q2xL.jpg"},
         {id: 6, titulo: "Harry Potter y el príncipe Mestizo", precio: 1000, imagen:"https://suertemalditalibros.com.ar/v2/wp-content/uploads/2020/07/harry-potter-y-el-misterio-del-principe.png"},
         {id: 7, titulo: "Harry Potter y las Reliquias de la Muerte", precio: 1000, imagen:"https://images.cdn3.buscalibre.com/fit-in/360x360/b6/da/b6da2e34150054d1494b7611227377e5.jpg"}
      ]
    const [items, setItems] = useState ([])

    useEffect (()=> {

      const promesa = new Promise ((resultado)=>{
         setTimeout(()=>{
            resultado(productos)
         }, 2000)
      })
      promesa.then((respuesta)=>{
         setItems(respuesta)
      })
    }, [])
    
    return (<div className="container"> 
    <ItemList items={items}/>
    <ItemCount stock="10" inicial={1} onAdd={compra} />
   </div>);
    
}

