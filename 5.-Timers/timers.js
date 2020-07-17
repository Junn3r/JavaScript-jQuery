"use strict"

// ****** MAIN FUNCTION *******
function main() {
    onLoad();


}
// ****************************



//METODOS

//Funcion que llama a otras funciones a que se instancien solo cuando todos
//los elementos del DOM esten cargados, gracias al evento "load"
//esto nos permite poder llamar  a nuestro script desde el <head> sin miedo 
//a que no se hayan cargado las etiquetas que necesitaremos
function onLoad() {

    window.addEventListener("load", function () {
        let primerDiv = document.querySelectorAll("div");
        let i = 0;
        //funcion que ejecuta un callback cada ciertos milisegundos 
        let time = setInterval(function () {
            
            if (i > primerDiv.length - 1) {
                clearInterval(time);//para el intervalo de tiempo
            } else {
                console.log("ejecucion..")
                primerDiv[i].style.fontSize = "40px";
                i++;
            }

        }, 3000);

    })
}





//funcion main
main();