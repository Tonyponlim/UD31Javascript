var validarletra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
var dni = prompt("Escribe tu DNI sin letra, por favor");
var letra = prompt("Introduce la letra ");
letra = letra.toUpperCase();

if(dni<0 || dni > 99999999){
    alert(" el número introducido no es valido");
    
}
else{
    letradni = validarletra[dni % 23];
    if(letradni != letra){
        alert("el numero o la letra proporcionada no es correcta");
    }
    else{
        alert(" El dni es correcto");
    }
}