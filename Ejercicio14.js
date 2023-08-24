var peso = parseFloat(prompt("Ingresa tu peso en kg:"));
var altura = parseFloat(prompt("Ingresa tu altura en metros:"));

var imc = peso / (altura * altura);

console.log("Tu índice de masa corporal (IMC) es: " + imc);
