function array1() {
    var array1 = [0, 1, 2, 3, 4, 5];
    return array1;
}

function array2() {
    var array2 = [6,7,8,9,10];
    return array2;
}

//esta funcion final() retorna los dos arrays concatenados
//de las funciones anteriores
function final() {
    var miArray1 = array1();
    var miArray2 = array2();
    var arrayFinal = miArray1.concat(miArray2);
    return arrayFinal;
}

console.log(final());