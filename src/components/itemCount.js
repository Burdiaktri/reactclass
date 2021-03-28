import React, {useEffect, useState} from "react";

export default function ItemCount ({stock, inicial, onAdd}){

    const [count, setCount] = useState(inicial);
    
      useEffect(() => {
        setCount(inicial);
        return;
      }, [inicial]);

      const addHandle = () => {
        setCount(count + 1);
      };
    
      const removeHandle = () => {
        setCount(count - 1);
      };    
    return (
    <div className="w-25 flex-column align-items-strech">
    <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center ">
        <button
          disabled={count <= 0}
          type="button"
          onClick={removeHandle}
          className="boton"
        >
          -
        </button>
        <div> {count}</div>
        <button
          disabled={count >= stock}
          type="button"
          onClick={addHandle}
          className="boton"
        >
          +
        </button>
        </div>
      <button
        disabled={count < 1}
        type="button"
        onClick={onAdd}
        className="producto"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

