import React, {useContext} from 'react';
import { CartContext } from './CartContextProvider';
import CartItem from './CartItem';


const Cart = () => {

    const {cart, setCart, limpiarCart} = useContext(CartContext);

   const limpiarCart2 = () => limpiarCart(cart, setCart)
    

    return (
        <div>
             {cart.map( p =>
            <CartItem nombre={p.nombre} inCart={p.inCart} />)}
            <button onClick={limpiarCart2}>Limpiar el carrito</button>
        </div>
    );
}

export default Cart;
