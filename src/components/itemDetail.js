import React from 'react';
import ItemCount from './ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from './CartContextProvider';
import { Link } from 'react-router-dom';
import Item from './Item';





const ItemDetail = ({detalle}) => {
    
    const [cartNumber, setCartNumber] = useState(false)
    const { addToCart } = useContext(CartContext);
    const { cart, setCart } = useContext(CartContext);

   
    const addCartNumber = (e) => {
        setCartNumber(e)
        addToCart(detalle, e, cart)
    }


if (cartNumber == false) {
   return (
      
        <div className='row justify-content-center'>       
            <Item producto={detalle} detail={true} addCartNumber={addCartNumber}/>
            <Link to ='/'><button className='btn btn-danger bg-purple'>← volver a la tienda</button></Link>
        </div>
    );
}

else {
    return (
        <div className='row justify-content-center'>   
            <Item producto={detalle} detail={true} addCartNumber={addCartNumber}/>
             <br />
             <div className='d-flex justify-content-between'>
                <Link to ='/'><button className='btn btn-danger bg-purple'>	← Volver a la tienda</button></Link>
                <Link to='/cart'><button className='btn btn-danger bg-purple'>Ir al Carrito →</button></Link>     
            </div>
         </div>
     );
 }
}

export default ItemDetail;
