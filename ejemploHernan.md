1) usario aterriza en la web

- se muestran los productos mas interesantes del momento
- se puede clicar en un producto para ir al detalle
- se puede clicar al carrito para acceder a él
- se puede realizar una busqueda, filtrar por distintos conceptos (categorias...)
- se puede seleccionar cantidad de un producto (previo a añadir al carrito)
- se puede añadir producto al carrito
- se puede logear o registrar
- se puede ir al perfil del usuario si está registrado y ha hecho login


2) usuario realiza una busqueda

- se muestran los resultados de la busqueda
- se pueden realizar las mismas acciones que en la pagina inicial

3) usuario clica en ver un producto

- se abre una pestaña nueva
- se muestra la descripción del producto y fotos
- se puede añadir al carrito
- se puede seleccionar cantidad
- se puede acceder al carrito
- se puede ver el nombre del vendedor y hacer clic en él para ir al detalle del vendedor

4) usuario clica en ver detalle del vendedor

- se abre una pestaña nueva
- se muestra la descripción del vendedor (nombre, fotos, etc)
- se muestran los productos del vendedor listados
- se pueden realizar las mismas acciones que en la pagina inicial

5) usuario clica en el carrito

- se abre un popup
- se muestra el listado de productos añadidos
- se puede cambiar la cantidad de un producto, incluso eliminarlo (si selecciona cantidad 0, o bien cliclando sobre eleminar)
- se puede clicar en pagar y comenzar el proceso de pago
- se puede clicar en cerrar el popup

6) usuario clica en paga

- se abre pestaña nueva
- se muestran opciones de pago (paypal, tarjeta, bitcoin....)
- si usuario registrado, se muestra su información (nombre, dirección, ...)
- si usuario no registrado, se muestran campos para introducir datos de usuario (nombre, dirección, ...)
- se puede clicar en pagar para finalizar el proceso de compra

7) usuario clica en pagar

- se guarda el pedido en base de datos, asociado al usuario si está registrado, en caso contrario, se guarda la información del pagador no registrado
- se envia un mail de confirmación al usuario con el número de pedido y el listado de los productos adquiridos
- se muestra un resultado de confirmación de compra con un número de pedido
- se puede clicar en volver al inicio
- se muestra carrito vacío

8) usuario clica en ver perfil

- se abre un popup (o se abre pestaña nueva, lo decide Hernan)
- se muestra la información del usuario (foto, nombre, direccion)
- se muestra historial de pedidos realizados (si da tiempo: mostrar estado de los pedidos)
- se puede clicar en un pedido para ver el listado de sus productos

9) usuario clica en ver listado de productos de un pedido

- se abre un area en el popup de perfil (ej: acordion)
- se muestra el listado de productos
- se puede clicar en un producto para ir al detalle
- se puede clicar cerrar el area

10) ...

TODO describir todos los casos de uso posibles