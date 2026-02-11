function validar() {
    a = 0
    while (a <= 60) {
      alert("tabla del 5 "  + a);
      
        a = a + 5  // abreviado a++
    }
    
}

function validarP() {
    alert("Ciclo Para")
    for (a = 1; a <= 60; a++) {
      alert("veces: " + a + " Para")
       // a = a + 1  // abreviado a++
    }
}
function multiplicar(){
   var i = 1;
var resultado = "";

while(i <= 12){
    resultado += `5 * ${i} = ${5 * i}\n`;
    i++;
}
alert(resultado);
}

function multiplicarx(){
    let numero = parseInt(prompt("Ingresa el número para ver su tabla de multiplicar"));
    let contador = 1;
    var resultado = "";

while (contador <= 12) {
   
    resultado += numero + " x " + contador + " = " + (numero * contador) + "\n";
    contador++;
}

  alert(resultado);
}