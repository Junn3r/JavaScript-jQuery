"use strict"

function main() {

    let htmlCollection = crearHtmlCollection("div");
    agregarDatosHtmlCollection(htmlCollection, "nuevo elemento agregado");
    console.log(htmlCollection);

}

/*Lo que hace la funcion es pedir una variable de tipo (HTMLCollection) y un nuevo texto (nuevoTextNode)
luego borrarle su contenido innerHTML al HTMLCollection que pasamos por parametro y meterle
un elemento de tipo parrafo <p> y dentro del parrafo va el nuevo texto*/

function agregarDatosHtmlCollection(htmlCollection, nuevoTextNode) {
    let parrafo;
    let texto ;

    for (const key in htmlCollection) { //recorremos nuestro HTMLCollection
        if (htmlCollection.hasOwnProperty(key)) {//valida que no nos salgamos del length de nuestro HTMLCollection
            texto = document.createTextNode(nuevoTextNode);//en cada iteracion creamos un new text node
            parrafo = document.createElement("p");//en cada iteracion creamos un new Element
            htmlCollection[key].innerHTML = "";//vaciamos el texto que tiene cada elemento
            parrafo.append(texto); //la agregamos textoNode a nuestro parrafo <p>
            htmlCollection[key].appendChild(parrafo);//metemos el element parrafo dentro dentro del elemento
                                                    //actual de nuestro HTMLCollection
        }

    }
}


//Esta funcion crea un HTMLCollection a partir del tag que le enviemos
function crearHtmlCollection(tagName) {
    let htmlCollection = document.getElementsByTagName(tagName);
    return htmlCollection;
}


//funcion main
main();