function validar() {
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
  
    var u = "fulanito"
    var c = "12345"
    var u2 = "meganito"
   var c2 = "67890"
   var u3 = "juanita"
   var c3 = "00000"

if ((usuario == u && contraseña == c) || (usuario == u2 && contraseña == c2) || (usuario == u3 && contraseña == c3))
    {
   alert("Bienvenido al sistema"); 
  n1 = prompt("Ingrese primera nota");
   n2 = prompt("Ingrese segunda nota");
    n3 = prompt("Ingrese tercera nota");
    nota = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
    nota = nota.toFixed(2);
    if (nota >= 3) {
        alert("Usted ganó el período con promedio de: " + nota);
    } else {
            alert("Usted perdió el período con promedio de: " + nota);
    
    } 
} else {
    alert("no esta permitido entrar al sistema")
   }
}  

  