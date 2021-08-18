import React, {useContext} from 'react';
import { CartContext } from './CartContextProvider';
import CartItem from './CartItem';


const Cart = () => {

    const [cart, setCart] = useContext(CartContext);

    return (
        <div>
             {cart.map( p =>
            <CartItem nombre={p.nombre} inCart={p.inCart} />)}
        </div>
    );
}

export default Cart;
