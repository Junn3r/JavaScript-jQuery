"use strict"


function main() {

    //En esta funciona usamos como parametros dos funciones anonimas
    //para poder realizar los callbacks de estas.
    //en fin la practica de pedir por parametros por funciones se llama hacer Callbacks
    sumar(5,10,numero => {
        console.log(numero);
    },
    numero => {
        console.log(numero * 2);
    });

    //tambien hice uso de operador flecha "=>" para que se vea mas legible.

    function sumar(num1,num2,funcionMostrar,funcionMult) {
        var result = num1+num2;
        funcionMostrar(result);
        funcionMult(result);
        return result;
    }
    
}



//funcion main.
main();