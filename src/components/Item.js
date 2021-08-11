import React from 'react';
import { Link } from 'react-router-dom';

   
const Item = (props) => {

    return (
      
        <div className="card text-white bg-black col-8 col-md-4
            col-lg-2 mb-3">
          <img className="card-img-top" src='https://www.hardware.com.br/filters:format:(jpeg)/@/static/wp/2021/02/09/computer-game-graphics-card-videocard-with-two-coolers-circuit-board.jpg' />
          <div className="card-body">
            <h3 className="card-title">{props.producto.nombre}</h3>
            <p className="card-text price">${props.producto.precio}</p>
            <a href="#" className="btn btn-danger mx-1">Comprar</a>
            <Link to={'/item/' + props.producto.id} style={{ textDecoration: 'none' }} className="btn btn-danger mx-1">Detalle</Link>
          </div>
        </div>
      
    );
}

export default Item;
