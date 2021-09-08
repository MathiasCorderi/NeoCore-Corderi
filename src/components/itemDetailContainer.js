import React, {useState, useEffect} from 'react';
import ItemDetail from './itemDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { firestore } from '../firebase';
import ItemCount from './ItemCount';

const itemDetailContainer = () => {
    
    const [stateDetails, setDetails] = useState(false)
    const params = useParams()


    
    const paramsId = params.id
    
   
    useEffect(() => { 
       
    const db = firestore
    const productos = db.collection('items')  
   
   
   

    
    const filtro = productos.where('id', '==', paramsId)
    const query = filtro.get() 
    
    query.then((e) =>{ e.forEach(f => {
    const data = f.data();
    setDetails(data)
    console.log(data)
    })})
        
       

    }, [])
    
   
    return (
            <div className='container mt-5'>
                
                <ItemDetail detalle={stateDetails}/>
                
            </div>
    );
}

export default itemDetailContainer;
