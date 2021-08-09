import React from 'react';

const itemDetail = (p) => {
  
    return (
        <div>
            <h2>{p.detalle.nombre}</h2>
            <p>{p.detalle.precio}</p>
        </div>
    );
}

export default itemDetail;
