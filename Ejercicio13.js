var numero = parseInt(prompt("Ingresa un valor del 1 al 7:"));

var diaSemana;

switch (numero) {
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Lunes";
        break;
    case 3:
        diaSemana = "Martes";
        break;
    case 4:
        diaSemana = "Miércoles";
        break;
    case 5:
        diaSemana = "Jueves";
        break;
    case 6:
        diaSemana = "Viernes";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
    default:
        diaSemana = "Valor no válido";
        break;
}

console.log("El día de la semana correspondiente al valor " + numero + " es: " + diaSemana);