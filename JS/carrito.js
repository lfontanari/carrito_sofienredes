// genero el carrito como lista de productos vacio 
const precioMax = 99999999;


// Función para validar un campo de precio
function validarPrecio(precio) {
  // Verificar si el campo está vacío
  if (precio.trim() === '') {
    return false;
  }

  // Verificar si el precio es un número válido
  if (isNaN(precio)) {
    return false;
  }

  // Verificar si el precio es mayor o igual a cero
  if (parseFloat(precio) < 0) {
    return false;
  }


  return true;
}

// Cargar productos
function cargarProductos(tope) {

  for(let i = 0; i <= tope ; i++) {
    let respuesta = prompt("Quiere cargar un Producto? SI / NO :");
    respuesta = respuesta.toUpperCase();
    
        if(respuesta == "SI") {
             
            let nombreProducto = prompt("ingrese nombre producto:");
            let precioProducto = prompt("ingrese precio del producto:");
            
            while (validarPrecio(precioProducto)==false) {
                alert("Introduce un precio valido, mayor a cero por favor");
                precioProducto = prompt("ingrese precio del producto:");
            }
            // Verificar que el precio no exceda del valor maximo para los productos
            if (precioProducto > precioMax) {
              alert ("El valor ingresado $ "+ precioProducto + " supera el maximo permitido $ "+ precioMax + " para precios de productos");
              
            } else {
            
              alert("El producto " + nombreProducto +" fue agregado, su precio es: " +precioProducto);

            }

        }else if(respuesta == "NO") {
            tope=-1;
        }else {
            alert("Ingrese SI o NO");
            i = i - 1;
            
        }
  
    }

}

cargarProductos(3);

