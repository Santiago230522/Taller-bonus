const productoComprado = prompt("Ingrese el tipo de producto comprado (carro, moto, bicicleta, patineta, scooter):").toLowerCase();
let porcentajeDescuento = 0;

switch (productoComprado) {
    case "carro":
    case "moto":
        porcentajeDescuento = 15;
        break;
    case "bicicleta":
    case "patineta":
        porcentajeDescuento = 10;
        break;
    case "scooter":
        porcentajeDescuento = 5;
        break;
    default:
        console.log("Producto no reconocido.");
}

if (porcentajeDescuento > 0) {
    console.log(`El cliente recibirá un descuento del ${porcentajeDescuento}%.`);
}