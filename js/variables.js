//var nombre = Carlos; 
var nombre;

nombre = prompt("Ingresa nombre");
edad = prompt("Ingresa edad");
//comentario en js
//edad = 29;
//alert(nombre);

//Escribe en el documento html
//document.write(nombre);
document.write(nombre + "<br>");
document.write(edad);
if (edad => 18) {
    document.write("<br>" + "Ya puedes votar");
}

//escribe en la consola al ver los elementos de la pagina
console.log(nombre);