import React, {createContext, useState} from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer';
import {BrowserRouter} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import {CartProvider} from './components/CartContextProvider';
import { firestore } from './firebase';
import './components/styles/app.css'


function App() {
/*
  var items = [
    {nombre: 'INTEL MICRO CORE I3' , categoria: 'cpu' , id: 'intelI3', img: 'https://www.logg.com.ar/static/photos/MICROPROCESADORES_INTEL_(S1200)/2740_K5ERPGSFYK.jpg', inCart: 0, precio: 18000, stock: 15},
    {nombre: 'AMD MICRO APU A12 9800', categoria: 'cpu', id: 'amdA12' , img: 'https://www.logg.com.ar/static/photos/MICROPROCESADORES_AMD_(_AM4)/1645_XZN2NGCTT9.jpg' , inCart: 0, precio: 36000 , stock: 6 },
    {nombre: 'INTEL MICRO PENTIUM GOLD', categoria:'cpu', id:'intelGold' , img: 'https://www.logg.com.ar/static/photos/MICROPROCESADORES_INTEL_(S1151)/2993_DFVYOI7AY8.jpg', inCart: 0, precio: 12000, stock: 13 },
    {nombre:  'AMD MICRO RYZEN 5' , categoria: 'cpu' , id: 'amdRyzen5' , img: 'https://www.logg.com.ar/static/photos/MICROPROCESADORES_AMD_(_AM4)/503_U5M8FBSPJ2.jpg' , inCart: 0, precio: 15300 , stock: 8},
    {nombre: 'AMD MICRO RYZEN 7 3700X', categoria: 'cpu', id: 'amdRyzen7', img: 'https://www.logg.com.ar/static/photos/MICROPROCESADORES_AMD_(AM4)/1230_G3DIDA5EM8.jpg', inCart: 0, precio: 60000, stock: 2 },
    {nombre: 'INTEL MICRO CORE I9 11900K', categoria: 'cpu', id: 'intelI9' , img: 'https://www.logg.com.ar/static/photos/MICROPROCESADORES_INTEL_(S1200)/3023_42J41UIJ15.jpg', inCart: 0, precio: 80000, stock: 1},
    {nombre:  'NVIDIA GEFORCE GT 730' , categoria: 'placas', id: 'gt730', img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_NVIDIA/2298_Q0FJ5HZO29.jpg' , inCart: 0, precio: 36690, stock: 9},
    {nombre: 'NVIDIA GTX 1650', categoria: 'placas', id: 'gtx1650', img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_NVIDIA/2470_LJU4UXGMEB.jpg' , inCart: 0, precio: 51650, stock: 62},
    {nombre: 'NVIDIA RTX 2060', categoria: 'placas', id: 'gtx2060', img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_NVIDIA/2643_B4TL1E4D7T.jpg', inCart: 0, precio: 151850, stock: 4},
    {nombre: 'MSI RADEON RX 6600', categoria: 'placas' , id: 'rx6600' , img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_RADEON/3081_JSIG9ME60O.jpg', inCart: 0, precio: 56600, stock:6},
    {nombre: 'NVIDIA GTX 1660', categoria: 'placas', id: 'gtx1660', img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_NVIDIA/3074_VHR7KONKLU.jpg' , inCart: 0, precio: 66900 , stock: 3},
    {nombre: 'NVIDIA RTX 3090', categoria:'placas' , id: 'rtx3090', img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_NVIDIA/2640_0G2JGQ8HCA.jpg', inCart: 0, precio: 229000, stock: 3},
    {nombre: 'NVIDIA RTX 3080', categoria:'placas', id: 'rtx3080', img: 'https://www.logg.com.ar/static/photos/PLACA_DE_VIDEO_NVIDIA/2380_QCUKAEQ9AQ.jpg', inCart: 0, precio: 200000, stock: 1},
  ]

  const db = firestore;
  const collection = db.collection('items')

  const query = (i) => {
      collection.add(i).then((docRef) => {
          console.log('se agregó' + docRef.nombre)})
      }

const operacion = () => {for (const i of items) {
  query(i)
}}
*/
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
