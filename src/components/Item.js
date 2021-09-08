import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


   
const Item = ({producto, detail, addCartNumber}) => {



    return (
      
        <div className= {detail ? "card text-white bg-black col-8 col-md-8 col-lg-6 mb-3 bg-black" : "card text-white bg-black col-8 col-md-4 col-lg-2 mb-3 bg-black"}>
          <img style={detail ? {height: '500px'} : null} className="card-img-top" src={producto.img} />
          <div className="card-body">
            <h3 className="card-title">{producto.nombre}</h3>
            <p className="card-text price">${producto.precio}</p>
            <div className='align-bottom'>
           {detail ? null : <button className="btn btn-danger disabled mx-1">Comprar</button>}
          {detail ? <ItemCount stock={producto.stock} initial= {1} addCartNumber={addCartNumber}/> : <Link to={'/' + producto.categoria + '/' + producto.id} style={{ textDecoration: 'none' }} className="btn btn-danger mx-1">Detalle</Link>}
            </div>
          </div>
        </div>
      
    );
}

export default Item;
