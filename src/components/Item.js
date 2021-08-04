import React from 'react';
import { render } from 'react-dom';
 

   
const Item = () => {
   
    const productos = [
        {nombre: 'Placa de video 1', precio: 5000},
        {nombre: 'Placa de video 2', precio: 8000}
    ];
    
    const operacion = new Promise ((resolver) => {
        setTimeout(() => {
            resolver([productos])
            
        }, 2000);
    })



    return (
        <div>
            {productos.map( p =>

            <div class="card text-white bg-black col-8 col-md-4
            col-lg-2 mb-3">
          <img class="card-img-top" src='https://www.hardware.com.br/filters:format:(jpeg)/@/static/wp/2021/02/09/computer-game-graphics-card-videocard-with-two-coolers-circuit-board.jpg' />
          <div class="card-body">
            <h3 class="card-title">{p.nombre}</h3>
            <p class="card-text price">${p.precio}</p>
            <a href="#" class="btn btn-danger mr-3">Comprar</a>
            <a href="#" class="btn btn-danger disabled py-1"><img class="btn-icon" src="../assets/cart-73-24.ico" />Añadir
              al
              carro</a>
          </div>
        </div>
            )}
        </div>
    );
}

export default Item;
