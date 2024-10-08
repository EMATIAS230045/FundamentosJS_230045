// Repaso de Arreglos

//Declaración de Variables de Estilo
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prácitca 06: Arreglos en Java Script")

//DECLARACIÓN DE UN ARREGLO
console.log("%c1.- Declaración de un Arreglo (Array)", style_console);
//Para declarar un arreglo (array) de datos en JavaScript basta con  agregar [], y dentro los datos que contendra el arreglo.
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
//Visualización de los elementos de un arreglo.
console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos.  siendo el límite inferior 0 y el superior tamaño -1 
console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El úlitmo mes del año es: ${mesesAnio[mesesAnio.length-1]}`)

// No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido.
console.log(`El mes del año en la posición -1 es:  ${mesesAnio[-1]}`)
console.log(`El treceavo mes del año en la posición es:  ${mesesAnio[12]}`)
console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)

//Al ser JavaScript un leguaje débilmente tipado podremos crear arreglos mixtos de tipos de Datos
console.log("Declarando un Arreglo Mixto")
const saludar =  function(nombre){return `Hola, ${nombre}!`}
let arregloMixto = ["String", 5,45.26,-200, -.16854, Symbol("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, {latidud: "20° 18' 0\" N" , longitud: "97° 58' 00\" W", altitud: 796}, saludar, null ]

//Mostramos el contenido del objeto
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[0] = ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`);
console.log(`El dato en la posicion[1] = ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`);
console.log(`El dato en la posicion[2] = ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`);
console.log(`El dato en la posicion[3] = ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`);
console.log(`El dato en la posicion[4] = ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`);
console.log(`El dato en la posicion[5] = ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`);
console.log(`El dato en la posicion[6] = ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`);
console.log(`El dato en la posicion[7] = ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`);
console.log(`El dato en la posicion[8] = ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`);
console.log(`El dato en la posicion[9] = ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`);
console.log(`El dato en la posicion[10] = ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`);
console.log(`El dato en la posicion[11] = ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`);
console.log(`El dato en la posicion[12] = ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`);

console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);
console.log("Declarando una matriz regular.")
//Una matriz es una estructura de datos multidensional (tabla) de n columnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
//esta es una matríz regular de 4 x 4
console.log(matriz)
console.table(matriz)
console.log("Declarando una matriz irregular.")

const matrizIrregular= [["Juan", "Pedro", "María", "Inés"],
[true,false,null],
[9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elemento en la posicion [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posicion [1][2]: ${matriz[1][2]}`)

// Accediendo a los valores de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elemento en la posicion [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemento en la posicion [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posicion [1][2] (¿Es María mayor de edad?): ${matrizIrregular[1]
[2]}`)

// Funciones y Métodos de Arreglos
// Los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un método sino una propiedad
console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methods or Array Functions", style_console);
console.log("¿Como saber cual es el tamaño de un arrego?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Qué pasa con los multidimensionales ?`)
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño de número de filas de la matriz, pero cómo saber el numero de columnas?")
console.log(`la matriz regular tiene un número de ${matriz[0].length}`)
console.log("Y para las irregulares?")
// Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas = matrizIrregular.length
for (let i = 0;i<numeroFilas; i++)
console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)


console.log("$c5.- Agregar un nuevo elemento a un arreglo (PUSH)",style_console);

let estudiantes = ["Matías", "Ciclalli", "diego", "derek","yazmin","adrian"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes)
console.log(`Agregamos a un nuevo estudiante llamado: brisa`)
estudiantes.push("brisa")
console.log(`Después de agregarlo los elementos del arreglo son: `)
console.table(estudiantes)

console.log("¿Qué pasa con los Mixtos?")
console.log("El arregloMixto actualmente tiene los siguientes elementos: ")
console.table(arregloMixto)
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento")
arregloMixto.push("Hola");
console.log("Y también agregamos el numero -3218817875487448415.23597518864, siendo este un BigInt")
arregloMixto.push(BigInt(-3218817875487448415.23597518864))
console.log("Después de esta dos operaciones el arreglo queda con los siguientes elementos: ")
console.table(arregloMixto)

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial",style_console)
console.table(estudiantes)
console.log("Ahora agregamos a dani, al comienzo del arreglo.")
estudiantes.unshift("dani")
console.log("La lista atual es:")
console.table(estudiantes)


console.log("%c7.- Eliminar el elemento de un arreglo en la última posición (POP)",style_console)
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a brisa, en la última posición. ")
console.log("Después de eliminar el elemento el arreglo quedo de la siguiente manera:")
estudiantes.pop();
console.table(estudiantes)


console.log("%c8.- Eliminar el elemento de un arreglo en la primera posición (SHIFT)",style_console)
console.log("El arreglo tiene los siguientes elementos:")
console.table(estudiantes)
console.log("Para este caso eliminaremos a dani, en la primera posición.")
estudiantes.shift();
console.log("Después de eliminar el elemento del arreglo quedo de la siguiente manera: ")
console.table(estudiantes);


console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console)
console.log("El arreglo original tiene los elementos:")
console.table(estudiantes);
console.log("se divide el arrglo")
estudiantes.splice(2);
console.table(estudiantes)
estudiantes.push("Brisa");
estudiantes.push("carlos");
estudiantes.push("jesus");
estudiantes.push("daniel");
estudiantes.push("erick");
console.log("se ha agregado 5 nuevos estudiantes en el arreglo y es este:")
console.table(estudiantes)
console.log("ahora ya tenemos elementos suficientes para aplicar el metodo slice 3,5")
estudiantes.splice(3,5)
console.log("El resultado es:")
console.table(estudiantes)

console.log("%c10.- Metodos para la manipulacion de arreglos inmutables", style_console)
let zodiacos = ["Aries","Tauro","genesis","cancer","leo","virgo","libra","Escoropio","sagitario","capricornio","acuario","pisis"]

Object.freeze(zodiacos);
//zodiacos.splice(3,5)
// no se pued modificar ya que esta congelado pero mediante desmembrar el arreglo lo podemos mutar y manipularlo
let[signo1,,signo3,,,,signo7,,,,]= zodiacos;
console.log(`Primer signo zodiacal: ${signo1}`)
console.log(`tercero signo zodiacal: ${signo3}`)
console.log(`septimo signo zodiacal: ${signo7}`)

console.log("%c11.- Filtrado de elementos de un arreglo mediante (FILTER) ", style_console)
estudiantes.push("Brisa");
estudiantes.push("carlos");
estudiantes.push("jesus");
estudiantes.push("daniel");
estudiantes.push("erick");
estudiantes.push("yazmin");
estudiantes.push("tadeo");
estudiantes.push("mateo");
estudiantes.push("christian");
estudiantes.push("chucho");
Object.freeze(estudiantes);
//se congela para probar que podemos clonar el objeto sobre otro nuevo objeto que se filtra para obtener los primero 5
//estudiantes.pop
//ESTO CREA UN OBJETO NUEVO DONDE SE MUESTRA LO QUE SE FILTRO


console.log("filtrado los primeros 5 estudiantes")

let nuevoestudiantes = estudiantes.filter((estudiantes) => estudiantes.length>5)
console.table(nuevoestudiantes);

//con esto nos quitamos de enzima lineas de codigo con esta funcion de filter
console.log("%c12.- Filtrado de elementos dentro de un arreglo utilizando el metodo map, en el que necesitas transformarlo ", style_console)
console.table(zodiacos)

console.table(zodiacos.map(signozodiacal => signozodiacal.toLocaleLowerCase()));
// const costoslistacompras: number[]
const costoslistacompras =[15,52.50,16.90,32.50,28,105,45.2,94.10]
console.log("Los precios son")
console.table(costoslistacompras);
console.log(`El total de la compra es : ${costoslistacompras.reduce((total,precio)=>total+precio,0).toFixed(2)}`)

