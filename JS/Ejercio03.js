// string o cadenas de texto
//const { warn } = require("vue");

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
const NumeroGrande = BigInt(1234567890)
const NumeroGrande2 = BigInt(12345678901234567890)
const NumeroGrande3 = BigInt(12345678901234567890123456789)
const NumeroGrande4 = BigInt(123456789012345678901234567891234567890)
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
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)

// console.log( primerSymbol == segundoSymbol )
// console.log(primerSymbol.valueOf() )
// console.log(segundoSymbol.valueOf() )

//null
console.warn("--- Tipo de dato - Null (Nulo)")
// const descuento = null
// console.log(typeof descuento)


//clase de profe mark
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,225.1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding 4px;  font-size:1.0rem; font-weigh: bold`
const producto = {
    nombre: "Tablet 9",
    marca: "mac",
    modelo: "Tablet 9/",
    SKU: Symbol("55366D546442"),
    colores: ["Blanco","Rojo","negro","amarrillo", "rosa", "azul"],
}

console.warn("---Objetos---")
console.table(producto)
// Los obejetos tambien pueden representarse por tablas con el comando 

//Acceder a las propiedades de un objeto
console.warn("Leyendo las propiedades dde un objeto y sus tipos de datos")
console.log()

console.log("en") 




//backlog
//Ahora leemos el objeto completo
const producto2hol2 = {
    clave: 555,
    imagen: `/ASSETS/windows-tablet`,
    marca: "windows",
    modelo: "wilde3/",
    nombre: "Tablet 12",
    precio: "3692",
    disponibilidad: true,
    stock: 5,
    SKU: Symbol("55366D546442"),
    colores: ["Blanco","Rojo","negro","amarrillo", "rosa", "azul"],
    barcode: 923213,
    categorias: ["Deportes","Lentes","Hombre","Accesorios"],
}
let comprador =
{
    clave: 3216,
    nombre: "matias",
    apellidos:"Granillo Mejia",
    tipo: "frecuente",
    correo: "egranillomejia@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 14000.00,
}
let pedido =
{
    Producto_clave: 3216,
    comprador_clave: 3456,
    cantidad: 3,
    Estatus: "carrito de comprar",
    TipoPago: "targeta de credito",
}

//en base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor 

let {precio: producto_precio2 } = producto2hol2;
let {cantidad: pedido_cantidad } = pedido;
let {SaldoActual: Cliente_SaldoActual} = comprador;
let costo_compra = producto2hol2_precio2 * pedido_cantidad;




console.table(productohol2)
console.log("Accediendo a propiedades especificas del producto")
console.log(`Nombre Completo del producto: ${producto2hol2.nombre} ${producto.marca} ${producto.modelo}`)
console.log(`precio: ${producto2hol2.precio}`)
if(producto.disponibilidad == 0)
    console.log(`el cliente ha agreado a su carrito de compras ${pedido_cantidad} undidades, con un costo total de : $${costo_compra}`);
if(costo_compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")