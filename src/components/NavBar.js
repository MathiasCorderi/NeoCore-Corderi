import React from 'react';
import './styles/NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return ( 
        <nav className='nav'>
           
             <h1 c>Neocore</h1>
        <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Contactos</a></li>
            <li><CartWidget /></li>
        </ul>
        </nav>
        
);


}

export default NavBar;
