// Objetos

// const nombre = "Tablet"
// const precio = 300
// const disponible = true
//asi se declara un objeto
const producto = {
     nombre: "Tablet",
     precio: 300,
 disponible: true
}

console.log(producto)
console.log(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring

const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//object literal Enhacement
const autenticado = true
const usuario = "Juan"

const NuevoObjeto = {
autenticado,
usuario
}
//Para mostrar objetos como tablas
console.table(NuevoObjeto)
