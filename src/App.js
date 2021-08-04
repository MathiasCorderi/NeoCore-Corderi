import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const onAdd = (count) => {
    console.log(count)
  }

  return  <div>
    <NavBar /> 
    <ItemListContainer />
    <ItemCount stock={5} initial={1} onAdd={onAdd} />
    
    </div>;
   
}

export default App;
