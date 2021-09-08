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
        <nav id='menu'>
          <ul> 
            <li> <NavLink to='/' style={{ textDecoration: 'none' }}><h1>Neocore</h1></NavLink></li>
        
            <li className='submenu' style={{ display: 'block' }}>Categorías
            <ul>
           <NavLink to="/placas"> <li>Placas de Video</li></NavLink>
           <NavLink to="/cpu"><li>CPU</li></NavLink></ul></li>

           {productos > 0 ? <CartWidget prod={productos}/> :null}
        </ul>
        </nav>
        </header>
);


}

export default NavBar;
