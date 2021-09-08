import React from 'react';
import './styles/itemCount.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContextProvider';


const itemCount = ({stock , initial, addCartNumber}) => {
    
    const[count, setCount] = useState(initial);
    const {cart, setCart} = useContext(CartContext);
   
    

   const sumar = () => {
       if (count < stock) {
           setCount(count + 1)
       }
   }
   
   const restar = () => {
       if (count > 1) {
           setCount(count - 1)
       }
   }

   const addToCart = () => {
       addCartNumber(count)
    }

 

    return (

        <div className='itemCount'>
           
            
                <div className='row d-flex justify-content-center'>
                <button className='btn btn-danger col-1' onClick={restar} >-</button>
                <p  id='counter' className='col-1'>{count}</p>
                <button className='btn btn-danger col-1' onClick={sumar}>+</button>
                
                <br />
                <button className='btn btn-danger mt-3' onClick={addToCart}>Comprar</button>
                </div>
        
        </div>
    );





}

export default itemCount;
