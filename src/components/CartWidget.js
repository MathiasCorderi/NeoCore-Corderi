import React from 'react';
import {NavLink} from 'react-router-dom'

const CartWidget = ({prod}) => {
    
    return  <NavLink to='/cart'>
    <li><img className='cartImg' src='https://www.iconninja.com/files/609/434/345/buy-shopping-commerce-cart-shopping-cart-icon.png' alt='carrito'/><span className='badge badge-secondary'>({prod})</span></li>
    </NavLink> 
    ;
}

export default CartWidget;
