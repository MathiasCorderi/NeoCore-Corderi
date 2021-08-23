import React from 'react';
import './styles/NavBar.css'
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom'
import { CartContext } from './CartContextProvider';
import { useContext } from 'react';

const NavBar = () => {
   
   const {productos} = useContext(CartContext)

    return ( 
        <header>
        <nav className='nav'>
           
             <NavLink to='/' style={{ textDecoration: 'none' }}><h1>Neocore</h1></NavLink>
        <ul>
            <li><NavLink to="/categoria/1">Categoria 1</NavLink></li>
            <li><NavLink to="/categoria/2">Categoria 2</NavLink></li>
           {productos > 0 ? <li><CartWidget prod={productos}/></li> :null}
        </ul>
        </nav>
        </header>
);


}

export default NavBar;
