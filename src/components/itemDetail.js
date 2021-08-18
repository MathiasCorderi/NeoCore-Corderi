import React from 'react';
import ItemCount from './itemCount'
import { useState } from 'react';




const ItemDetail = ({detalle}) => {
    
    
   return (
      
       <div>        
            <ItemCount stock={detalle.stock} initial={1}  producto={detalle}/>
        </div>
    );
}

export default ItemDetail;
