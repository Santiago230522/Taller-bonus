var edad = parseInt(prompt("Ingresa la edad del estudiante:"));
var promedio = parseFloat(prompt("Ingresa el promedio del estudiante:"));

var beca = 0;
var mensaje = "";

if (edad > 18) {
    if (promedio >= 9) {
        beca = 200000;
        mensaje = "¡Felicidades! Has obtenido una beca de $200,000.";
    } else if (promedio >= 7.5) {
        beca = 100000;
        mensaje = "¡Felicidades! Has obtenido una beca de $100,000.";
    } else if (promedio >= 6.0) {
        beca = 50000;
        mensaje = "¡Felicidades! Has obtenido una beca de $50,000.";
    } else {
        mensaje = "Te invitamos a estudiar más en el próximo ciclo escolar.";
    }
} else {
    if (promedio >= 9) {
        beca = 300000;
        mensaje = "¡Felicidades! Has obtenido una beca de $300,000.";
    } else if (promedio >= 8) {
        beca = 200000;
        mensaje = "¡Felicidades! Has obtenido una beca de $200,000.";
    } else if (promedio >= 6) {
        beca = 100000;
        mensaje = "¡Felicidades! Has obtenido una beca de $100,000.";
    } else {
        mensaje = "Te invitamos a estudiar más en el próximo ciclo escolar.";
    }
}

if (beca > 0) {
    console.log(mensaje + " Tu beca es de $" + beca);
} else {
    console.log(mensaje);
}