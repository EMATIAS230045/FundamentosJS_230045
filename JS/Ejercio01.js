//comentarios de una sola linea
/*comentarios multi linea*/

//const { warn } = require("vue");

//Ejercio 1 Declaracion de Variables
var miapellido;
var miNombre = "MATIAS TSU";
var edad = 18;



//El objeto nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funciono metodo

//para saber el tipo de dato que tiene una variable o constante podemos utilizar la 

console.warn("----celavvvde variable usuando var");
console.log("Intentando leer variable",miNombre, miapellido);
miapellido = "Granillo Mejia"
console.log("Ya vambas fueron inilializada vuelvw intentar leerlas",miNombre, miapellido);

console.warn("Dclaracion de variables del tipo constante: cost")
const miuniversiad ="UT Xicotepec";
const mimatricula=230045;
console.log("hola ", miNombre," ",miapellido,"se que estudias actualmente en: ",
miuniversiad,"y tu matricula es ",mimatricula, "ademas tienes una edad de: ", edad);
console.log("Analizando los datos puedo decir: ")
console.log("miNombre es un dato de tipo: ", typeof(miNombre))
console.log("miapellido es un dato de tipo: ", typeof(miapellido))
console.log("miunivercidad es un dato de tipo: ", typeof(miuniversiad))
console.log("mimatricula es un dato de tipo: ", typeof(mimatricula))
console.log("edad es un dato de tipo: ", typeof(edad))

//c) LET
let miFechaNacimiento = "21/12/05"
let miColorFavorito;

console.warn("--- Declaracion de variable Locales usando: LET")
console.warn("Genial, te voy conociendo mejor, ahora se que tu naciste el: ",
miFechaNacimiento, "y tu color favorito es: mmmmmmmmmmmmm dejame pensar...... ")
miColorFavorito = "Naranja";
console.log(`Creo que es ${miColorFavorito}, le atine?`)// La Manera de mazclar textos fijos co0n el valor actual de las variables se les conoce como: interpretacion deben iniciar y finilizar on un backtic -tilde inversa
console.log("micolorfavorito es un dato de tipo: ", typeof(miColorFavorito))
console.log("mifechaNacimiento es un dato de tipo: ", typeof(miFechaNacimiento))

