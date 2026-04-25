let nota = 8.5; // Puedes cambiar este valor para probar
let resultado = "";

if (nota >= 9 && nota <= 10) {
    resultado = "Excelente";
} else if (nota >= 7 && nota < 9) {
    resultado = "Bueno";
} else if (nota >= 5 && nota < 7) {
    resultado = "Regular";
} else if (nota >= 0 && nota < 5) {
    resultado = "Reprobado";
} else {
    resultado = "Nota no válida";
}

console.log(`Nota: ${nota} - Resultado: ${resultado}`);