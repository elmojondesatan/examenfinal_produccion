import { bloque } from "./itemBloque.js";

export function cargarBloques(){

    let bloques = document.createElement("div");
    bloques.className = "bloques";
    bloques.appendChild(bloque());
    
    
    return bloques;
}

