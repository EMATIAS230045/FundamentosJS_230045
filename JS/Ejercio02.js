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