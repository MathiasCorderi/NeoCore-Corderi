import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [stateProd, setState] = useState([])
    const params = useParams()

    const productos = [
        {nombre: 'Placa de video 1', precio: 5000, id: '1'},
        {nombre: 'Placa de video 2', precio: 8000, id: '2'}
    ];
    
 
    useEffect(() => { 
        const promesa = operacion()
        promesa.then(json=>{
            setState(json)
        })

    }, [])

    
   const operacion = () => {
       
    const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(params.id){
            resolve(productos.filter(producto=>producto.id == params.id))
        }
        else{
            resolve(productos)
        }
    }, 2000)
    })
    return promesa
    };

  
    
    return (
        <div className='row'>
            <ItemList prod={stateProd}/>
        </div>
    );
}

export default ItemListContainer;
