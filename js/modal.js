// CREACIÓN DE UNA NUEVA TAREA
function modal(){
    document.querySelector(".modal").classList.add("activar")
}

let boton = document.querySelector("#bt-todo");
boton.addEventListener("click", modal);

/*************************************** */
// Creacion para cerrar ventana:
function cerra_ventana(){
    document.querySelector(".modal").classList.remove("activar")
    document.querySelector(".entrada").value = " "; // Para borrar la entrada luego de darle X
}
let boton_cerrar = document.querySelector(".ekis");
boton_cerrar.addEventListener("click", cerra_ventana);

//Space betwen




