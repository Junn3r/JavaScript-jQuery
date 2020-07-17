'use strict'
function main() {

    //el alcanze de let es solo dentro de bloque, osea dentro de las llaves a las que pertence
    //mas no hacia afuera, solo dentro.
    function ejemploLet() {
        if (true) {
            let variable = 100;
            console.log(variable);
        }
        console.log(variable);
    }

    
    //el alcanze de var es cualquier bloque, siempre y cuando este dentro del mismo ambiente o scope
    function ejemploVar() {
        if (true) {
            var variable = 100;
            console.log(variable);
        }
        console.log(variable);
    }
    
    //selecciona que variable quieres comprobar
    //ejemploLet();
    ejemploVar();

}


//main del document
main();










