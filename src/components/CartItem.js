import React from 'react';

const CartItem = ({nombre, inCart, total, id, limpiar}) => {
   

    return (
        <div>
            <h2>{nombre}</h2>
            <p>Cantidad: {inCart} (${total})</p>
            <button onClick={limpiar} id={id}>Borrar item</button>
            
        </div>
    );
}

export default CartItem;
