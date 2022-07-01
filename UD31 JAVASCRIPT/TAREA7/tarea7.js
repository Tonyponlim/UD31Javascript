var factorial = prompt(" introduce un número para factorizar");
factorial = parseInt(factorial);
for( i= factorial-1 ; i>= 1; i--){
    factorial = factorial * i;
     
};
alert(factorial);