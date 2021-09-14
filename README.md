# Acerca de Neocore
Neocore es un proyecto de React.js, su objetivo es simular un ecommerce en donde uno pueda comprar artículos, simular un carrito de compras y enviar el pedido a la base de datos de Firestore por medio de un form.

---

##Convenciones
Todos los componentes son del tipo funcional y usan una nomenclatura con PascalCase, se encuentran dentro de una carpeta llamada components (a excepción de App y la configuración de firebase), y tienen sus respectivos estilos en otro archivo css del mismo nombre que se encuentra en una carpeta llamada Style (App tiene su archivo dentro de src para que compartan carpeta). El resto de funciones y variables tienen su nomenclatura con camelCase.

---
##Liberías

####Bootstrap 5.0.2
Dado que el propósito del proyecto es poder crear una aplicación funcional en React.Js y no su diseño en sí, me ayudé de bootstrap para facilitar el maquetado y poder centrarme en el desarrollo adecuado de los componentes y funcionalidades.

---

##Principales componentes
####ItemListContainer, ItemList e Item
Son los componentes encargados de crear el catálogo, ILC se encarga de realizar el pedido, mientras que IL realiza la lista de Items, dependiendo de en qué categoría nos encontremos el ILC realizará un llamado u otro a la base de datos para traer sólo los artículos que corresponden a la sección en la que nos encontramos.

####ItemDetailContainer, ItemDetail, Item y Count
Estos componentes tienen la tarea de mostrar el detalle del producto y permitirnos añadirlos al carro, IDC se encarga de realizar un único pedido a la base de datos por medio de un .doc, mientras que ItemDetail reutiliza el componente Item y por medio de condicionales le cambia los botones de compra y detalle para mostrar un contador que nos permite sumar los artículos que queramos y agregarlos al carro. Dicho contador cuenta con una función para calcular el stock.

####Cart, CartItem y CartContext
Cart será nuestra vista del carrito, esta se compone de un CartItem por cada item en el carro, donde cada uno muestra su cantidad de productos y su individual, y abajo muestra el total final a pagar con un botón que activa un form en formato PopUp donde uno puede cargar sus datos para enviarlos a la base de datos. Todas las funciones del carrito están alojadas en el CartContext

####Navbar
La barra de navegación que cuenta con el nombre del proyecto, el cual nos redirige a la home, un menú desplegable de categorías, que nos permite acceder a las categorías que querramos filtrar y un widget que nos lleva al carrito y nos muestra cuantos productos tenemos dentro de el, el cual por medio de un condicional, sólo se muestra cuando empecemos a cargar el mismo.

---
##Cómo levantar la aplicación
Necesitarás tener Node >= 10.16 y npm >= 5.6 instalados en tu máquina. Para levantar el proyecto proyecto ejecuta:

>npx create-react-app neocore
cd neocore
npm start