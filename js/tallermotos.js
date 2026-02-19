function nombrecliente() {

    let continuar = "si";
    let totalclientes = 0;  // contador
    let listadoc = "";
    let neumaticos = 0;
    let baterias = 0;
    let aceite = 0;

    while (continuar.toLowerCase() == "si") {

        let nombre = prompt("Ingrese nombre del cliente");
        repuestos = prompt("ingrese el repuesto que llevó el cliente (1 neumaticos, 2 baterias, 3 aceite)")
           if (repuestos == 1){
            neumaticos++
            producto = "Neumáticos";
           }
           if (repuestos == 2){
            baterias++
            producto = "Baterias";
           }
           if (repuestos == 3){
            aceite++
            producto = "Aceite";
           }
        if (nombre == null || nombre == "") {
            alert("Debe ingresar un nombre válido");
        } else {
            totalclientes++;  // suma 1 si el nombre es válido
        }

        continuar = prompt("¿Desea ingresar otro cliente? (si/no)");

        listadoc += `cliente:  ${nombre} - Producto que llevó: ${producto}\n`;

    }

    alert("Total de clientes ingresados: " + totalclientes + "\n" + listadoc  + "\n" + "venta de neumaticos: " + neumaticos + "\n" + "venta de baterias: " + baterias + "\n" + "venta de aceite: " + aceite);
}

