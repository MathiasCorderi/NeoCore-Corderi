import React from 'react';

const CartItem = ({nombre, inCart}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Cantidad en el carrito: {inCart}</p>
        </div>
    );
}

export default CartItem;
