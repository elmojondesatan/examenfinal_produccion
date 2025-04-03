export function bloque(){
    let mini_bloques = document.createElement("div");
    mini_bloques. className = "mini_bloques";

    let x = document.createElement("p")
    x.className = "botonx";
    x.innerText = "X";
    mini_bloques.appendChild(x);

    let boton2 = document.createElement("p")
    x.className = "boton2";
    x.innerText = "/";
    mini_bloques.appendChild(boton2);

    return mini_bloques;
}