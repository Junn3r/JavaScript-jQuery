"use strict"

const main = () => {
    onLoad();
}

const onLoad = () => {

    $(document).ready(function () {

        let caja = $("#caja").hide();

        $("#mostrar").click(function (e) {
            e.preventDefault();
            caja.show("fast");
        });

        $("#ocultar").click(function (e) {
            e.preventDefault();
            caja.hide("fast");
        });

        $("#animar").click(function (e) {
            e.preventDefault();
            caja.animate({ marginLeft: '100px' }, 'slow')
                .animate({ marginTop: '50px' }, 'slow')
                .animate({ marginLeft: '0px' }, 'slow')
                .animate({ marginTop: '10px', backgroundColor: "#aa0000"}, 'slow');

        });

    });

}



//funcion main
main();