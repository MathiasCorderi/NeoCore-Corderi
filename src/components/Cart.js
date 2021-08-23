import React, {useContext} from 'react';
import { CartContext } from './CartContextProvider';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {

    const {cart, setCart, limpiarCart, total, limpiarItem} = useContext(CartContext);

   const limpiarCart2 = () => limpiarCart(cart, setCart)
    const limpiarItem2 = (e) => limpiarItem(e.target, cart, setCart)
  
  
    if (cart.length > 0) {
    return (
        <div>
           {cart.map( p =>
            <CartItem nombre={p.nombre} inCart={p.inCart} total={p.precio * p.inCart} id={p.id} limpiar={limpiarItem2}/>)}
            <h3>Total: $ {total}.00</h3>
            <button onClick={limpiarCart2}>Limpiar el carrito</button> 
        </div>
    );

} else {
       return   (
                <div> 
                <h2>Tu carrito está vacío padre!</h2>
                <Link to='/'>Sacame de acá!</Link>
                </div>
                )
        
    }
}

export default Cart;
