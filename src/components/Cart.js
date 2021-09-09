import React, {useContext} from 'react';
import { CartContext } from './CartContextProvider';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import './styles/Cart.css'
import Form from './Form';

const Cart = () => {

    const {cart, setCart, limpiarCart, total, limpiarItem} = useContext(CartContext);

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
                    console.log("Este es tu ID de compra: ", docRef.id)})
            }
            
                
  
  
    if (cart.length > 0) {
    return (
        <div className='row'>
           {cart.map( p =>
            <CartItem nombre={p.nombre} inCart={p.inCart} total={p.precio * p.inCart} id={p.id} limpiar={limpiarItem2}/>)}
            <h3 className='mx-3'>Total: <span className='total'>${total}</span></h3>
            <div className='botones d-flex justify-content-between'>
            <button className='btn btn-danger' onClick={limpiarCart2}>Limpiar el carrito</button> 
            <button className='btn btn-danger'>Comprar!</button>
            </div>
            <Form enviarForm={enviarForm}/>
        </div>
        
    );

} else {
       return   (
                
                <Form/>
        
       )}
}

export default Cart;
