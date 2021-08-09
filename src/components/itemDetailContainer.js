import React, {useState} from 'react';
import ItemDetail from './itemDetail';

const itemDetailContainer = () => {
    const [stateDetails, setDetails] = useState([])

    const details = [
        {nombre: 'Producto 1',
        precio: 1000,},
        {nombre: 'Producto 2',
        precio: 1500,},
        {nombre: 'Producto 3',
        precio: 2000,},
        {nombre: 'Producto 4',
        precio: 2500,},
        {nombre: 'Producto 5',
        precio: 3000,},
    ]

    var getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
               resolve(details); 
                
            }, 2000);
           
        });
    }

    getItems().then((e) => setDetails(e));
   
    return (
        <div>
            {stateDetails.map( p =>
            <ItemDetail detalle= {p}/>
            )}</div>
    );
}

export default itemDetailContainer;
