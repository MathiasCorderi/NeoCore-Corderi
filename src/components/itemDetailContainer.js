import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { firestore } from '../Firebase';


const ItemDetailContainer = () => {

    
    
    const [stateDetails, setDetails] = useState(false)
    const params = useParams()

    
    
    const paramsId = params.id
    
   
    useEffect(() => { 
       
    const db = firestore
    const productos = db.collection('items')  
   
   
   

    
    const filtro = productos.doc(paramsId)
    const query = filtro.get() 
    
    query.then((e) =>{ 
    const data = e.data();
    setDetails(data)
    })
        
       

    }, [])
    
   
    return (
            <div className='container mt-5'>
                
                <ItemDetail detalle={stateDetails}/>
                
            </div>
    );
}

export default ItemDetailContainer;
