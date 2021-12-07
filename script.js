//Create a hello world
console.log("Hello world")

function mostrarMensaje(){
    event.preventDefault();
    var mensaje = document.querySelector("#apellido").value;
    document.querySelector("#datosEscritos1").textContent = mensaje;
    var mensaje2 = document.querySelector("#nombre").value;
    document.querySelector("#datosEscritos2").textContent = mensaje2;
}

var formulario1 = document.querySelector("#formulario1");
formulario1.addEventListener("submit", mostrarMensaje);

