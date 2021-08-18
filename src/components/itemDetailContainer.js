import React, {useState, useEffect} from 'react';
import ItemDetail from './itemDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const itemDetailContainer = () => {
    
    const [stateDetails, setDetails] = useState(false)
    const params = useParams()


    
    const details = [
        {nombre: 'Producto 1',
        precio: 5000, id: '1',
        stock: 8, inCart: 0},
        {nombre: 'Producto 2',
        precio: 8000, id: '2',
        stock: 6, inCart: 0},
    ]

    useEffect(() => {
         for (const i of details) {
        if (i.id == params.id) {
                setDetails(i)
                break
            }
         }
    }, [])
    
    
   
    return (
            <ItemDetail detalle={stateDetails}/>    
    );
}

export default itemDetailContainer;
