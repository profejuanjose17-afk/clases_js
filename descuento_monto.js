const precioOriginal = 150;
const descuento = 20; // porcentaje

// 1. Calcula el monto del descuento ( (150 * 20) / 100 )
const montoDescuento = (precioOriginal * descuento) / 100;


// 2. Calcula el precio final ( 150 - 30 )
const precioFinal = precioOriginal - montoDescuento;

// Verificación en consola
console.log("Precio original: $" +precioOriginal); // Debe ser $150
console.log("Descuento (${descuento}%): $${montoDescuento}"); // Debería ser 30
console.log("Precio final a pagar: $" + precioFinal); // Debería ser 120º