import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {

  const onAdd = (count) => {
    console.log(count)
  }

  return  <div>
    <NavBar /> 
    <ItemListContainer />
    <ItemDetailContainer />
    </div>;
   
}

export default App;
