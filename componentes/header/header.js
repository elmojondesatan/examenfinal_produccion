export function cargarMenu(){
    let header = document.createElement("header");
    header.className = "header_menu";

    let titulo1 = document.createElement("h2")
    titulo1.innerText = "Total X =";
    titulo1.className = "titulo1";
    header.appendChild(titulo1)

    let titulo2 = document.createElement("h2")
    titulo2.innerText = "Total / =";
    titulo2.className = "titulo2";
    header.appendChild(titulo2)


    return header;
}