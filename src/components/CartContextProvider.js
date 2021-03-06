import React, {useState} from 'react';


export const CartContext = React.createContext();


export const CartProvider = (props) => {
  
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState(0)
  const [idDetalle, setIdDetalle] = useState(false)


  const addToCart = (producto, count, cart) => {
 
    
    var carritoActual = cart
    var bandera = true

    if (carritoActual.length === 0) {
        producto.inCart = count
        carritoActual.push(producto)
        setTotal(producto.precio * producto.inCart)
        setProductos(count)
        
    } else {
        for (const i of carritoActual) {
            if (i.nombre === producto.nombre){
                i.inCart = (i.inCart + count);
                bandera = false;
                setTotal(total + (i.precio * count))
                setProductos(productos + count)
            }      
        } 
        if (bandera === true) {
                producto.inCart = producto.inCart + count
                carritoActual.push(producto)
                setTotal(total + (producto.precio * count))
                setProductos(productos + count)
        }
    }

    setCart(carritoActual)
  }
  
  

    


const limpiarCart = (cart, setCart) => {
  
    setCart([])
    setTotal(0)
    setProductos(0)
}

  const limpiarItem = (target, cart, setCart) => {
    
    var carritoActual = cart

    for (const i of carritoActual) {
        if (i.id === target.id) {
          carritoActual.splice(i, 1)
          setTotal(total - (i.precio * i.inCart))
          setProductos(productos - i.inCart)
        }
    }
    setCart(carritoActual)
  }





  return (
    <CartContext.Provider value={{cart, setCart, addToCart, limpiarCart, total, setTotal, limpiarItem, productos, idDetalle, setIdDetalle, setProductos}}>
      {props.children}
    </CartContext.Provider>
  )
}

