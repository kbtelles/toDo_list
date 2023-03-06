// LIBRERIA
import { data_list } from "./data.js";
import {item_component} from "./item_component.js"


let caja_todo_list = (document.querySelector(".todo_list"));


// FUNCIÓN PARA IMPRIMIR LA LISTA DE TAREAS
function imprimir_todos(){

    //PARA DOS PARAMETROS SE CIERRAN ENTRE PARENTESIS
    data_list.forEach((element, indice) => {
        let todo = document.createElement("div");
        todo.innerHTML = item_component(indice); // item es un método que vive en otra hoja, con paremtesis se vuelve funcion * indice = elemnt.id
        caja_todo_list.appendChild(todo)
    });
}
imprimir_todos();

// MANIPULANDO EL DOM
// todo_list.innerHTML = item + item + item + item + item + item + item;

// FUNCIÓN PARA IMPRIMIR LA LISTA DE TAREAS
//(REFERENCIA CON EL DOM) 
// alert("hola soy función") - Sirve para dar alerta y verificar si funciona



// CREACIÓN DE UNA NUEVA TAREA
function nueva_tarea(){
    data_list.push("Nueva Tarea") /*Despues de agregaruna tarea*/
    caja_todo_list.innerHTML = " "; /*Sirve para limpiar los datos anteriores de la data*/
    imprimir_todos(); /*Imprimelo con ayuda de la función*/

}

let boton = document.querySelector("#bt-todo");
boton.addEventListener("click", nueva_tarea);