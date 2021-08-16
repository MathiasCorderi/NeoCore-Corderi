import React from 'react';
import ItemCount from './itemCount'
import { useState } from 'react';

const ItemDetail = ({detalle}) => {
    const [cart, setcart] = useState(false)

    
    const onAdd = (count) => {
        setcart(count)
        console.log(cart)
    }
    

   return (
      
       
       <div>        
            <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd} cart={cart}/>
        </div>
    );
}

export default ItemDetail;
