import React from 'react';
import {NavLink} from 'react-router-dom'

const CartWidget = ({prod}) => {
    
    return  <NavLink to='/cart'>
    Carrito ({prod})
    </NavLink> 
    ;
}

export default CartWidget;
