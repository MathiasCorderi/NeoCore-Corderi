import React from 'react';
import './styles/NavBar.css'
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <header>
        <nav className='nav'>
           
             <NavLink to='/' style={{ textDecoration: 'none' }}><h1>Neocore</h1></NavLink>
        <ul>
            <li><NavLink to="/categoria/1">Categoria 1</NavLink></li>
            <li><NavLink to="/categoria/2">Categoria 2</NavLink></li>
            <li><CartWidget /></li>
        </ul>
        </nav>
        </header>
);


}

export default NavBar;
