import React from 'react';
import Item from './Item';

const ItemList = ({prod}) => {
   
    return (

        <div className='row'>
        {prod.map( p =>
        <Item producto={p}/>
        )}
        </div>
    );
}

export default ItemList;
