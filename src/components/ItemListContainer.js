import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const ItemListContainer = () => {
    const [stateProd, setState] = useState([])
    const params = useParams()
    const paramsId = params.id

    useEffect(() => { 
       

    const db = firestore
    const productos = db.collection('items')  
   
   
   
if (params.id) {
    
    const filtro = productos.where('categoria', '==', paramsId)
    var query = filtro.get() 

} else {
   
    var query = productos.get()
    }

   
    
    var productosParseado = []

   
    query.then((e) => {e.forEach((f)=>{
        
        

        const id = f.id
        const data = f.data()
        const dataFinal = {id, ...data} 
       
        productosParseado.push(dataFinal)

    })

    setState(productosParseado)
    console.log(productosParseado)
    })
        
       

    }, [paramsId])

  
    
    return (
        <div className='row m-5'>
            <ItemList prod={stateProd}/>
        </div>
    );
}

export default ItemListContainer;
