// TIpos de datos en js

// 1. Undefined
console.warn("--- Tipos de datos de las variables de JavaScript")
let cliente;
console.log(`El cliente es : ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(cliente)}`);

cliente = "Matias Granillo"
console.log(`El cliente es : ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(cliente)}`);
cliente = 192227
console.log(`El cliente es : ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(cliente)}`);
// Undefiend es el tipo de dato que por defecto se asigna a las variables no inicializamos o no declaramos

// 2, boolean 
console.warn("--- Tipo de dato Boolean (Boolean - True/False)---")
let espremium = "true";
console.log(`¿Es el cliente premium? : ${espremium}`);
console.log(`El tipo de dato de espremium : ${typeof(espremium)}`);
espremium = "No lo se.....";
console.log(`¿Es el cliente premium? : ${espremium}`);
console.log(`El tipo de dato de espremium : ${typeof(espremium)}`);
espremium = false;
console.log(`¿Es el cliente premium? : ${espremium}`);
console.log(`El tipo de dato de espremium : ${typeof(espremium)}`);
if(espremium)
console.log(`el cliente pago por usar el servicio`);
else
console.log("el cliente resive el servicio gratuito")

// 3. number
var cantidad = 8;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion ;
console.warn("--- Tipo de Dato - NUMBER (Numeros, Positivos Negativos, decimales, Flotante ---)");
console.log(`Tu saldo al dia de hoy es de ; ${saldo_cuenta}, (tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}, (tipo de dato = ${typeof(costo_producto)})`);
cantidad=8;
console.log(`has elegido comprar: ${cantidad} de productos`)
console.log(`El importe total es la compra total de la compra es ${cantidad*costo_producto}`)
saldo_cuenta = saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo de cuenta es de ${saldo_cuenta}`);
monto_transaccion= 1500;
saldo_cuenta = saldo_cuenta+monto_transaccion;
console.log(`Tu monto de transaccion ${monto_transaccion} ha sido resivido tu nuevo saldo es de ${saldo_cuenta}`)
// string o cadenas de texto

const alumno = "Erick Matias Granillo"
let producto1 = 'Monitor 20 pulgadas'
//const numero = "30"
//const numero2 = 30
console.warn("--- Tipo de dato - String (cadena o de texto)")

console.log (`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof{alumno}} `);
console.log (`El nombre del Producto es: ${producto1}, que es un tipo de dato ${typeof{producto1}} `);
console.log (`Mas adelante podremos transformar el contenido de los strings usando funciones especificas para convertirlos en mayusculas ${alumno} => ${alumno.toUpperCase()} `);
//console.log(typeof numero)
//console.log(typeof numero2)

//BigInit
console.warn("--- Tipo de dato - BigInit (Numeros Grandes)")
const NumeroGrande = Number(1234567890)
const NumeroGrande2 = Number(12345678901234567890)
let NumeroGrande3 = Number(12345678901234567890123456789)
let NumeroGrande4 = Number(123456789012345678901234567891234567890)

console.log(`El primer experimento de un numero grande es: ${NumeroGrande}, que si es soportado por por number 
y su tipo de dato es ${typeof(NumeroGrande)}`)
console.log(`El primer experimento de un numero grande es: ${NumeroGrande2}, que si es soportado por por number 
y su tipo de dato es ${typeof(NumeroGrande2)}`)
console.log(`El primer experimento de un numero grande es: ${NumeroGrande3}, que no es soportado por por number y pierde precion
y su tipo de dato es ${typeof(NumeroGrande3)}`)
console.log(`El primer experimento de un numero grande es: ${NumeroGrande4}, que no es soportado por por number y pierde precion
y su tipo de dato es ${typeof(NumeroGrande4)}`) 
//para definir un numero el tipo de dato big int debemos invocar la funcion big int un la letra "n" al final del numero en la asignacion del valor
console.log("Declaramos los valores numeros numericos de gran tamaño")
NumeroGrande3 =  BigInt(12345678901234567890123456789);
NumeroGrande4 = 123456789012345678901234567890123456789n;
//estas son otras formas de declarar numeros de tipo big int en JS.
// Hay que considerar que los tipos de datos declarados como bigint no son operables con numeros tipo number
let numero =238
console.log(`El resultado de la opercion de: numerogrande4/ numero es = a : ${NumeroGrande4/BigInt(numero)} `)
//const numerogrande = BigInt(918298193891887139831091038173813)
//console.log(typeof numerogrande)

// const numero = 10
// const numero2 = 20
//console.log( numero + Number(numerogrande))

// const numero = "30"
// const numero2 = 30

// console.log(typeof String(numero2))
// console.log(typeof Number(numero))

//symbol
console.warn("--- Tipo de dato - Symbol ")
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol(2);

// prueba de comparacion 1
if(numero1 == numero2)
    // 2 iguales (==) se compara el valor de las variables sin comparar el tipo de dato
    console.log(`se han comparado los valors de numero1 y numero2, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero2, confirmando que no tienen el mismo valor")

//Prueba de comparacion 2 ¿es 2 = "2"?
console.log("Prueba de comparacion 2: ¿es 2= '2'?")
if(numero1 == numero3)
    // 2 iguales (==) se compara el valor de las variables sin comparar el tipo de dato
    console.log(`se han comparado los valors de numero1 y numero3, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero3, confirmando que no tienen el mismo valor")
//Prueba de comparacion 3
console.log("Prueba de comparacion 3: ¿es 2= '2'? triple ===")
if(numero1 === numero3)
    // 3 iguales (===) se compara el valor de las variables y comparando el tipo de dato
    console.log(`se han comparado los valors de numero1 y numero3, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero3, confirmando que no tienen el mismo valor")

//Prueba de comparacion 4
console.log("Prueba de comparacion 4:")
if(numero1 == numero4)
    // 2 iguales (==) se compara el valor de las variables sin comparar el tipo de dato
    console.log(`se han comparado los valors de numero1 y numero34, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero4, confirmando que no tienen el mismo valor")

//Prueba de comparacion 5
console.log("Prueba de comparacion 5:")
if(numero1 === numero4)
    // 3 iguales (===) se compara el valor de las variables y comparando el tipo de dato
    console.log(`se han comparado los valors de numero1 y numero4, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero4, confirmando que no tienen el mismo valor")

//Prueba de comparacion 6: ¿es 2 = Symbol(2)?
console.log("Prueba de comparacion 6: ¿es 2 = Symbol(2)")
if(numero1 === numero5)
    // 3 iguales (===) se compara el valor de las variables y comparando el tipo de dato
//los datos de tipo de dato symbol hace unico la a variable y a su valor
    console.log(`se han comparado los valors de numero1 y numero5, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero5, confirmando que no tienen el mismo valor")

//Prueba de comparacion 7: ¿es symbol(2) = Symbol(\"2\")?
console.log("Prueba de comparacion 7: ¿es symbol(2) = Symbol(\"2\")?")
if(numero1 === numero7)
    // 3 iguales (===) se compara el valor de las variables y comparando el tipo de dato
//los datos de tipo de dato symbol hace unico la a variable y a su valor
    console.log(`se han comparado los valors de numero1 y numero7, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero1 y numero7, confirmando que no tienen el mismo valor")

//Prueba de comparacion 8: ¿es symbol(2) = Symbol(2)?
console.log("Prueba de comparacion 7: ¿es symbol(2) = Symbol(2)?")
if(numero5 === numero9)
    // 3 iguales (===) se compara el valor de las variables y comparando el tipo de dato
//los datos de tipo de dato symbol hace unico la a variable y a su valor
    console.log(`se han comparado los valors de numero5 y numero9, confirmando que tienen el mismo valor`)
else 
console.log("se han comparado los valors de numero5 y numero9, confirmando que no tienen el mismo valor")

// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)

// console.log( primerSymbol == segundoSymbol )
// console.log(primerSymbol.valueOf() )
// console.log(segundoSymbol.valueOf() )

//null
console.warn("--- Tipo de dato - Function (funcion)")

console.warn("--- Tipo de dato - Null (Nulo)")
// El tipo dedato nulo se le asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio , bajo su consentimiento, a diferenciade undefiend
// que es un valor desconocido asignado por default por JS
let nombredeusario = null
let passusario  = null
let generodeusuario =null
let estatussentimental = null
let fecha_ultimopost;

//supongamos que estamosprogramando una red social, tipo facebok en la que parate de  
//si el usurio no ha iniciado secion en el dispositivo movil o en el
//En la HU (Historia de usuario ) 
//supongamos que su nombre de usuario es Erick Matias Granillo Mejia con el correo de 230045@utxicotepec.deu.mx 

nombredeusario = "230045@utxicotepec.edu.mx";
passusario = "pass123";

//en este momento de ejucucion del sistema no sabemos su genero, ni su estatus de relacion sentimental.
0
console.log(`El usuario `)

//lo que prosige es que l sistema cortejara los datos ingrasados con la base de
//datos y en el caso que los datos sean correcto comenzara la secion le la plataforma para actualizar los valores
generodeusuario="M"
estatussentimental = null 
console.log(`El usario  ${nombredeusario} esta intentando logearse con una con una contraseña de  : ${passusario}, se ha logrado de exitosamente, al tener acesso a su informacion de perfil podemos 
deducir que es del genero ${generodeusuario} y su estatus de relacion es de: ${estatussentimental} y su ultima publicacion la realizo el: ${fecha_ultimopost}`);

// const descuento = null
// console.log(typ