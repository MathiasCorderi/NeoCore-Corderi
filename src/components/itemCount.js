import React from 'react';
import './styles/ItemCount.css'
import { useState, useEffect } from 'react';



const itemCount = ({stock , initial, addCartNumber}) => {
   

    const[count, setCount] = useState(initial);
    const[stockActual, setStockActual] = useState();
    
    
    useEffect(() => {
        if(stock !== undefined) {
            setStockActual(stock)
        }
    }, [stock])
 

   const sumar = () => {
       if(stockActual === undefined) {
        if (count < stock) {
           setCount(count + 1)
       }}

       else {
        if (count < stockActual) {
            setCount(count + 1)
        }
       }
   }
   
   const restar = () => {
       if (count > 1) {
           setCount(count - 1)
       }
   }

   const addToCart = () => {
       addCartNumber(count)
       setStockActual(stockActual - count)
       setCount(1)
    }

if(stockActual !== 0){

    return (

        <div className='itemCount'>
           
            
                <div className='row d-flex justify-content-center'>
                <button className='btn btn-danger col-1' onClick={restar} >-</button>
                <p  id='counter' className='col-1'>{count}</p>
                <button className='btn btn-danger col-1' onClick={sumar}>+</button>
                
                <br />
                {stockActual === undefined ? <button  className='btn btn-danger mt-3 disabled' onClick={addToCart}>Comprar</button> : <button  className='btn btn-danger mt-3' onClick={addToCart}>Comprar</button>}
                </div>
        
        </div>
    );


}

else {

    return (
        <div className='row d-flex justify-content-center'>
                
                <p  id='counter'>No hay stock!</p>
                
                
                <br />
                <button className='btn btn-danger disabled mt-3' onClick={addToCart}>Comprar</button>
                </div>

    )

}


}

export default itemCount;
