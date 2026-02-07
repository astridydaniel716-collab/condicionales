function verificar() {
    e = parseInt(document.getElementById("e").value);
    n = document.getElementById("n").value;
    if (e >= 18) {
        alert("señor@ " + n + " Usted es mayor de edad");
        
    } else {
        alert ("señor@ "  + n + " usted es menor de edad");
        
    }
}