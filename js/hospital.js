function nombrepte() {

    let agregar = "si";
    let pacientes = [];   // ← array para guardar nombres

    while (agregar.toLowerCase() == "si") {

        let nombre = prompt("Ingrese nombre del paciente");

        if (nombre != null && nombre != "") {
            pacientes.push(nombre);   // ← guarda en el array
        } else {
            alert("Debe ingresar un nombre válido");
        }

        agregar = prompt("¿Desea ingresar otro paciente? (si/no)");
    }

    // Mostrar resultados
    let listado = "";

    for (let i = 0; i < pacientes.length; i++) {
        listado += (i + 1) + ". " + pacientes[i] + "\n";
    }

    alert("Fin de jornada\nTotal pacientes: " + pacientes.length + "\n\n" + listado);
    
    let eliminar= parseInt(prompt ("presiona 1 para eliminar el primer paciente o 2 para elominar el ultimo"));
    if(eliminar == 1 ) {
        pacientes.shift();
    }
    else {
        pacientes.pop();
    }
    alert(pacientes)
}
// otra funcion 
 function nombrepaciente() {

    let continuar = "si";
    let totalPacientes = 0;  // contador
    let listadop = "";
    let triage1 = 0;
    let triage2 = 0;
    let triage3 = 0;

    while (continuar.toLowerCase() == "si") {

        let nombre = prompt("Ingrese nombre del paciente");
        tr = prompt("ingrese el triage (1 alto, 2 medio, 3 bajo)")
           if (tr == 1){
            triage1++
           }
           if (tr == 2){
            triage2++
           }
           if (tr == 3){
            triage3++
           }
        if (nombre == null || nombre == "") {
            alert("Debe ingresar un nombre válido");
        } else {
            totalPacientes++;  // suma 1 si el nombre es válido
        }

        continuar = prompt("¿Desea ingresar otro paciente? (si/no)");

        listadop += "paciente:  ${nombre}  \n";

    }

    alert("Fin de jornada \n Total de pacientes ingresados: " + totalPacientes + "\n" + listadop + "\n" + "pacientes con triage 1: " + triage1 + "\n" + "pacientes con triage 2: " + triage2 + "\n" + "pacientes con triage 3: " + triage3);
}