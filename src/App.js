import React, {createContext, useState} from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer';
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom';
import Cart from './components/Cart';
import {CartProvider} from './components/CartContextProvider';

function App() {


  return  <CartProvider>
  
  <BrowserRouter>
    <NavBar /> 
    <Route path='/' component={ItemListContainer} exact/>
    <Route path= '/categoria/:id' component={ItemListContainer} exact/>
    <Route path= '/item/:id' component={ItemDetailContainer} exact/>
    <Route path='/cart'><Cart /></Route>
    
    
    </BrowserRouter>
    </CartProvider>
}

export default App;
