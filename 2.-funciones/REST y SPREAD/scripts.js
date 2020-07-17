"use strict"

//funcion para REST
function nombres(nombre1,nombre2,...rest) {
    console.log("nombre1: ",nombre1);
    console.log("nombre2: ",nombre2);
    console.log(rest);
}

//funcion para SPREAD
function frutas(fruta1,fruta2,...rest) {
    console.log("fruta1: ",fruta1);
    console.log("fruta2: ",fruta2);
    console.log(rest)
}

//funcion main
function main() {
    nombres("Junner","Elian","Jean Carlos","Marita");

    let spread = ["Uvas","Duraznos"];
    frutas(...spread,"Manzanas","Limones");
}

//main
main();