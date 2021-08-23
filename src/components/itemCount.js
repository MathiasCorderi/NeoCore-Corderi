import React from 'react';
import './styles/itemCount.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContextProvider';


const itemCount = ({stock , initial, addCartNumber}) => {
    
    const[count, setCount] = useState(initial);
    const {cart, setCart} = useContext(CartContext);
   // const [cartNumber, setCartNumber] = useState(false)
    

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
           
            <h3>{count}</h3>
            <div className='counterButtons'>
                <button onClick={restar} >-</button>
                <button onClick={sumar}>+</button>
                <br />
                <button onClick={addToCart}>Comprar</button>
            </div>
        
        </div>
    );





}

export default itemCount;
