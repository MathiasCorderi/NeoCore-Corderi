import React, {useState, useEffect} from 'react';


export const CartContext = React.createContext();


export const CartProvider = (props) => {
  
  const [cart, setCart] = useState([]);
  
  const addToCart = (producto, count, cart) => {

    var carritoActual = cart
    var bandera = true

    if (carritoActual.length == 0) {
        producto.inCart = count
        carritoActual.push(producto)
    } else {
        for (const i of carritoActual) {
            if (i.nombre == producto.nombre){
                i.inCart = (i.inCart + count);
                bandera = false;
            }      
        } 
        if (bandera == true) {
                producto.inCart = producto.inCart + count
                carritoActual.push(producto)
        }
    }
    
    console.log(carritoActual)
    setCart(carritoActual)
}

const limpiarCart = (cart, setCart) => {
  
    setCart([])
  
 
  console.log(cart)
}


  return (
    <CartContext.Provider value={{cart, setCart, addToCart, limpiarCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

