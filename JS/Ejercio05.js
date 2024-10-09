//repaso de ciclo y sentencias de control
//Estilizacion de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(191,255,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 07: Arreglos en Java Script")
console.log("%c1.- Codiciones SI/Entonces... (IF)", style_console);
//Le indica al program que hacer o que no hacer en base a una pregunta logica de verdaero o falso

let fechaActual= new Date();
/* let fecha actual = new date("2025/06/05");*/
console.log(`Hola, LA FECH DE HOY ES : ${fechaActual.toString()}`);

//y si la necesitamos de forma local?

const fechalocalMX = fechaActual.toLocaleString('es-MX',
    {
    weekday: 'long',
    year: 'numeric',
    mouth: 'long',
    hour: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false

});
console.log(`en formato local (mexico): ${fechalocalMX}`);

//si es antes de las doce saluda con buenos dias
if(fechaActual.getHours()<=12)
    console.log(`Buenos dias, hoy es: ${fechalocalMX}`);
//Existe un extensor de la sentencia if(Si)que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año.`);
else
console.log(`Esta en la segunda mitad del año.`);

//que pasa si la validacion tiene varias operaciones

const anio = fechaActual.getFullYear;

let inicioprimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInverno = new Date(anio, 11,21);
let estacion;
let horarioverano = false;

if(fechaActual >= inicioprimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en Primavera...")
    console.log("Inicia la floracion de mucha plantas...")
    console.log("Los dias son mas largos y las noches mas cortas..")
    console.log("Muchos animales despiertan en la hibernacion... ")
    estacion="Primavera"
    horarioverano=true;
}
else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en otoño...")
    console.log("en esta estacion les sule cambiar epl follaje")
    console.log("se registran temperaturas mas templadas")
    console.log("Los animales comienzan la recoleccion de alimento y preparan  sus espacis para la hibernacion, incluso algunas aves migran.")
    estacion="verano"
    horarioverano=true;
}
else{

console.log("Estamos en Invierno...")
console.log("en esta estacion los dias son mas cortos y losa noches mas largas")
console.log("en algunas regiones sule nevar")
console.log("Dado las temperaturas, se recomienda abrigarse ")
estacion="Invierno"
horarioverano=false;
}

console.log("%c2.- Codiciones SI/Entonces... ( Validacion?cumple:no_cumple)", style_console);
//En Java Script exista una operacion simplificada que valida esi una condicion cumplee o no y que hacer en cada caso

const edadpersona = 18;
const mayoriaedadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "Eres mayor de edad.": "No eres mayores de edad."
console.log("Evaluando la mayoria de edad de unapersona...")
console.log(evaluarMayoriaEdad(edadpersona));

/** si embargo tenemos que considarar que la mayorias de edad vara de cada pais
 * por cuestiones legales, por lo que dabemos considerar un  segundo parametro en la evaluacion.*/

evaluarMayoriaEdad = (edad,pais) =>
(edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad`;

console.log("Evaluado la mayoria de edad de una persona en mexico...")
console.log(evaluarMayoriaEdad(edadpersona, "MX"));

console.log("Evaluado la mayoria de edad de una persona Estados Unidos...")
console.log(evaluarMayoriaEdad(edadpersona, "US"));

console.log("%c3.- SWITCH -CASE", style_console);

