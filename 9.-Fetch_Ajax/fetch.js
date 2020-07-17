"use strict"

function main() {
    onLoad();
}

function onLoad() {
    window.addEventListener("load", function () {
        listarUsuario();

    })
}

const listarUsuario = () => {
    let usuarios = [];
    fetch("https://reqres.in/api/users?page=2")
        .then(data => data.json())
        .then(usuario => {
            usuarios = usuario.data;
            return usuarios;
        })
        .then(usuario => {
            console.log(usuario);
            let listaUsuarios = usuario.map(user => user);
            //listaUsuarios = user.first_name;

            showArray(listaUsuarios);
        })

}

function showArray(array) {
    let div = document.querySelector("#lista");

    array.forEach(element => {
        let nombre = document.createElement("p");
        nombre.innerHTML = element.first_name;
        div.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });

}

main();

