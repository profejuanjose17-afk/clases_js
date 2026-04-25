const numero = 7;

console.log(`--- Tabla del ${numero} ---`);

for (let i = 1; i <= 10; i++) {
  // 1. Calculamos el producto de la base por el índice actual
  const resultado = numero * i;
  
  // 2. Mostramos el formato "7 x 1 = 7" usando Template Literals
  console.log(`${numero} x ${i} = ${resultado}`);
}