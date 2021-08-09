import React, {useState} from 'react';
import ItemList from './ItemList';



const ItemListContainer = () => {
   const [stateProd, setState] = useState([])


    const productos = [
        {nombre: 'Placa de video 1', precio: 5000},
        {nombre: 'Placa de video 2', precio: 8000}
    ];
    
 
   var operacion = () => { return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000);
    })};
  
    operacion().then((e) => setState(e));

  
    
    return (
        <div>
            <ItemList prod={stateProd}/>
        </div>
    );
}

export default ItemListContainer;
