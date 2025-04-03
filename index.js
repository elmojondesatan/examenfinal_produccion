import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloques/bloques.js";

export function cargarDom(){

    let DOM = document.querySelector("#root");
    DOM.appendChild(cargarMenu());
    DOM.appendChild(cargarBloques())
    return DOM;
}

cargarDom();