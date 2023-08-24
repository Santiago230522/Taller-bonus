const cantidadHuevos = parseInt(prompt("Ingrese la cantidad de huevos:"));
const tipoHuevos = prompt("Ingrese el tipo de huevos (AA, A, B):").toUpperCase();

let porcentajeDescuento = 0;
if (cantidadHuevos >= 1 && cantidadHuevos <= 100) {
    porcentajeDescuento = 0.03;
} else if (cantidadHuevos <= 200) {
    porcentajeDescuento = 0.05;
} else if (cantidadHuevos <= 300) {
    porcentajeDescuento = 0.08;
} else if (cantidadHuevos >= 301) {
    porcentajeDescuento = 0.10;
}

let precioSinDescuento = 0;
switch (tipoHuevos) {
    case "AA":
        precioSinDescuento = cantidadHuevos * 250;
        break;
    case "A":
        precioSinDescuento = cantidadHuevos * 200;
        break;
    case "B":
        precioSinDescuento = cantidadHuevos * 150;
        break;
    default:
        console.log("Tipo de huevos no válido.");
}

const descuento = precioSinDescuento * porcentajeDescuento;

const precioConDescuento = precioSinDescuento - descuento;

if (precioSinDescuento > 0) {
    console.log(`Cantidad de huevos: ${cantidadHuevos}`);
    console.log(`Tipo de huevos: ${tipoHuevos}`);
    console.log(`Precio sin descuento: $${precioSinDescuento}`);
    console.log(`Descuento aplicado: $${descuento}`);
    console.log(`Precio con descuento: $${precioConDescuento}`);
}