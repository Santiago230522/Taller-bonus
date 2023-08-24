var valorProducto = parseFloat(prompt("Ingresa el valor del producto:"));
var porcentaje = parseFloat(prompt("Ingresa el porcentaje a calcular (%):"));

var porcentajeCalculado = (porcentaje / 100) * valorProducto;

console.log("El " + porcentaje + "% de $" + valorProducto + " es: $" + porcentajeCalculado);