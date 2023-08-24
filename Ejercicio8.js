const numeroMes = parseInt(prompt("Ingrese el número del mes (1 al 12):"));

if (numeroMes >= 1 && numeroMes <= 12) {
    const diasEnMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const cantidadDias = diasEnMes[numeroMes];

    if (cantidadDias === 30) {
        console.log(`El mes ${numeroMes} tiene 30 días.`);
    } else if (cantidadDias === 31) {
        console.log(`El mes ${numeroMes} tiene 31 días.`);
    } else {
        console.log(`El mes ${numeroMes}  tiene 28 días.`);
    }
} else {
    console.log("Número de mes inválido. Debe estar entre 1 y 12.");
}