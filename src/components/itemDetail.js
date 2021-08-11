import React from 'react';

const ItemDetail = ({detalle}) => {

    
    
    

   return (
      
       
       <div>        
           <h2>{detalle.nombre}</h2>
           <p>${detalle.precio}</p>

        </div>
    );
}

export default ItemDetail;
