let nombres = [];
let nombre = 0;
mostrarNombre(nombre);
console.log(nombres);
function agregarNombre(){ //verifica si el campo esta vacio y agrega el nombre
    let nombre = document.getElementById("amigo").value;
    if (nombre.length === 0) {
        alert("No se ingreso ningun nombre");
        return;
        
    }

nombres.push(nombre);
mostrarNombre();
console.log(nombres);

document.getElementById("amigo").value = "";
}

function asignarNombre(listaAmigos,texto) { //envia el nombre a la lista
    let lista = document.querySelector(listaAmigos);
    lista.innerHTML = ""
    let elementoHTML = "";
    for (nombre of nombres) {
    elementoHTML += nombre;
    }
    lista.innerHTML = elementoHTML;
}
    
console.log(nombre);


function mostrarNombre() { //verifica si el array contiene nombres
    if (nombres.length === 0) {
console.log("nombres  está vacío");
} else {
console.log("nombres está ingresado correctamente");  }
}

function elegirGanador() { //selecciona al ganador de manera aleatoria
let indiceAletorio = Math.floor(Math.random()*nombres.length);
let nombreAleatorio = nombres[indiceAletorio];
console.log(nombreAleatorio);
let nombreGanador = document.getElementById("resultado");
nombreGanador.innerHTML = nombreAleatorio;
}


