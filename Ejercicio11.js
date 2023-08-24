const numeroMes = parseInt(prompt("Ingrese un número entre 1 y 12:"));


if (numeroMes >= 1 && numeroMes <= 12) {

    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const signosZodiaco = [
        "Capricornio - Acuario", "Acuario - Piscis", "Piscis - Aries", "Aries - Tauro",
        "Tauro - Géminis", "Géminis - Cáncer", "Cáncer - Leo", "Leo - Virgo",
        "Virgo - Libra", "Libra - Escorpio", "Escorpio - Sagitario", "Sagitario - Capricornio"
    ];

    const nombreMes = nombresMeses[numeroMes - 1];
    const signoZodiaco = signosZodiaco[numeroMes - 1];


    console.log(`${nombreMes}, ${signoZodiaco}`);
} else {
    console.log("Número inválido. Debe estar entre 1 y 12.");
}