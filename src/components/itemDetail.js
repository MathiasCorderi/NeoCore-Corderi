import React from 'react';
import ItemCount from './itemCount'
import { useState, useContext } from 'react';
import { CartContext } from './CartContextProvider';
import { Link } from 'react-router-dom';





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
      
       <div>        
            <ItemCount stock={detalle.stock} initial={1} addCartNumber={addCartNumber}/>
        </div>
    );
}

else {
    return (
        <div>        
             <ItemCount stock={detalle.stock} initial={1} addCartNumber={addCartNumber}/>
             <br />
                <Link to='/cart'><button>Confirmar compra</button></Link>
         </div>
     );
 }
}

export default ItemDetail;
