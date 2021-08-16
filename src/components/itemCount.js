import React from 'react';
import './styles/itemCount.css'
import { Link } from 'react-router-dom';

const {useState} = React;



const itemCount = ({stock , initial, onAdd, cart}) => {
    const[count, setCount] = useState(initial);
    

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

   const confirmar =() => {
       if (stock > 0) {
           onAdd(count)
       }
   }

   if(cart == false) {

    return (

        <div className='itemCount'>
           
            <h3>{count}</h3>
            <div className='counterButtons'>
                <button onClick={restar} >-</button>
                <button onClick={sumar}>+</button>
                <br />
                <button onClick={confirmar}>Comprar</button>
            </div>
        
        </div>
    );
} else {

    return (

        <div className='itemCount'>
           
            <h3>{count}</h3>
            <div className='counterButtons'>
                <button onClick={restar} >-</button>
                <button onClick={sumar}>+</button>
                <br />
                <Link to='/cart'><button>Confirmar compra</button></Link>
            </div>
        
        </div>
    );

}

}

export default itemCount;
