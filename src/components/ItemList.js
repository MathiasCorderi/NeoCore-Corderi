import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({prod}) => {
   
   console.log(prod)

    return (

        <div className='row'>
        {prod.map( p =>
        <Item key={p.id} producto={p}/>
        )}
        </div>
    );
}

export default ItemList;
