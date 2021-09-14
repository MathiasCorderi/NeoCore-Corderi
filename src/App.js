import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom';
import Cart from './components/Cart';
import {CartProvider} from './components/CartContextProvider';
import './App.css'


function App() {

  return  <CartProvider>
  
  <BrowserRouter>
    <NavBar /> 
    <Route path='/' component={ItemListContainer} exact/>
    <Route path= '/:id' component={ItemListContainer} exact/>
    <Route path= '/:categoria/:id' component={ItemDetailContainer} exact/>
    <Route path='/cart' component={Cart} exact/>
    
    </BrowserRouter>
    </CartProvider>
}

export default App;
