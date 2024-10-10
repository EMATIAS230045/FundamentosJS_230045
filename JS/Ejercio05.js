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



//let asignaturaGeneracion = (anioNacimiento)

console.log("Intentamos dividir el: 0/10, el resultado es:")
try{
    let result= 0/10; //
    console.log(result)
}
catch{
    console.log("Ocurrio un error"+error.messaje);
}
console.log("Intentamos dividir  10/0")
try{
    let result= 10/0; //
    console.log(result)
}
catch{
    console.log("Ocurrio un error"+error.messaje);
}
console.log("Intentamos dividir una variable a entre 10 pero la varaible no se define")
try{
    let a;
    let result= a/10; //
    console.log(result)
}
catch{
    console.log("Ocurrio un error"+error.messaje);
}
console.log("Ahora se intenta dividir un dato que vale 8 entre otro que vale 2")
try{
    let x=8, y=2, result= x/y;//
    console.log(result)
}
catch{
    console.log("Ocurrio un error"+error.messaje);
}
console.log("%c5.- control de coclos (BREAK/CONTINUE)", style_console);

console.log("Vamos a contar del 1 al 10...")
for(let i=0; i<11; i++){
    console.log(i)
}
console.log("Ahora si el numero llega a 7 pare")
for(let i=0; i<11; i++){
    if(i==7){
       break 
    }else
    console.log(i)
}
console.log("Ahora si el numero llega a 7 se lo salte y no haga nada")
for(let i=0; i<11; i++){
    if(i==7){
        continue
    }else
    console.log(i)
}

console.log("%c6.- Ciclo iterativo -(FOR)", style_console);

console.log("Los dias de la semana son en orden asedente son:")
let dias = ["Domingo", "Lunes ","Miercoles","Jueves ", "Viernes ", "Sabado" ]
for(let i=0; i<dias.length-1; i++){
    console.log(dias[i])
}
console.log("Los dias de la semana son en orden asedente son:")
let meses = ["Enero", "Febrero ","Marzo","Abril ", "Mayo ", "Junio", "Agosto","Septiembre","Octubre","Nobiembre","Diciembre" ]
for(let i=meses.length-1; i>=0; i--){
    console.log(meses[i]);
}

console.log("%c7.- Ciclo Condicionales -(WHILE)", style_console);

console.log("Los dias de la semana son en orden asedente son:")
let findesemana = false
let mensaje =" ";
let j =0;

while (j<dias.length){
    switch(j){
        case 0:
            findesemana= true
            mensaje= "Monmingo.. zzzzzz";
            break;
            case 1:
            findesemana= false
            mensaje= "san jueves a chambiear";
            break;
            case 2:
            findesemana= false
            mensaje= "segundo dia de chambear";
            break;
            case 3:
                findesemana= false
                mensaje= "ombligo de la semana";
                break;
            case 4:
            findesemana= false
            mensaje= "juuueeevvvebebesss";
              break;
            case 5:
                findesemana= false
                mensaje= "ultimo diaaaaa ";
                break;
            case 6:
            findesemana= true
            mensaje= "sabado de pelis";
            break;
 
        }
        console.log(mensaje)
j++
}

console.log("%c8.- Ciclo Condicionales, que se ejecutan al menos una vz -(DO WHILE)", style_console);

console.log("Los dias de la semana son en orden asedente son:")
let series = [
    "Episodio 1: avatar",
    "Episodio 2: el hoyo2",
    "Episodio 3: endgame",
    "Episodio 4 : blackspace",
    "Episodio 5: napoleon"
];
let indice = 0;
let continuarviendo= true;
do{
    console.log(`Reproduciendo ${series[indice]}`);
    indice++;
    if(indice<series.length){
        continuarviendo = confirm("¿Deseas continuar con la siguiente serie");//manda un mensaje de confirmacion a la
        //usuario para saber si desea continuar con un boolean

    }else{
        continuarviendo=false;
    }

}while(continuarviendo && indice < series.length);

console.log("Fin de la reproduccion") 

console.log("%c9.- ciclos para recorrrer elementos finitos  -(DO WHILE)", style_console);

let series2 = [
    {nombre:" hora de aventura", temporadas: "12", totalviews:"19M"},
    {nombre:" el hoyo 2", temporadas: "3", totalviews:"6.5M"},
    {nombre:" the boys", temporadas: "3", totalviews: "13M"},
    {nombre:" Black sPACES", temporadas: "5", totalviews: "12M"},
    {nombre:" NAPOLEON", temporadas: "5", totalviews:"3.2M"}
];

for(let serie of series2){
    console.log(`serie: ${serie.nombre},temporada: ${serie.temporadas}`);
}
try{
    console.log(`serie: ${serie.nombre},temporada: ${serie.temporadas}`);
}catch{
    console.log("Ocurrio un error");
}

console.log("%c10.- ciclos para recorrrerlas propiedades de elementos finitos  -(FOR.....IN)", style_console);

for(let i in series2){
    console.log(`serie ${parseInt(i)+1}:`);
    for(let propiedad in series2[i]){
        for(let propiedad in series2[i]){
            console.log(`${propiedad}: ${series2[i][propiedad]}`)};

    }
    console.log(".....................................")
}

let series3 = [];

series3.forEach(serie, index)=> {
let calif =(serie.reprociones / serie.viewrs).toFixed(2);

};