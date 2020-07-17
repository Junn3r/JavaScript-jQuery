"use strict"

const main = () => {
    onLoad();
}

const onLoad = () => {
    $(document).ready(function () {
        let caja = $("#caja");
        $.get("https://reqres.in/api/users?page=2",
            function (usuario) {
                usuario.data.forEach(element => {
                    caja.append('<img src="' + element.avatar + '" heigth="80px"</img>');
                    caja.append('<p>' + element.first_name + '</p>')
                    caja.append('<hr>');
                });
            }

        ).fail(function () {
            alert("error");
        })
            .always(function () {
                console.log("finished");
            });
    });

}



//funcion main
main();