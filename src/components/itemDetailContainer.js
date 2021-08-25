import React, {useState, useEffect} from 'react';
import ItemDetail from './itemDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { firestore } from '../firebase';

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
            <ItemDetail detalle={stateDetails}/>    
    );
}

export default itemDetailContainer;
