"use strict"

function main() {
    onLoad();
}

function onLoad() {
    window.addEventListener("load", function () {
        addMoviesLocalStorage();

    })
}

//objeto pelicula

//funcion que anade una nueva pelicula al array film
function addFilm(films, film) {
    films.push(film);
}
let pelicula = {
    films: [
        { titulo: "", fecha: "", duracion: "" }
    ]
};

function mostrarPeliculas() {
    let allFilms = JSON.parse(localStorage.getItem("Pelicula"));

    let texto;
    let parrafo;
    let div;
    let i = 0;
    while (allFilms != null && i < allFilms.films.length) {
        for (const key in allFilms) {

            if (allFilms.hasOwnProperty(key)) {
                const element = allFilms[key];
                console.log(element.titulo);
                texto = document.createTextNode("Titulo: " + element[i].titulo + " Fecha: " + element[i].fecha + " Duracion: " + element[i].duracion);
                parrafo = document.createElement("p");
                parrafo.append(texto);
                //document.write con titulo fecha duracion
                div = document.createElement("div");
                div.appendChild(parrafo);
                document.body.appendChild(div);

            }
        }
        i++;
    }


}

function addMoviesLocalStorage() {

    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function () {
        debugger;
        if (document.querySelector("#titulo").value == "" ||
            document.querySelector("#fecha").value == "" ||
            document.querySelector("#duracion").value == "") {
                alert("debe llenar todos los campos");
                //return false;

        } else {

            let titulo = document.querySelector("#titulo").value;
            let fecha = document.querySelector("#fecha").value;
            let duracion = document.querySelector("#duracion").value;


            pelicula.films[0].titulo = titulo;
            pelicula.films[0].fecha = fecha;
            pelicula.films[0].duracion = duracion;
            console.log(pelicula);
            if (localStorage.length == 0) {
                localStorage.setItem("Pelicula", JSON.stringify(pelicula));
            } else {
                //debugger;
                let oldPeli = JSON.parse(localStorage.getItem("Pelicula"));
                //funcion que anade un nuevo elemento al array de films
                addFilm(oldPeli.films, {
                    titulo: titulo,
                    fecha: fecha,
                    duracion: duracion
                });

                console.log(oldPeli);

                localStorage.setItem("Pelicula", JSON.stringify(oldPeli));
                location.reload();
            }
            mostrarPeliculas();
        }

    })
    mostrarPeliculas();

}



//funcion main
main();