let nombres = [];

function agregarNombre(){
    let nombre = document.getElementById("amigo").value;
    if (nombre.length === 0) {
        alert("No se ingreso ningun nombre");
        return;
        
    }

nombres.push(nombre);
console.log(nombres);
document.getElementById("amigo").value = "";
}





