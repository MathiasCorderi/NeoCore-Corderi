import React, {useContext, useState} from 'react';
import { CartContext } from './CartContextProvider';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import './styles/Cart.css'
import Form from './Form';

const Cart = () => {

    const {cart, setCart, limpiarCart, total, limpiarItem, setProductos} = useContext(CartContext);
    
    const [hayForm, setHayForm] = useState(false)
    const [token, setToken] = useState(false)
   

    const limpiarCart2 = () => limpiarCart(cart, setCart)
    const limpiarItem2 = (e) => limpiarItem(e.target, cart, setCart)
    

    
       
        const db = firestore;
        const collection = db.collection('compras')

             const enviarForm = (e) => {
                e.preventDefault()
               
                let info = {
                    nombre: document.getElementById('nombre').value,
                    email: document.getElementById('email').value,
                    telefono: document.getElementById('telefono').value,
                    direccion: document.getElementById('direccion').value,
                    compra: cart,
                    total: total
                }
            
                collection.add(info).then((docRef) => {
                    setToken(docRef.id)})

                setHayForm('sold')
                setCart([])
                setProductos(0)

            }
            
    const abrirForm = () => {
        setHayForm(true)
    }

    const cerrarForm = () => {
        setHayForm(false)
    }
  
  
if (cart.length > 0) {

    return (
        <div className='row'>
           {cart.map( p =>
            <CartItem nombre={p.nombre} inCart={p.inCart} total={p.precio * p.inCart} id={p.id} limpiar={limpiarItem2}/>)}
            <h3 className='mx-3'>Total: <span className='total'>${total}</span></h3>
            <div className='botones d-flex justify-content-between'>
            <button className='btn btn-danger' onClick={limpiarCart2}>Limpiar el carrito</button> 
            <button className='btn btn-danger' onClick={abrirForm}>Comprar!</button>
            </div>
            {hayForm == true ? <Form enviarForm={enviarForm} cerrarForm={cerrarForm}/> : null}
        </div>
        
    )}

 else if (hayForm === 'sold') {
    
        return (
      
      token !== false ? <div className='cartelToken'><h2>Este es su Token: </h2><br/><h3>{token}</h3> </div> : <div className='cartelToken'><h2>Estamos procesando su compra...</h2></div> 
       
         )


} else {

       return   ( 
                <div className='cartelToken'>
                    <h2>Tu carrito está vacío!</h2>
                    <br/>
                    <Link to ='/'><button className='btn btn-danger bg-purple'>	← Volver a la tienda</button></Link>
                </div>
       )}}


export default Cart;
