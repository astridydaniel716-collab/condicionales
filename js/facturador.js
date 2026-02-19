let intentos = 0; // GLOBAL (fuera de la función)

    function validar() {

        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("contraseña").value;
    
        const usuario1 = "user1";
        const contra1 = "12345";
        const usuario2 = "user2";
        const contra2 = "67890";
        const usuario3 = "user3";
        const contra3 = "11223";

        if (usuario === "" || contraseña === "") {
            alert("Por favor digite su usuario y/o contraseña");
            return;
        }

        if (
            (usuario === usuario1 && contraseña === contra1) ||
            (usuario === usuario2 && contraseña === contra2) ||
            (usuario === usuario3 && contraseña === contra3)
        ) {
            let mensajeConfirmacion = `
# Bienvenido ${usuario} al sistema de facturación" "¿Desea ingresar al sistema?`
  let confirmar = confirm(mensajeConfirmacion)
if (confirmar) {
        // Si hace clic en Aceptar → va a IMC
        location.href = 'facturador.html';
    } else {
        // Si hace clic en Cancelar → limpia formulario
        document.getElementById("f1").reset();
    }
    
            intentos = 0; // reinicia si entra
        } else {

            intentos++;

            if (intentos < 3) {
                alert("Credenciales incorrectas\nIntento " + intentos + " de 3");
            } else {
                alert("Cuenta bloqueada. Intentos agotados");
            }
        }
    }

   



function calculo(){
    nf = parseInt(document.getElementById("nf").value)
    nc = document.getElementById("nc").value
    idc = parseInt(document.getElementById("idc").value)
    cant = parseInt(document.getElementById("cant").value)
    dp = document.getElementById("dp").value
    vu = parseInt(document.getElementById("vu").value)
    subtotal = cant * vu
    iva = subtotal * 0.19   
    total = subtotal + iva
   
        
     pregunta = parseInt(
            prompt("¿ si desea agregar otro articulo presione \n1 = Sí\n si no lo desea presione 2  = No")
        );

    
    // AGREGAR AQUÍ LA CONFIRMACIÓN ANTES DE MOSTRAR CUALQUIER COSA
    let mensajeConfirmacion = `
# Factura: ${nf}
id del Cliente: ${idc}
Cliente: ${nc}
Cantidad: ${cant}
Descripcion del producto: ${dp}
Valor unitario: ${vu}
Subtotal: ${subtotal}
IVA: ${iva}
Total a pagar: ${total}

¿Son correctos estos datos?
¿Desea generar la factura?
    `
    
    // Preguntar al usuario si los datos son correctos
    let confirmar = confirm(mensajeConfirmacion)

    if (confirmar) {
        // Si el usuario dice SÍ, mostrar la factura en el contenedor
        let resultadoHTML = `
        <div style="font-family: monospace;">
            <div>*******************</div>
            <div><strong># Factura:</strong> ${nf}</div>
            <div>*******************</div>
            <div><strong>ID del Cliente:</strong> ${idc}</div>
            <div><strong>Cliente:</strong> ${nc}</div>
            <div>*******************</div>
            <div><strong>Cantidad:</strong> ${cant}</div>
            <div><strong>Descripción del producto:</strong> ${dp}</div>
            <div><strong>Valor unitario:</strong> $${vu}</div>
            <div><strong>Subtotal:</strong> $${subtotal}</div>
            <div>*******************</div>
            <div><strong>IVA (19%):</strong> $${iva.toFixed(2)}</div>
            <div>*******************</div>
            <div><strong>Total a pagar:</strong> $${total.toFixed(2)}</div>
            <div>*******************</div>
        </div>
        `
        
        // Mostrar en el contenedor de resultados
        document.getElementById("factura").innerHTML = resultadoHTML
        
    } else {
        // Si el usuario dice NO, limpiar el formulario
        document.getElementById("nf").value = ""
        document.getElementById("idc").value = ""
        document.getElementById("nc").value = ""
        document.getElementById("cant").value = ""
        document.getElementById("dp").value = ""
        document.getElementById("vu").value = ""
        
        // Limpiar también el contenedor de resultados
        document.getElementById("factura").innerHTML = ""
        
        // Enfocar el primer campo para corregir
        document.getElementById("nf").focus()
    }
}



/*producto,
cantidad 
valor unitario

 IF bucle 
esea llevar otro producto?

IF
volver a pedir la información mas productos

si no 

 obtener
 subtotales
 iva
 total a pagar

alert factura completa*/