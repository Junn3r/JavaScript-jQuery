//programa que pide tu datos y luego los muestra manipulando el DOM y mientras la pagina ya esta cargada

function main() {
    onLoad();
}

function Persona() {
    let nombres;
    let apellidos;
    let edad;
}



function onLoad() {
    window.addEventListener("load", function () {
        recibirInputs();
        
    })
}


function recibirInputs() {

    let formulario = document.querySelector("#formulario");
    const datosPersona = new Persona();
    let nombre;
    let apellido;
    let edad;


    formulario.addEventListener("submit", function () {

        nombre = document.querySelector("#nombre").value;
        apellido = document.querySelector("#apellido").value;
        edad = document.querySelector("#edad").value;

        datosPersona.nombres = nombre;
        datosPersona.apellidos = apellido;
        datosPersona.edad = edad;

        mostrarDatos(datosPersona);

    })


}

//Document.write al usarlo sobre una pagina cuyos elementos esten cargado
//me pondra las cosas en una nueva hoja, ya que solo funciona bien cuando esta en carga el DOM

function mostrarDatos(Persona) {
    //debugger;
    let div = document.createElement("div");
    let parr = document.createElement("p");
    let nombres = document.createTextNode(Persona.nombres+" ");
    let apellidos = document.createTextNode(Persona.apellidos+" ");
    let edad = document.createTextNode(Persona.edad+" ");

    console.log(apellidos);
    parr.append(nombres);
    parr.append(apellidos);
    parr.append(edad);
    div.appendChild(parr);
    document.body.appendChild(div);
}


//funcion main
main();