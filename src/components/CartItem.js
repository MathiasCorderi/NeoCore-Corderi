import React from "react";

const CartItem = ({ nombre, inCart, total, id, limpiar }) => {
  return (
   
   
   <div className="row">
      <div className="row bg-purple detalles row d-flex justify-content-between">
        <div className="col-4 ">
          <h2>{nombre}<span> ({inCart})</span></h2>
        </div>
        
        <div className="col-4 d-flex justify-content-end">
          <button className="btn btn-danger" onClick={limpiar} id={id}>Borrar item</button>
        </div>
      </div>

      <div className="detalles row">
        <p className="total">${total}</p>
      </div>
    </div>
  );
};

export default CartItem;
