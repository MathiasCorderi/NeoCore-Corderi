import React from 'react';
import Item from './Item';

const ItemList = (props) => {
   
   
    return (
        <div>
             {props.prod.map( p =>
            <Item producto={p}/>
             )}
        </div>
    );
}

export default ItemList;
