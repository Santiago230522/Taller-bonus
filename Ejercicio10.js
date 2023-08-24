var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

var operacion = prompt("Selecciona una operación: suma, resta, multiplicación o división");

var resultado;

if (operacion === "suma") {
    resultado = numero1 + numero2;
} else if (operacion === "resta") {
    resultado = numero1 - numero2;
} else if (operacion === "multiplicación") {
    resultado = numero1 * numero2;
} else if (operacion === "división") {
    resultado = numero1 / numero2;
} else {
    console.log("Operación no válida");
}

if (resultado !== undefined) {
    console.log("El resultado de la " + operacion + " es: " + resultado);
}