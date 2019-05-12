// Tipos de Datos en Java script
//Javascript en lo sifucientemente inteligente para
//direfenciar los tipod de datos sin la necesidad de especificar

//numerico- float
var edad = 19;

// String 
var nombre = "Carlos";
var apellido = "Gonzalez";
var texto = "Los mejores videos son de \"FalconMasters\" ";


document.write(nombre + " " + apellido + "<br>");

document.write(texto + "<br>");

//Areglos
var amigos = ["dani", "ivan", "Lalo"];
document.write(amigos[2]);

//objetos
var objeto = {
    color: "black",
    size: 12
}

//Boleano
var bol = true;

// indefinido
//sin definir tipo de valor

var sinValor;

document.write(sinValor);


//Null
//No se puede borrar el valor pero si cambiarlo
var num2 = 10;
var num2 = null; //cambia el valor a null

//NaN
//Valores invalidos por que no se puede nultiplicar
//cadena por numero, NaN nos indica este tipo de error;

var texto2 = "Hola como estas"
document.write(texto2 * 2);