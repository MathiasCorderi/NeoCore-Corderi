import React, {useState} from 'react';
import './styles/Form.css'


const Form = ({enviarForm, cerrarForm})=> {

    const [error, setError] = useState(false)


    const validarForm = (e) => {

        e.preventDefault()
    
        const nombre = document.getElementById('nombre')
        const email = document.getElementById('email')
        const telefono = document.getElementById('telefono')
        const direccion = document.getElementById('direccion')

        
     
        if (nombre.value !== '' && email.value !== '' && telefono.value !== '' && direccion.value !== '') {
          enviarForm()
       }

       else {
           
        setError('Todos los datos deben estar completos!')

        }

       

        



        
    }




    return (
        <div className='d-flex justify-content-center form-container'>
        
        <div className='row'>
        <div className="text-white col-12 rounded-0 bg-purple pb-3">
        <button className='x btn btn-danger' onClick={cerrarForm}>X</button>
        {error !== false ? <p>Todos los campos deben estar completos!</p> : null}
        <form>
         <div className="mb-3">
             <label for="name" className="form-label">Nombre y Apellido</label>
             <input type="text" className="form-control" id="nombre"  required />

         </div>
         <div className="text-white"/>
             <div className="mb-3">
                 <label for="email" className="form-label">Correo Electrónico</label>
                 <input type="email" className="form-control" id="email"  required/>

             </div>

             <div className="mb-3">
                 <label for="telefono" className="form-label">Número Telefónico</label>
                 <input type="number" className="form-control" id="telefono"  required/>

             </div>


             <div className="mb-3">
                 <label for="motivo" className="form-label">Dirección del domicilio</label>
                 <input type="tel" className="form-control" id="direccion" required/>

             </div>
             <button type="submit" className="btn btn-outline-danger enviar" onClick={validarForm}>Enviar</button>
     </form>
 </div></div>
</div>


    );
}

export default Form;
