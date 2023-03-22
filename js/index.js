// LIBRERIA
import { imprimir_todos } from "./cargar_los_todos.js";
import { data_list } from "./data.js";    
let caja_todo_list = (document.querySelector(".todo_list"));

imprimir_todos();/*Cargar_los_todos*/
completar_tarea()


function puente (){
    let mensaje = document.querySelector(".entrada").value;
    nueva_tarea(mensaje);
}



function nueva_tarea(mensaje){
    data_list.push(    {
        id: "4",
        mensaje: mensaje,
        estado: true,
    }) /*Despues de agregar una tarea*/
    caja_todo_list.innerHTML = " "; /*Sirve para limpiar los datos anteriores de la data*/
    imprimir_todos(); /*Imprimelo con ayuda de la función*/

    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".entrada").value = " ";

}
document.querySelector(".bt-tarea").addEventListener("click", puente)


