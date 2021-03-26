import React, {useState, useEffect} from 'react'
import {ItemDetail}  from './ItemDetail'


const getItems = () => {
    const descripcion = [{
        titulo: 'La piedra filosofal',
        precio: 1000,
        descripcion: 'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia.',
        imagen : "https://images.cdn2.buscalibre.com/fit-in/360x360/08/96/0896e734843084c569620262b57726ad.jpg"
    }]
    return new Promise ((resultado)=>{
        setTimeout(() => {resultado(descripcion
            )},2000)
    })
}
export default function ItemDetailContainer() {

    const [item, setItem] = useState([])

    useEffect(() => {

        getItems().then((respuesta)=> setItem(respuesta))
    }, [])

     return ( <div><ItemDetail item={item} /></div>
        )
    }

