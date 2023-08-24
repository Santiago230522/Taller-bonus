var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

var suma = numero1 + numero2;

if (suma > 0) {
    console.log("La suma es positiva.");
} else if (suma < 0) {
    console.log("La suma es negativa.");
} else {
    console.log("La suma es cero.");
}