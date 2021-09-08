import React from 'react';
import {NavLink} from 'react-router-dom'
//import './styles/NavBar.css'

const CartWidget = ({prod}) => {
    
    return  <NavLink to='/cart'>
    <li>Carrito ({prod})</li>
    </NavLink> 
    ;
}

export default CartWidget;
