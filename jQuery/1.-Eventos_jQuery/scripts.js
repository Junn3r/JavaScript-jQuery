"use strict"

//Usando jquery para que un div pequeno en forma de circulo siga a mi cursor

function main() {
    onLoad();
}

const onLoad = () => {
    return $(document).ready(function () {
        seguirCursor();
    });
}

const seguirCursor = () => {
    let cursor = $("#cursor");
    $(document).mousemove(function (event) {
        cursor.css("left", event.clientX)
            .css("top", event.clientY);

        console.log(event.clientX);
        console.log(event.clientY);


    });

}

//funcion main
main();