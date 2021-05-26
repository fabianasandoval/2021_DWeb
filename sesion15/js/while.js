function contar(){
    var a = String(document.getElementById("cadena").value);
    var b;
    var cont=0;
    var contP=0;

    for (var i = 0; i < String(document.getElementById("cadena").value).length; i++) {
        b=a.charAt(i);
        if (b === ".") {
            contP++;
        }
    }

    cont = 0;
    b=a.charAt(cont);

    if(contP>1){
        alert("hay más de un punto en el texto ingresado, vuelva a ingresar nuevamente el texto");
    }else{
        if(contP===0){
            alert("No hay ningun punto en el texto ingresado, vuelva a ingresar nuevamente el texto");
        }else{
            while(b != "."){
                cont++;
                b=a.charAt(cont);
            }
            alert("la cantidad de caracteres antes del punto es de " + cont);
        }
    }
}
/*
function contar(){
    var a = String(document.getElementById("cadena").value);
    var b;
    var cont=0;

    b=a.charAt(cont);
    while(b != "."){
        cont++;
        b=a.charAt(cont);
    }
    alert("la cantidad de caracteres antes del punto es de " + cont);
}
*/