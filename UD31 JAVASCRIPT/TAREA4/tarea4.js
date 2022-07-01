var valores  = new Array("true", 5, "false","hola","adios", 2);
console.log(valores.toString());
console.log("Este es el cuarto elemento del array " + valores[3].length);
console.log("Este es el quinto elemento del array " + valores[4].length);
var longitud3 = (valores[3].length);
var longitud4 = (valores[4].length);
if(longitud4> longitud3){
    console.log(valores[4]+ " " + "es mayor que " + valores[3]+ " ");

}else{console.log(valores[3] + " " + "es menor que " + valores[4] + " ");
}
var verdadero = valores[0];
var falso = valores[2];
var resultado = valores[0] || valores[2];
console.log(resultado);
var resultado = valores[0] && valores[2];
console.log(resultado);
    
//aquí iría el ejercicio con valores booleanos
var suma =(valores[1] + valores[5] );
console.log("suma : " + suma);
var resta =(valores[1] - valores[5]);
console.log("resta : " + resta);
var producto =(valores[1] * valores[5]);
console.log("producto : " + producto);
var division =(valores[1] / valores[5]);
console.log("División : " + division);
var residuo =(valores[1] % valores[5]);
console.log("Residuo : " + residuo);
