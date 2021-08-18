import React from 'react';
import './styles/itemCount.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContextProvider';




const {useState} = React;





const itemCount = ({stock , initial, producto}) => {
    
    const[count, setCount] = useState(initial);
    const [cart, setCart] = useContext(CartContext);
    const [cartNumber, setCartNumber] = useState(false)

    
    
    const addToCart = () => {
        
    
        var carritoActual = cart
        var bandera = true
    
        if (carritoActual.length == 0) {
            producto.inCart = count
            carritoActual.push(producto)
        } else {
            for (const i of carritoActual) {
                if (i.nombre == producto.nombre){
                    i.inCart = (i.inCart + count);
                    bandera = false;
                }      
            } 
            if (bandera == true) {
                    producto.inCart = producto.inCart + count
                    carritoActual.push(producto)
            }
        }
        
        console.log(carritoActual)
        setCart(carritoActual)
        
       
    }

  
     

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


   if(cartNumber == false) {

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
