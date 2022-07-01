function espalindromo (mensaje){
    mensajeMin= mensaje.toLowerCase();
    var mensajeinvertido = mensajeMin.split("").reverse("").join("");
    
    if(mensajeinvertido === mensajeMin){
        resultado = alert(" es palindromo");
    }
    else{
        resultado = alert (" No es palindromo");
    }
}
function pidePalindromo(){
    texto = prompt(" Escribe una cadena de texto")
    espalindromo(texto);
}