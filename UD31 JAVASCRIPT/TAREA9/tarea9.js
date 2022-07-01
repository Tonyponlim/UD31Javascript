function identifica(cadena){
    var resultado
    if(cadena === cadena.toUpperCase()){
       resultado = alert(" La cadena " + cadena +"  esta formada solo por mayúsculas");}
    else if(cadena === cadena.toLowerCase()){
       resultado = alert("La cadena " + cadena +" esta formada solo por minúsculas");}
      else{
         resultado = alert("La cadena " + cadena +"  esta formada por mayusculas y minúsculas");}
    }
    
var texto=prompt("introduce un texto");
identifica(texto);