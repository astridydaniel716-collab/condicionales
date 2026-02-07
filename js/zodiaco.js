function calculo() {
    const fechaInput = document.getElementById("fn").value;

    if (!fechaInput) {
        alert("Por favor, selecciona una fecha de nacimiento.");
        return;
    }

    // Creamos un objeto fecha y extraemos día y mes, sumamos 1 al mes porque en JS los meses van de 0 a 11
    const fecha = new Date(fechaInput + "T00:00:00");
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;

    let resultado = "";

    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        resultado = "Aries, eres una persona apasionad@, segur@ y valiente.";
    } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 21)) {
        resultado = "Tauro, eres una persona arraigado, práctico y estable.";
    } else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 21)) {
        resultado = "Géminis, eres una persona inteligente, comunicativo y sociable";
    } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
        resultado = "Cáncer, eres una persona sensible, intuitivo y protector.";
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
        resultado = "Leo, eres una persona creativo, carismático y seguro.";
    } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
        resultado = "Virgo, eres una persona detallista, analítico y práctico.";
    } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
        resultado = "Libra, eres una persona sociable, diplomático y equilibrado.";
    } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 22)) {
        resultado = "Escorpio, eres una persona intenso, profundo y apasionado.";
    } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
        resultado = "Sagitario, eres una persona aventurero, optimista y sincero.";
    } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
        resultado = "Capricornio, eres una persona ambicioso, disciplinado y paciente.";
    } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
        resultado = "Acuario, eres una persona independiente, original e intelectua";
    } else {
        resultado = "Piscis, eres una persona empático, intuitivo y artístico. .";
    }

    alert("Su signo zodiacal es: " + resultado);
}