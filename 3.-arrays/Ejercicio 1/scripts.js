"use strict"

function main() {

    //let array = pedirDatos();
    //const array = llenarArray("peras","manzanas","uvas","limones");
    const array = llenarArray(20, 21, 30, 40, 55, 66, 72);

    showArray(array);
    ordenarArrayMap(array);
    invertirArray(array);
    buscarIndice(array, 21);
}


function llenarArray(a, b, c, d, e, f, g) {
    const array = [a, b, c, d, e, f, g];
    return array;
}

function pedirDatos() {
    var array = new Array();
    var elemento = null;
    while (elemento != "fin") {
        elemento = prompt("Ingrese el elemento: ");
        array.push(elemento);

        if (elemento == "fin") {
            array.pop();
        }
    }
    return array;
}


/*
En javascript los parametros se pasan por referencia en caso de crear un new Array()
asi que uso la funcion slice() para que se cree una copia del array
ya que si hago array = nuevoArray se sigue sobrescribiendo el original
ya que esta pasado por referencia, la unica manera de evadir eso es usando slice() con una nueva variable
*/
function ordenarArray(array) {
    const newArray = array.slice();
    document.write("<h3> datos ordenados </h3>");
    newArray.sort();
    showArray(newArray);
    console.log(newArray);
}

//forma mas actualizada y limpia de hacerlo
function ordenarArrayMap(array) {
    document.write("<h3> datos ordenados </h3>");
    let newArray = array.map(current => current);
    newArray.sort(function ascendente(a, b) {
        return a - b;
    });
    showArray(newArray);
    console.log(array);
}


function invertirArray(array) {
    const newArray = array.slice();
    document.write("</hr>");
    document.write("<h3> datos invertidos </h3>");
    newArray.reverse();
    showArray(newArray);
}



function showArray(array) {
    document.write("<ul>")
    array.forEach(element => {
        document.write("<li>" + element + "</li>");
    });
    document.write(`</ul>
    </hr>`);
}

/*
La funcion findIndex() necesita de un callback que retorne algun valor, y este valor es lo que findIndex() 
buscara en el array, findIndex le brinda al callback un element(elemento actual del proceso), index del element actual, y el array
completo
*/
function buscarIndice(array, numero) {

    let newArray = array.map(current => current);
    let posicion = newArray.findIndex(element => element == numero);

    if (posicion == -1) {

        console.log("valor no encontrado");

    } else {

        document.write("</hr>");
        document.write("<h3> Valor encontrado </h3>");
        document.write("<li> Valor: " + numero + " encontrado en la posicion: " + posicion + "</li>");
        console.log("valor: " + numero + " encontrado en la posicion: " + posicion);

    }

}



//funcion main
main();