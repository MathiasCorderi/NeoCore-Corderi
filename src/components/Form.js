import React, {useState, useContext} from 'react';
import './styles/Form.css'
import { CartContext } from './CartContextProvider';

const Form = ({enviarForm}) => {







    return (
        <div className='d-flex justify-content-center'>
        
        <div className="text-white col-12 col-md-4 p-5 rounded-0 bg-purple">
        <button className='x'>X</button>
        <form>
         <div className="mb-3">
             <label for="name" className="form-label">Nombre y Apellido</label>
             <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />

         </div>
         <div className="text-white"/>
             <div className="mb-3">
                 <label for="email" className="form-label">Correo Electrónico</label>
                 <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>

             </div>





             <div className="mb-3">
                 <label for="telefono" className="form-label">Número Telefónico</label>
                 <input type="number" className="form-control" id="telefono" aria-describedby="emailHelp"/>

             </div>


             <div className="mb-3">
                 <label for="motivo" className="form-label">Dirección del domicilio</label>
                 <input type="text" className="form-control" id="direccion" aria-describedby="emailHelp"/>

             </div>
             <button type="submit" className="btn btn-outline-danger" onClick={enviarForm}>Enviar</button>
     </form>
 </div>
</div>


    );
}

export default Form;
