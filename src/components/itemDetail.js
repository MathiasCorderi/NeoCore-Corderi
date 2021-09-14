import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from './CartContextProvider';
import { Link } from 'react-router-dom';
import Item from './Item';
import './styles/ItemDetail.css'





const ItemDetail = ({detalle}) => {
    
    const [cartNumber, setCartNumber] = useState(false)
    const { addToCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);

   
    const addCartNumber = (e) => {
        setCartNumber(e)
        addToCart(detalle, e, cart)
    }

    if (detalle === false) {

        return (
          <div className='cartel'><h2>Espere por favor....</h2></div>
        )
    
      }

    return (
        <div className='row justify-content-center'>   
            <Item producto={detalle} detail={true} addCartNumber={addCartNumber}/>
             <br />
             <div className='d-flex justify-content-between'>
                <Link to ='/'><button className='btn btn-danger bg-purple'>	← Volver a la tienda</button></Link>
                {cartNumber !== false ? <Link to='/cart'><button className='btn btn-danger bg-purple'>Ir al Carrito →</button></Link> : null}    
            </div>
         </div>
     );
 
}

export default ItemDetail;
