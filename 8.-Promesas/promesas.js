"use strict"

function main() {
    onLoad();
}

function onLoad() {
    window.addEventListener("load", function () {
        promesas();

    })
}

function promesas() {
    let x = 10;
    console.log("First process");
    //las promesas necesitan un callback con los parametros resolve y reject

    //La siguiente es una forma de hacer una promesa
    
    /* const p1 = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (x == 10) {
                //nuevo dato (y) que puede ser la respuesta a una peticion a una api rest
                let y = 20;
                console.log("Second proccess, se resolvio la promesa y: " + y);
                resolve(y);

            } else {
                reject("se ha rechazado la promesa");
            }

        }, 2000);

    }); */

    //esta es otra forma de hacer una promesa con una funcion anonima
    const p2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (x == 10) {
                    //nuevo dato (y) que puede ser la respuesta a una peticion a una api rest
                    let y = 20;
                    console.log("Second proccess, se resolvio la promesa y: " + y);
                    resolve(y);

                } else {
                    reject("se ha rechazado la promesa");
                }

            }, 2000);
        });

    };



    //OJO se debe retornas el res en cada then() para seguir trabajando con el mismo res
    //de la promesa, si no, esta res se vuelve undefined en el siguiente then().
    p2().then(res => {
        res += 5;
        console.log("Third procces, nuevo valor de y: " + res)
        return res;
    }).then(res => {
        res += 5;
        console.log("Fourth proccess nuevo valor de y: " + res)
        return res;
    })

}

main();

