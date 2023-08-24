var hombres = parseInt(prompt("Ingresa la cantidad de hombres:"));
var mujeres = parseInt(prompt("Ingresa la cantidad de mujeres:"));

var totalEstudiantes = hombres + mujeres;

var porcentajeHombres = (hombres / totalEstudiantes) * 100;
var porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

console.log("Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%");
